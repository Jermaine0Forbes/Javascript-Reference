# React

## General
- [how to install react][i-react]
- [how to change the port number][change-port]
- [how to create a component][c-comp]
- [how to render react][react-render]

## Attributes
- [how to add class names to elements][class-dom]

## Hooks
- [how to create hook]

[class-dom]:#how-to-add-class-names-to-elements
[react-render]:#how-to-render-react
[c-comp]:#how-to-create-a-component
[home]:#react
[i-react]:#how-to-install-react
[change-port]:#how-to-change-the-port-number

### how to add class names to elements

<details>
<summary>
View Content
</summary>

**reference**
- [react](https://reactjs.org/docs/dom-elements.html)

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
