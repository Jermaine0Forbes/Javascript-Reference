# JQuery Reference

- [how to search through children ][find]
- [how to search through ancestors][closest]

[closest]:#jqueryclosest
[find]:#jqueryfind
[home]:#javascript-reference

### JQuery.closest()

**jquery definition:** For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.

```javascript
$( "li.item-a" )
  .closest( "ul" )
  .css( "background-color", "red" );
```
[go back home][home]

### JQuery.find()

**jquery definition:** Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.

**my definition:** the find method searches **down** through all of elements of a parent element to 
find whatever element or selector that you specify

**reference**
- [jquery](https://api.jquery.com/find/)

```javascript
var item1 = $( "li.item-1" )[ 0 ];
$( "li.item-ii" ).find( item1 ).css( "background-color", "red" );


```

[go back home][home]