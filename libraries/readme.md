# Javascript Libraries

- [highlight][highlight]
- [ace][ace]

[ace]:#ace
[highlight]:#highlight
[home]:#javascript-libraries

## highlight

**reference**
-[github](https://github.com/highlightjs/highlight.js)


adds code highlighting syntax for language text

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
