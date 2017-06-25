function place(object, result) {
  if(object && typeof object === 'object' && object.entity_type) {
    result[object.entity_type] = result[object.entity_type] || {};
    result[object.entity_type][object.id] = result[object.entity_type][object.id]
      ? Object.assign(result[object.entity_type][object.id], object)
      : object;

    return object.id;
  } else {
    return object;
  }
}

export default function normalize(object, result) {
  if(object instanceof Array) {
    const ids = [];
    for(const item of object) {
      ids.push(place(item));
    }

    return ids;
  }
  
  if(object && typeof object === 'object') {
    const clone = {};

    for(const [key, value] of Object.entries(object)) {
      clone[key] = normalize(value, result);
    }

    return place(clone, result);
  }



  else return object;
}
