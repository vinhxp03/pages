let obj = {"first": 1, "second": 2}

function changeKeyCase(object) {
  return Object.keys(object).reduce((result, key) => {
    result[key.toUpperCase()] = object[key];
    return result;
  }, {});
}

let newObj = changeKeyCase(obj);

console.log('newObj', newObj);