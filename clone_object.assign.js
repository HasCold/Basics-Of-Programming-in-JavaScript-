// ****************Clone using Object.assign****************

// memory  : heap (Ak hi object ka address hoga obj and obj1)

const obj = {
    key1 : "value1",
    key2 : "value2",

}

// const obj1 = {...obj}; // cloning ka ye tariqa ha ke obj1 ma key3 ki value clone nahi hogi
const obj1 = Object.assign({},obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj1);
