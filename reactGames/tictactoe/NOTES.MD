# Tic Tac Toe Game by Scrimba

https://www.freecodecamp.org/news/learn-how-to-build-tic-tac-toe-with-react-hooks/

This tutorial is an updated version of the official react tutorial https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial using the newer react hooks api. 

# Tips by Scrimba

* First thing he does is creating his app structure (see how to create react app)


# Javascript

## Arrow functions

Allow for shorter function syntax 

```js
let myFunction = (a, b) => a * b;
```

or like this 

```js
hello = () => {
  return "Hello World!";
}
```

even shorter 

```js
hello = () =>  "Hello World!";
```

## Classes 

```js
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
```
## For loops

* For loops: Using var will redefine if a variable outside the loop is used let will only be in scope inside the loop
```js
for (let/var i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```
* For/in loops: also good to iterate over arrays
```js
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
```
* For/of loops: used to iterate over iterables, e.g. arrays, lists, ...
```js
for (variable of iterable) {
  // code block to be executed
}
```
# React

"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”."

Most basic component is `React.Component`


```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

* `render` returns a **React Element** which is a lightweight description of what to display on the screen 
* most developers use the syntax in the example called "JSX" because it's easier to write than the equivalent
* JSX accepts all js valid code even custom react components can be rendered allowing capsulation and building complex apps

```js
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
)
...;
```

## Function components

* Simpler way to write a component that only contain `render` method and dont have state 
* Instead of a class that extends `Reacts.Component` we can write a function, e.g.

```js
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

## Conventions

* Components names with on[Event] should define an action and handle[Event] should represent handling an event
## Tic Tac Toe Game Notes from Tutorial

* Data flows in react by passing data from a parent to a child using `props` &Rightarrow; See board and square for an example. 
* Props are attributes of a react component referenced with `this.`
* If we want to make a component interactive we can use the onClick attribute. Be careful to pass a function otherwise the component will fire everytime its rerendered
* For remembering an action (e.g. if a button was clicked) components use **state**
* State can be set using a constructor. They should always start with a call to `super(props)`
* To determine the winner we need to get the state of all squares. It may be possible to get this by asking each square for its state. This is discouraged because its inefficient. The board can tell the square what to display by passing a prob &Rightarrow; "To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component."
* Statue of a component is always private to a component, so in order to update the state of a component you have to pass a function from the component (which states should be updated) to the component that should update
* Prefer immutable data structures in components (e.g. work on array.slice() instead of `array[index]`) to build "pure components". In short its easier for react to know when a component needs to be re-rendered &Rightarrow; https://reactjs.org/docs/optimizing-performance.html#examples
## Setup for local development

* `npx create-react-app my-app` will create an app layout for you (Ensure Node.js is installed)

## Jsx 

* Extension to js syntax for displaying react components 
* Special syntax that supports html?
* [Read more](https://reactjs.org/docs/introducing-jsx.html)

# Tools

## Browser Extensions

* React Developer Tools: Inspect react components in Developer mode
* 

# VS Code

* Develop node.js apps: https://code.visualstudio.com/docs/nodejs/nodejs-tutorial

## Hot reloading for react apps

* Using npm start (The preferred way to develop a react app) hot reloading is enabled by default