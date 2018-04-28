# Javascript Reference

## General 
- [how to create an element]
- [convert DOM elements to array elements][dom-array]


## Classes
- [how fix the "this" keyword in methods][this-key]

## Get Elements 

- [document.querySelector][query-select]
- [document.querySelectorAll][query-selector-all]
- [document.getElementById][by-id]
- [document.getElementsByClassName][by-class]
- [document.getElementsByTagName][by-tag]

## String 

- [how to search through a string][string-search]

## Window 

- [How to get the current url][window-location]


## Events
- [how to hover]


## Ajax 
- [how to create a simple ajax request]


## Things I need to learn

- [async functions]

[dom-array]:#convert-dom-elements-to-array-elements
[by-tag]:#documentgetelementsbytagname
[by-class]:#documentgetelementsbyclassname
[by-id]:#documentgetelementbyid
[this-key]:#make-the-this-keyword-work
[query-selector-all]:#documentqueryselectorall
[query-select]:#documentqueryselector
[string-search]:#how-to-search-through-a-string
[window-location]:#how-to-get-the-current-url
[home]:#javascript-reference

___


### Convert DOM elements to array elements

<details>
<summary>
View Content
</summary>
    
**reference**
- [Javascript splice for array of DOM elements
](https://stackoverflow.com/questions/27637074/javascript-splice-for-array-of-dom-elements)

If you want to use array methods on DOM elements you have to use this simple method

```js
var myArray = [].slice.call(document.querySelectorAll('.selected'));
```

</details>

[go back :house:][home]


### document.getElementsByTagName


<details>
<summary>
View Content
</summary>

**HTML**
```html
<p class="number">1</p>
  <p class="number">2</p>
  <p class="number">3</p>
  <p class="number">4</p>
```

**JS**
```js
var ps  = document.getElementsByTagName("p");

 var arr = [].slice.call(ps);

 arr.forEach(function($){
    
   
   $.innerHTML = "blue";
 })
```

</details>

[go back :house:][home]

### document.getElementsByClassName

<details>
<summary>
View Content
</summary>

**HTML**
```html
<p class="number">1</p>
  <p class="number">2</p>
  <p class="number">3</p>
  <p class="number">4</p>
```
**JS**
```js

var ps  = document.getElementsByClassName("number");

 var arr = [].slice.call(ps);

 arr.forEach(function(val){
    //console.log(val.innerHTML); 
   
   val.style.color = "red";// changes all the font colors to red
 })

```

</details>

[go back :house:][home]


### document.getElementById

<details>
<summary>
View Content
</summary>

**HTML**
```html

<div id="target">
  Text
</div>

```

**JS**
```js

var t = document.getElementById("target");

t.innerHTML = "this is new text";

```

</details>

[go back :house:][home]

### make the this keyword work

**reference**
- [What is the proper way to create methods within a class?](https://www.reddit.com/r/javascript/comments/8f8ftu/what_is_the_proper_way_to_create_methods_within_a/)

A lot of times when using the methods of a class. A method might return undefined because 
there too many methods/functions inside other methods, or you might have a method inside an event listener
that throws off the other functions. In the case of that you should always bind **this** into the method within the constructor

<details>
<summary>
View Content
</summary>

```js
constructor() {
    //this should prevent any methods from giving you errrors
	// even if they are inside an event listener
	
    this.makeSound = this.makeSound.bind(this);
}
```

</details>

[go back :house:][home]
 


### document.querySelectorAll

<details>
<summary>
View Content
</summary>



This grabs all the selectors

**HTML**

```html
<div>
	<p class="p">
	 this is first paragraph
	 </p>
	 
	 <p class="p">
	 this is second paragraph
	 </p>
<div>

```

**JS**
```js
var p = document.querySelectorAll(".p");

p.style.color = "blue"; // this should grab the selector with class of "p" and change the color of it.
```

</details>

[go back :house:][home]



### document.querySelector

**reference**
- [mdn](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

<details>
<summary>
View Content
</summary>

This grabs the first selector that is being mentioned

```html
<div>
	<p class="p">
	 this is first paragraph
	 </p>
	 
	 <p class="p">
	 this is second paragraph
	 </p>
<div>

```

```js
var p = document.querySelector(".p");

p.style.color = "blue"; // this should grab the selector with class of "p" and change the color of it.
```

</details>

[go back :house:][home]
 

### How to search through a string

**reference**
-  [JavaScript String search() Method](https://www.w3schools.com/jsref/jsref_search.asp)

```javascript

var str = "Hello World";

var result = str.search("World");

console.log(result); // 6

result = str.search("Booty");

console.log(result)// -1 : which means they could not find value

```

[go back home][home]

### How to get the current url

Gets the url that you are currently on

**reference**
- [Get the current URL with JavaScript?](https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript)

```javascript

//calls the window object, and grabs the path from the location property
var url = window.location.href;

console.log(url)// http://example.com
```
**options**
- hash : Sets or returns the anchor portion of a URL
- host  : Sets or returns the hostname and port of a URL.
- hostname : Sets or returns the hostname of a URL.
- href : Sets or returns the entire URL.
- pathname : Sets or returns the path name of a URL.
- port : Sets or returns the port number the server uses for a URL
- protocol : Sets or returns the protocol of a URL
- search : Sets or returns the query portion of a URL

[go back home][home]