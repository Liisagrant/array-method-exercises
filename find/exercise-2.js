/*
Exercise 2: Find a person using an ID

You are going to use the '.find()' array method to find
the person with the right id.

Remember that the reason we'd use the '.find' is that it
will stop looping through values as soon as we "find" the item
we are looking for.

An array of people ('people') has been supplied to you.

Find the person with an id of 1 and set that to the supplied
'foundPerson' variable.

*/

const people = [
  {
    id: 0,
    firstName: "Ola",
    lastName: "Nordmann",
  },
  {
    id: 1,
    firstName: "Kari",
    lastName: "Nordmann",
  },
  {
    id: 2,
    firstName: "Nora",
    lastName: "Nordmann",
  },
];

const foundPerson = people.find((people) => people.id === 1);

console.log(foundPerson);
