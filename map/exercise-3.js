/*
Exercise 3: Generating Button HTML elements

You will generate 3 HTML buttons.

An array 'buttons' has been provided for you.

A variable 'buttonElements' has also been provided
for you. You should set your map to this variable.

1. Use .map to loop through the 'buttons' array and
generate a button element.

2. Set the 'text' of the current object to the 'innerText'
value of the button element you have generated.

Tip: You can use 'document.createElement('elementType')'
to generate a button:
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

*/

const buttons = [
  {
    text: "Button Text 1",
  },
  {
    text: "Button Text 2",
  },
  {
    text: "Button Text 3",
  },
];

const buttonElements = buttons.map((item) => {
  const myBtn = document.createElement("button");
  myBtn.innerHTML = item.text;
  return myBtn;
});

console.log(buttonElements);
