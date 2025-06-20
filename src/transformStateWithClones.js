'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let newState = { ...state };

  for (const action of actions) {
    const { type, keysToRemove, extraData } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(newState, extraData);
        result.push({ ...newState });
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete newState[key];
        }
        result.push({ ...newState });
        break;

      case 'clear':
        newState = {};
        result.push({ ...newState });
        break;
    }
  }

  return result;
}

module.exports = transformStateWithClones;
