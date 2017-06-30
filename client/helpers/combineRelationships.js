import { mapKeys } from 'lodash';
import pluralize from 'pluralize';


function place(object, result) {
  if(object && typeof object === 'object' && object.entity_type) {
    const { id, entity_type: entityType } = object;

    result[entityType] = result[entityType] || {};
    result[entityType][id] = result[entityType][id]
      ? Object.assign(result[entityType][id], object)
      : object;

    return object.id;
  } else {
    return object;
  }
}

function normalizer(object, result) {
  if(object && typeof object === 'object') {
    const clone = {};

    for(const [key, value] of Object.entries(object)) {
      clone[key] = normalizer(value, result);
    }

    return place(clone, result);
  }

  if(object instanceof Array) {
    const ids = [];
    for(const item of object) {
      ids.push(place(item));
    }
    return ids;
  }

  else return object;
}

function normalize(data = {}) {
  const result = {};
  normalizer(data, result);
  return result;
}

function pluralizeKeys(object) {
  return mapKeys(object, (value, key) => pluralize(key));
}

export function combineRelationships(state, response) {
  const normalized = pluralizeKeys(normalize(response));
  const newState = Object.assign({}, state);



  for(const [key, branch] of Object.entries(newState)) {
    if(key in normalized) {
      const newBranch = Object.assign({}, branch);
      newState[key] = newBranch;
      newBranch.data = Object.assign({}, branch.data);

      for(const [id, entity] of Object.entries(normalized[key])) {
        if(id in newBranch.data) {
          newBranch.data[id] = Object.assign({}, branch[id], entity);
        } else {
          newBranch.data[id] = entity;
        }
      }
    }
  }

  return newState;
}
