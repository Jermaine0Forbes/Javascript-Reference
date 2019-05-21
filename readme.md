# Javascript Reference

## General
- [how to create an element][createElement]
- [convert DOM elements to array elements][dom-array]
- [how to create a DOM element from a string][dom-string]


## Classes
- [how to fix the "this" keyword in methods][this-key]

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
- [how to hover][event-hover]
- [how to duplicate elements and keep events attached to them][dup-events]

## Ajax
- [how to use FormData][form-data]
- [using the request object for fetch][req-fetch]
- [how to create a simple fetch request][fetch-get]


## Things I need to learn
- [async functions]

[req-fetch]:#using-the-request-object-for-fetch
[form-data]:#how-to-use-formdata
[dom-string]:#how-to-create-a-dom-element-from-a-string
[dup-events]:#how-to-duplicate-elements-and-keep-events-attached-to-them
[fetch-get]:#how-to-create-a-simple-ajax-request
[event-hover]:#how-to-hover
[createElement]:#how-to-create-element
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

### using the request object for fetch

<details>
<summary>
View Content
</summary>

**reference**
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request)

**My definition**: It is not really necessary, but you can use this object
to make request when using the fetch method

```js
var request = new Request("http://google.com", {method:"POST", body:data});

fetch(request)
.then(res => res.text())
.then( res => console.log(res))
```

</details>


[go back :house:][home]


### how to use formdata

<details>
<summary>
View Content
</summary>

**reference**
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Uploading files using 'fetch' and 'FormData'](https://muffinman.io/uploading-files-using-fetch-multipart-form-data/)

**MDN definition:** The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method.

```js
let data = new FormData();//creates the object

data.append("file", input.["files"][0])//create the key-value pair
```

</details>


[go back :house:][home]

### how to create a DOM element from a string

<details>
<summary>
View Content
</summary>

**reference**
- [Creating a new DOM element from an HTML string using built-in DOM methods or Prototype
](https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro)

If you want to create an element from a string you have created in
javascript. There is only a couple of methods you can use

```js

let string = "<div> this is a string</div>",
container = document.getElementById("container");

container.append(string) // doesn't work

container.insertAdjacentHTML("beforeend",string)// this will work

container.innerHTML = string
 // this will work, however,  it will clear any other content that is in
 // the container element


```

</details>

[go back :house:][home]


### how to duplicate elements and keep events attached to them

<details>
<summary>
View Content
</summary>

**reference**
- [stackoverflow](https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)

There is not really a way to add elements dynamically and attach the same event,
however, you can add event on the parent or ancestor element and determine if an
event goes off run a specific function you want to run

```js
const form = document.getElementById("data-form");

function duplicateRow($){
  var group = $.parentNode;
  var copy = group.cloneNode(true);
  group.insertAdjacentElement("afterend", copy);
  console.log(copy.children)

}

// If anyone clicks inside the form the event will trigger
form.addEventListener("click",function(e){

  // if the target element has this class name then code will be ran
  if(e.target.className == "btn btn-primary btn-duplicate"){
    console.log(e.target);
    duplicateRow(e.target)// this function duplicates a row
  }

})
```

</details>

[go back :house:][home]

### how to create a simple ajax request

**reference**
- [mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

<details>
<summary>
View Content
</summary>

```html
<main>
    <section class="container">
      <h2>Practice </h2>
      <div class="row">
        <button class="btn btn-primary" type="button" name="button">load data</button>
      </div>
      <p id="result"></p>

    </section>
</main>

<script type="text/javascript">
 (function(){

   const btn = document.querySelector("button");

   btn.onclick = function(){

     //This fetches any data from get-ajax.php
     fetch("views/get-ajax.php")
     // turns json data into objects
     .then((response) => response.json())
     .then((response) => {
       const p = document.getElementById("result")
       let text = "";
       console.log(response)
       // Loops through the array objects and adds the data into paragraph tag
       //which then adds it into the text variable
       response.forEach(function(e){
         text +=`
         <p><strong>${e.id}</strong> ${e.animal} - ${e.sex} </p>
         `;

       })

       //the p tag
       p.innerHTML =text;


     })
   }

 })()
</script>

```
**In get-ajax.php**
```php
ini_set('display_errors', 1);
error_reporting(E_ALL);


$sql = new mysqli("localhost","username","password","Testing");

if($sql->connect_error){
  die($sql->connect_error);
}

$query = "SELECT id, animal,sex FROM animals LIMIT 10";

$state = $sql->prepare($query);

if($state){

  $state->execute();

  $state->bind_result($id,$name,$sex);

  while($state->fetch()){
    $data[]= ["id" =>$id , "animal" => $name, "sex" =>$sex];

  }
  $state->close();
  $json = json_encode($data);

}else{

  $json = json_encode(["data" => "something went wrong"]);
}


echo $json;
```

</details>

[go back :house:][home]



### how to hover


<details>
<summary>
View Content
</summary>

**reference**
- [mdn](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter)


**HTML**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
        #box{
      height:100px;
      background:blue;
      width:100px;
      }
  </style>
</head>
<body>

  <div id="box">

  </div>

</body>
</html>
```

**JS**
```js
const box = document.getElementById("box");
box.style.transition = "all 0.3s";

box.onmouseenter = function(){
  this.style.background = "red";
}

box.onmouseleave = function(){
  this.style.background="purple";
}
```

</details>

[go back :house:][home]


### how to create an element


<details>
<summary>
View Content
</summary>

**reference**
- [w3schools](https://www.w3schools.com/jsref/met_document_createelement.asp)

#### 1st Way - best way

```js
<main>
<div id="target">
</div>
</main>

<script>
const t = document.getElementById("target")
t.innerHTML = "<p> this is random text </p>";// the best way to create elements
</script>

```


#### 2nd Way

```js
<main>
<div id="target">
</div>
</main>

<script>
const t = document.getElementById("target")
const p = document.createElement("p");
let text = document.createTextNode("this is random text")
p.appendChild(text);

t.appendChild(p)// will add the p tag, with the text inside the target div tag
</script>
```

</details>

[go back :house:][home]


### Convert DOM elements to array elements

<details>
<summary>
View Content
</summary>

**reference**
- [Javascript splice for array of DOM elements
](https://stackoverflow.com/questions/27637074/javascript-splice-for-array-of-dom-elements)

If you want to use array methods on DOM elements you have to use this simple method

#### Best Method

```js
var myArray = Array.from(document.querySelectorAll('.selected'));
```

#### 2nd Method
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
