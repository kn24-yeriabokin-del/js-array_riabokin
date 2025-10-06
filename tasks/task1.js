

function filterAdults(people) {
  const adults = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      adults.push(people[i]);
    }
  }

  return adults;
}


console.log(filterAdults([
  { name: 'John', age: 17 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 18 }
]));


module.exports = filterAdults;
