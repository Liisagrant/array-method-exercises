/*
Exercise 2: Greeting messages

You are going to create a an array of greeting messages.

There is a 'people' array provided for you as well as
'greetingMessages' variable which should be set to your
.map array method.

Return a string that combines "Hello" with the 'firstName'
and 'lastName' properties. At the end of the string should be
an exclamation mark.

The result should look like the following if the 'firstName'
is "Ola" and the lastName is "Nordmann":

"Hello Ola Nordmann!"

Tip: Use a template string to build the string:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

*/

const people = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
  },
  {
    firstName: "Kari",
    lastName: "Nordmann",
  },
  {
    firstName: "Nora",
    lastName: "Nordmann",
  },
];

const greetingMessages = people.map(
  ({ firstName, lastName }) => `Hello ${firstName} ${lastName}`
);

console.log(greetingMessages);
