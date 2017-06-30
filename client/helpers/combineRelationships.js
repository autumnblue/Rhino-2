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



/*
x = {};

normalize({
  "service_order": {
    entity_type: "service_order",
    id: "33",
    "end_date": "2018-01-03T00:00:00Z",
    "project_manager": {
      "username": "newuser",
      "first_name": "newuserfirst",
      "last_name": "newuserlast",
      "entity_type": "user",
      "is_active": true,
      "email": "",
      "id": 2,
      "heyyo": "heyyo"
    },
    "custom_title": "Service Order Example #1",
    "days_to_complete": 1.875,
    "number_of_employees": 1,
    "id": 1,
    "revisions": [
      {
        entity_type: 'revision',
        id: 33,
        "user_id": 3,
        "description": "Service Order #1 Example Revision #1",
        "user_username": "exampleRhinoUser2",
        "time": "16:56:00 03/04/17",
        "user_full_name": "Example2von User2",
        "user_email": "example.user.2@rhinosecuritylabs.com"
      },
      {
        entity_type: 'revision',
        id: 1,
        "user_id": 3,
        "description": "Service Order #1 Example Revision #2",
        "user_username": "exampleRhinoUser2",
        "time": "16:56:00 03/04/17",
        "user_full_name": "Example2von User2",
        "user_email": "example.user.2@rhinosecuritylabs.com"
      }
    ],
    "created": "2017-04-05T15:14:20.812535Z",
    "signed_date": null,
    "notes": "",
    "author": {
      "username": "exampleRhinoUser2",
      "first_name": "Example2",
      "last_name": "von User2",
      "entity_type": "user",
      "is_active": true,
      "email": "example.user.2@rhinosecuritylabs.com",
      "id": 2,
      "waza": "waza"
    },
    "entity_type": "service_order",
    "composite_id": "SO_1_clientx2_04-05-2017",
    "total_due": 118.49964,
    "remediation_text": "",
    "team": [
      {
        "username": "exampleRhinoUser2",
        "first_name": "Example2",
        "last_name": "von User2",
        "entity_type": "user",
        "is_active": true,
        "email": "example.user.2@rhinosecuritylabs.com",
        "id": 3
      },
      {
        "username": "exampleRhinoUser3",
        "first_name": "Example3",
        "last_name": "d'User3",
        "entity_type": "user",
        "is_active": true,
        "email": "example.user.3@rhinosecuritylabs.com",
        "id": 4
      },
      {
        "username": "newuser",
        "first_name": "newuserfirst",
        "last_name": "newuserlast",
        "entity_type": "user",
        "is_active": true,
        "email": "",
        "id": 5
      }
    ],
    "raw_html": "",
    "hours_per_day": 8,
    "start_date": "2017-12-31T10:33:00Z"
  }
}, x);

console.log(x);


export default function (state = {}, action) {
  switch(action.type) {
    case 'COMBINE_RELATIONSHIPS':
      const { response } = action;

      for(const [key, value] of response) {
        const clone = {};
        if(isObject(value)) {
          // run recursive
        }

        if(value.entity_type) {

        }
      }

      if(response.entity_type) {

      }
  }
*/
