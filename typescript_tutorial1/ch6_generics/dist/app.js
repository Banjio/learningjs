"use strict";
const names = [];
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
mergedObj.age;
const mergedObj2 = merge({ name: 'Max' }, 30);
console.log();
//# sourceMappingURL=app.js.map