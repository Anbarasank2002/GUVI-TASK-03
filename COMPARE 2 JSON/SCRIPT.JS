const json1 = { name: "John", age: 30 };
const json2 = { age: 30, name: "John" };

const keys1 = Object.keys(json1);
const keys2 = Object.keys(json2);

if (keys1.length !== keys2.length) {
  console.log("fasle");
} else {
  for (const key in json1) {
    if (!(key in json2) || json1[key] !== json2[key]) {
      console.log("fasle");
      break;
    }
  }

  console.log("true");
}
