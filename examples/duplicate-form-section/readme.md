# Duplicate Form Section

## Date 5/7/19

I created this simple application that allowed you to add/subtract multiple  form sections into a form. It was some sort of coding challenge from "Less Paper Co.",
I don't want to delete it, so I just want to past my code here. Maybe it will be
useful in the future


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
