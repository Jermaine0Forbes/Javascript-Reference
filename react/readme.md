# React

## General
- [how to install react][i-react]
- [how to change the port number][change-port]
- [how to create a component][c-comp]
- [how to render react][react-render]

## Events
- [how to use the click event][click-event]
- [how to use the hover event][]

## Attributes
- [how to add class names to elements][class-dom]
- [how to use checked in the checkbox][checked]
- [how to use selected on option elements][selected]

## Hooks
- [how to create hook][create-hook]
- [how to use an effect hook][effect-hook]
- [how to make the effect hook run only once][hook-once]

## Redux
- what is redux
- how to use a reducer
- how to use redux-thunk
- basic react redux setup

## Router

## Errors
- Element type is invalid: expected a string (for built-in components) or a class/function (for composite components)


[click-event]:#how-to-use-the-click-event
[hook-once]:#how-to-make-the-effect-hook-run-once
[effect-hook]:#how-to-use-an-effect-hook
[create-hook]:#how-to-create-hook
[selected]:#how-to-use-selected-on-options
[checked]:#how-to-use-checked-in-the-checkbox
[class-dom]:#how-to-add-class-names-to-elements
[react-render]:#how-to-render-react
[c-comp]:#how-to-create-a-component
[home]:#react
[i-react]:#how-to-install-react
[change-port]:#how-to-change-the-port-number

---


### how to use the click event

<details>
<summary>
View Content
</summary>

