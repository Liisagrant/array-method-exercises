/*
Exercise 2: Filter users who are admins and verified

You are going to filter users that are admins ('isAdmin')
and who are verified ('isVerified')

An array of users ('users') has been provided for you.

A variable 'filteredUsers' has been provided for you. You should
set your .filter results to this variable.

*/

const users = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
    isAdmin: true,
    isVerified: false,
  },
  {
    firstName: "Kari",
    lastName: "Nordmann",
    isAdmin: true,
    isVerified: true,
  },
  {
    firstName: "Jan",
    lastName: "Nordmann",
    isAdmin: true,
    isVerified: true,
  },
  {
    firstName: "Nora",
    lastName: "Nordmann",
    isAdmin: false,
    isVerified: false,
  },
];

const filteredUsers = users.filter(
  ({ isAdmin, isVerified }) => isAdmin && isVerified === true
);

console.log(filteredUsers);
