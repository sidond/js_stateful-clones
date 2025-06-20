'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  const newState = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
      continue;
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
      continue;
    }

    if (action.type === 'clear') {
      for (const key in state) {
        delete newState[key];
      }
      continue;
    }
  }

  return result.push({ ...newState });
}

module.exports = transformStateWithClones;
