var person = {
    name: "John",
    lastName: "Doe",
    age: 35,
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: null // This will be set later
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};
person.significantOther = person2;

var family = {
    lastName: "Doe",
    members: [person, person2]
};
family.members[0].luckyNumbers[3] = 33;
var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

family.members.push(person3);
let sumLuckyNumbers = 0;

for (let i = 0; i < family.members.length; i++) {
    let luckyNumbers = family.members[i].luckyNumbers;
    // Sum each member's luckyNumbers
    for (let j = 0; j < luckyNumbers.length; j++) {
        sumLuckyNumbers += luckyNumbers[j];
    }
}

console.log(sumLuckyNumbers); 
