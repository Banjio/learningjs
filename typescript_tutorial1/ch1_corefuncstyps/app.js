// I do not know if this is still recommended -> The official ts documentation recommends interfaces  for this purpose
// The author of the video however recommends also not to use this syntax and let ts interfere the types
/*const person: {
    name: string;
    age: number;
} = { */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// If we do not set the tuple type we can do stuff like this to role which is obviously dangerous for production code
// We can do this because ts inferes the type array with union type string | number (spoken string or number)
// This however is still allowed in tuples: Question how can we avoid this?
//person.role.push('admin')
// If we specify it as tuple we can catch this error
//person.role[1] = 10
let favoriteActivities;
favoriteActivities = ['Sports', 'Hunting Paper Ducks'];
console.log(person.role);
// The following loops are equivalent
// Using in gives the index of gives the value
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
person.hobbies.forEach(element => console.log(element));
