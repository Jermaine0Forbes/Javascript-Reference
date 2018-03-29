# Javascript Reference

## Create Elements


## Get Elements 

- [document.querySelector][query-select]
- [document.querySelectorAll]
- [document.getElementsById]
- [document.getElementsByClassName]
- [document.getElementsByTagName]

## String 

- [how to search through a string][string-search]

## Window 

- [How to get the current url][window-location]


## Events


## Ajax 


## New Stuff

[query-select]:#documentqueryselector
[string-search]:#how-to-search-through-a-string
[window-location]:#how-to-get-the-current-url
[home]:#javascript-reference

<details>
<summary>
View Content
</summary>
</details>

<details>
<summary>
View Content
</summary>
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