**reference**
- [reactjs](https://reactjs.org/docs/handling-events.html)

:blue_book: **Summary:** We are just creating a basic component that allows you
to click on a button and the value of count will go up by an increment of one.
There are several ways to do this


### 1st method

<details>
<summary>
Class based component
</summary>

```js
import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(){
    super()

    this.state = {count:0} // creating the count property
  }

  countIt = () => { // method that increases the counter

    this.setState({
      count:++this.count
    })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Basic Event Tutorial</h2>
        </div>
        <div className="App-event">
          <p>  Click here to see something cool</p>
          // this is the button that will trigger the countIt method
          <Button variant="primary" onClick={this.countIt}>Click on this</Button>
        </div>
        <div className="result">
        {this.state.count}// this will show the changes of the number when clicking
        </div>
      </div>
    );
  }
}

export default App;

```

</details>

#### 2nd method

<details>
<summary>
Hook based component
</summary>


```js
import React, { Component, useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';


// this is a hooks based component
const ButtonEvent = () =>{

  const [counter,setCounter] = useState(0);

  useEffect(() => {
    //if the counter is only at 0 then dont run
    // the code below
    if(counter === 0)
    return;

    document.querySelector("div.result").innerHTML = `you clicked ${counter} times!`;
  },[counter])//useEffect checks to see if there were any changes made to counter
    // if there weren't then it doesn't run

  return (
    <div className="App-event">
      <p>  Click here to see something cool</p>
      // after every click the setCounter increases the amount to counter
      <Button variant="primary" onClick={() => setCounter(counter+1)}>Click on this</Button>
    </div>
  )
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Basic Event Tutorial</h2>
        </div>
        <ButtonEvent/>// this is where I put the hook component
        <div className="result">
        </div>
      </div>
    );
  }
}

export default App;

```

</details>



</details>

[go back :house:][home]

### how to make the effect hook run once

<details>
<summary>
View Content
</summary>

**reference**
- [How to call loading function with React useEffect only once](https://stackoverflow.com/questions/53120972/how-to-call-loading-function-with-react-useeffect-only-once)

If the second parameter in useEffect is a blank array, then the function will only
update once

```js
const GetAnimals = () => {
  let url = "http://php.jforbes.site/ajax/ng-test.php",
     component;

  const [data , setData] = useState([]);

// If the second parameter is a empty array it will only run once
  useEffect(()=>{

       axios.get(url)
      .then(res =>{
        console.log(res)
        setData(res.data);
      })

  },[])

  if(data.length){
    component = data.map((elem )=>{
      return <AnimalBlock key={elem.id+"-"} id={elem.id} animal={elem.animal} sex={elem.sex} />
    })
  }else{
    component = <p>nothings here </p>
  }

  return component;
}

```

</details>

[go back :house:][home]



### how to use an effect hook

<details>
<summary>
View Content
</summary>

**reference**
- [react](https://reactjs.org/docs/hooks-effect.html)

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

</details>

[go back :house:][home]


### how to create hook

<details>
<summary>
View Content
</summary>

**reference**
- [react](https://reactjs.org/docs/hooks-intro.html)

**My definition:** Basically this is the new thing for react that is supposed to replace
class components. The **useState** method is supposed to replace the **state** property and **setState**
method that you will call in react to change a value and rerender the components to
the view.

**Things to remember**
- useState can accept a string, number, array, anything
- You have to add a default value in the useState, and it will be assigned to the first item in the array
- There's only two items you can put into the *useState* variable. The first one is supposed
to retain the value and the second one is supposed to change the value
- set the items like this [count, setCount], [fruit, setFruit], [animal, setAnimal], etc.

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

</details>

[go back :house:][home]



### how to use selected on options

<details>
<summary>
View Content
</summary>

**reference**
- [react](https://reactjs.org/docs/dom-elements.html)

use defaultValue on  the select element when outputting it for the first time

```js
const Option = () => {


  return(
    <div>
      <form>
       <div className="form-group col-2">

       // use defaultValue on  the select element
       <select defaultValue="blue">
         <option value="red"> red</option>
         <option value="blue" > blue</option>
         <option value="green"> green</option>
       </select>
       <div className="form-group">
         <input className="btn btn-primary" type="submit" name="submit"/>
       </div>

       </div>
      </form>

    </div>

  )
}
```

</details>

[go back :house:][home]


### how to use checked in the checkbox

<details>
<summary>
View Content
</summary>

**reference**
- [react](https://reactjs.org/docs/dom-elements.html)

```js

const Checks = () => {


  return(
    <div>
      <form>
       <div className="form-group row col-2 justify-content-between">

       // React recommends using defaultChecked for the initial value you want checked
       <p>red <br/> <input type="checkbox" value="red" defaultChecked/></p>
       <p>blue <br/><input type="checkbox" value="blue"/> </p>
       <p>green <br/><input type="checkbox" value="green"/> </p>
       </div>
       <div className="form-group">
         <input className="btn btn-primary" type="submit" name="submit"/>
       </div>


      </form>

    </div>

  )
}

```

</details>

[go back :house:][home]



### how to add class names to elements

<details>
<summary>
View Content
</summary>

**reference**
- [react](https://reactjs.org/docs/dom-elements.html)

In react you cannot add the regular class name into an element because it will
conflict the javascript keyword class that is used to create classes. Instead
you have to write className instead

```js
render(){
  return(
    <p className="big-paragraph"> this is a big paragraph</p>
  )
}


```

</details>

[go back :house:][home]


### how to render react

<details>
<summary>
View Content
</summary>

**reference**
- [reactjs](https://reactjs.org/docs/rendering-elements.html)

`ReactDOM.render(component, target element);`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

```

</details>

[go back :house:][home]

### how to create a component

<details>
<summary>
View Content
</summary>

**reference**
- [reactjs](https://reactjs.org/docs/components-and-props.html)

#### With a class

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


#### With a function

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

</details>

[go back :house:][home]


### how to change the port number

<details>
<summary>
View Content
</summary>

**reference**
- [Option to specify port when running the server?](https://github.com/facebook/create-react-app/issues/1083)

#### Method 1

create a `.env` file and add this in

```
PORT = 4000
```

</details>

[go back :house:][home]




### how to install react

<details>
<summary>
View Content
</summary>

**reference**
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

```
npx create-react-app my-app
cd my-app
npm start
```

</details>

[go back :house:][home]
