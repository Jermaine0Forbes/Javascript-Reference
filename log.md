# Logs


## 5/10/19

### Angular
- Learn how to use guards
- learn about directives
- learn how to create custom events
- learn how to change title & meta tags
- learn how to use pipes
- learn how to use jwt tokens
- learn how to use httpclient generics


## 4/11/19

```html

<div class="row">
  <div class="col-md-12">
    <label>Customer Name:</label>
    <input type="text" name="customer_name" class="form-control" value="">
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    <label>Telephone:</label>
    <input type="text" name="telephone" class="form-control" value="">
  </div>
  <div class="col-md-6">
    <label>Email:</label>
    <input type="text" name="email" class="form-control" value="">
  </div>
</div>
<div class="location-section">
  <div class="row">
    <div class="col-md-6">
      <label>Additional Location Name:</label>
      <input type="text" name="locations_names[]" class="form-control" value="">
    </div>
    <div class="col-md-6">
      <label>Address:</label>
      <input type="text" name="locations_addresses[]" class="form-control" value="">
    </div>
  </div>
  <div class="btn-group update-rows" role="group" aria-label="Basic example">
  <button id="add-row" type="button" class="btn btn-secondary add"><span class="fa fa-plus"></span>  </button>
  </div>
</div>

<script type="text/javascript">

  (function(){

    var container = $(".location-section"),
        add = $("#add-row"),
        minus = $("#minus-row")
        row = `
        <div class="additional-row">
          <div class="row ">
            <div class="col-md-6">
              <label>Additional Location Name:</label>
              <input type="text" name="locations_names[]" class="form-control" value="">
            </div>
            <div class="col-md-6">
              <label>Address:</label>
              <input type="text" name="locations_addresses[]" class="form-control" value="">
            </div>
          </div>
          <div class="btn-group update-rows" role="group" aria-label="Basic example">
          <button id="add-row" type="button" class="btn btn-secondary add"><span class="fa fa-plus"></span>  </button>
          <button id="minus-row" type="button" class="btn btn-secondary minus"><span class="fa fa-minus"></span> </button>
          </div>
        </div>
        `;


         $(".location-section").on("click", function(e){

           if( $(e.target).hasClass("add") || $(e.target).hasClass("fa-plus") ){
             container.prepend(row)
           }else if ($(e.target).hasClass("minus") || $(e.target).hasClass("fa-minus")){

             $(e.target).closest(".additional-row").remove();
           }
         })


  })()
</script>
```

## 4/2/19

### Angular

- learn how to do route animations
- learn how to do sequence animations
- learn the different ways to change states
- learn how to create reusable animations
- learn how to use stagger and query in animations


## 3/28/19

### For Angular Animations

1. import BrowserAnimationsModule to app.module

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

```

2. find polyfill file, and uncomment `import 'web-animations-js';`. And run this code

```
npm install --save web-animations-js
```
