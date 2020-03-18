# Javascript Libraries

- [ace][ace]
- [axios][axios]
- [highlight][highlight]

[axios]:#axios
[ace]:#ace
[highlight]:#highlight
[home]:#javascript-libraries

## axios

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [github](https://github.com/axios/axios)
---

---
:blue_book: **Summary:** its pretty much an ajax library

### to do a get request
```js
import axios from "axios";

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
```

### to do a post request

```js
import axios from "axios";
const url = "http://www.example.com/api/data";
const data = {name:"jermaine forbes"};

axios({
    method:"post",
    url: url,
    data: data
    headers:{"Content-Type" : "application/json"}
  })
  .then(res => {
    let data = res.data;
    console.log(data)
  })
  .catch(err => console.log(err))

```
### to do a post request with formdata

```js
import axios from "axios";
const url = "http://www.example.com/api/data";
const form = document.querySelector("form");
const data = new FormData(form);

axios({
    method:"post",
    url: url,
    data: data
    headers:{'Content-Type': 'multipart/form-data' }
  })
  .then(res => {
    let data = res.data;
    console.log(data)
  })
  .catch(err => console.log(err))

```
### to do a post request and send JWT token

```js
import axios from "axios";
const url = "http://www.example.com/api/data";
const form = document.querySelector("form");
const data = new FormData(form);
const acces_token = "alij23490j...";
const token = "Bearer "+access_token;

axios({
    method:"post",
    url: url,
    data: data
    headers:{'Authorization': token }
  })
  .then(res => {
    let data = res.data;
    console.log(data)
  })
  .catch(err => console.log(err))

```

</details>

[go back :house:][home]

## highlight

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [github](https://github.com/highlightjs/highlight.js)
- [homepage](https://highlightjs.org/)
- [cdnjs](https://cdnjs.com/libraries/highlight.js)
---

:star: Example 1
- [highlight.js - codepen](https://codepen.io/blackyurizan/pen/jOPzRdj)

---
:blue_book: **Summary:** adds code highlighting syntax for language text


1. Add links to stylesheet and scripts
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/agate.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
```

2. Add the `pre code` blocks and add a class name of the language you want highlighted

```html
<pre>
  <code class="css">
    @font-face {
      font-family: Chunkfive; src: url('Chunkfive.otf');
    }

    body, .usertext {
      color: #F0F0F0; background: #600;
      font-family: Chunkfive, sans;
      --heading-1: 30px/32px Helvetica, sans-serif;
    }

    @import url(print.css);
    @media print {
      a[href^=http]::after {
        content: attr(href)
      }
    }
  </code>
</pre>
```

3. In the bottom of the code block activate the *highlight*

```html
<script type="text/javascript">
  hljs.initHighlightingOnLoad();
</script>
```

4. Everything should work, here were some functions I was creating to make it
easier to change color themes.

```js
function initLink(hrefVal){
    const link = document.createElement("link");
    link.setAttribute("rel","stylesheet");
    link.setAttribute("href",hrefVal);
    link.setAttribute("id","hljs-theme");
    document.head.appendChild(link);
  }
  function setTheme(theme="default", version="9.18.1", link="link#hljs-theme"){
            const  v = version,
                   th = theme,
                   style = document.querySelector(link),
                   cdn = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${v}/styles/${th}.min.css`;
             if(!style){initLink(cdn)}
              style.href = cdn;

   }

 function getThemes(){
   return [
     "a11y-dark",
     "a11y-light",
     "agate",
     "an-old-hope",
     "androidstudio",
     "arduino-light",
     "arta",
     "ascetic",
     "atelier-cave-dark",
     "atelier-cave-light",
   ];
 }

//setTheme("gml");

 //setTheme("googlecode");


 document.querySelectorAll("pre code").forEach(block =>{

           let values = Array.from(block.classList.values()),
           themes = getThemes(),
           filtered = themes.filter(theme => {
               let  val = values.find(val => val == theme)
               return val;
           }) ,
           theme = filtered[0];


           setTheme(theme)
});

```

</details>

[go back :house:][home]



## ace

Ace is an embeddable code editor written in JavaScript. It matches the features and performance of native editors such as Sublime, Vim and TextMate.

- [Home](https://ace.c9.io/#nav=embedding&api=editor)
- [Look at themes](https://ace.c9.io/tool/mode_creator.html)
- [Look at options](https://github.com/ajaxorg/ace/wiki/Configuring-Ace)
- [Get text from code editor](https://stackoverflow.com/questions/8963855/how-do-i-get-value-from-ace-editor)

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Ace Editor</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.2/ace.js"></script>
  </head>
  <body>
    <form class="" action="index.html" method="post">
      <div class="card-body">
          <div class="form-group">
              <label for="summary">Summary</label>
              <div id="editor-summary" class="text-editor">
                {{$summary}}
              </div>
              <textarea id="hidden-summary" class="d-none"  name="summary" rows="8" cols="80">{{$summary}}</textarea>
          </div>
      </div>
    </form>

    <script type="text/javascript">
    var editor = ace.edit("editor");
    var area = document.getElementById("hidden-summary");
    var options = {
      firstLineNumber:1,
      minLines:50,
      fontSize:16,
      mode:"ace/mode/html",
      theme:"ace/theme/dracula"
    };
    editor.setOptions(options);
    editor.getSession().on("change", function () {
           area.value = editorSum.getSession().getValue();
       });
    </script>
  </body>
</html>

```
