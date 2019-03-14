# Javascript Snippets

## Vanilla

- [how to duplicate a row][dup-row]

## JQuery

## Typescript

- [ scroll to ][scroll-to]
- [ scroll visible][scroll-visible]


## Both
- [stick menu][stick-menu]

[dup-row]:#how-to-duplicate-a-row
[stick-menu]:#stick-menu
[scroll-visible]:#scroll-visible
[home]:#javascript-snippets
[scroll-to]:#scroll-to


### how to duplicate a row



<details>
<summary>
View Content
</summary>

```js

function duplicateRow($){
  var group = $.parentNode;
  var copy = group.cloneNode(true);
  group.insertAdjacentElement("afterend", copy);
  // console.log(copy.children)

}
window.addEventListener("click", function(e){
  if(e.target.name == "duplicate-row" || e.target.className == "fa fa-plus"){
    let target = e.target;
    let element = (target.className == "fa fa-plus")? target.parentNode: target;
    duplicate(element);
  }
})//click
```

```html

```

</details>

[go back :house:][home]

### Stick Menu


<details>
<summary>
View Content
</summary>

```js
function StickMenu(obj){
         obj = empty(obj)? {}:obj;
        const
        menuBar =  $(obj.menu) || $('.sticky-menu'),
        menuClass = obj.class || "on",
        _up     = obj.whenUp || false,
        _down     = obj.whenDown || false,
        _window = $(window);

        let
        properties ,
        adminBar = obj.bar || $('#wpadminbar').height(),
        menuHeight ,
        menuOffset ,
        previousPosition,
        scrollPosition,
        sticking;

        function whenUp(){
            if(_up){
                _up();
            }else{
                //console.log("it is scrolling up")
            }

        }
        function whenDown(){
            if(_down){
                _down();
            }else{
                //console.log("it is scrolling down")
            }
        }

        function whenSticking(){

            if( !menuBar.hasClass(menuClass) ){
                menuBar.addClass(menuClass).css(properties);
                (function(){
                     let
                     stat = $(".static-logo"),
                     fix = $(".fixed-logo");
                     stat.hide();
                     fix.addClass("appear").removeClass("hide");

                })();
            }else{
                let activate = (previousPosition <= scrollPosition)?whenDown:whenUp;
                activate();
            }
        }

        function empty(value){
            if(value == null || value == "" || value == false || value == undefined ){
                return true;
            }
            return false;
        }

        function onScroll(){
            properties = (empty(adminBar))?{position:"fixed", width:"100%"}:{position:"fixed", width:"100%", top:adminBar};
            scrollPosition = _window.scrollTop();
            sticking = (menuOffset <= scrollPosition)?true:false;
            if(sticking){
                whenSticking();
                previousPosition = scrollPosition;
            }else{
                 menuBar.removeClass(menuClass).removeAttr("style");
                 $(".static-logo").show();
                 $(".fixed-logo").addClass("hide").removeClass("appear");
                 previousPosition = scrollPosition;
            }

        }

        function onResize(){
            let mobile = _window.width();
            adminBar  = $('#wpadminbar').height();
            adminBar = (empty(adminBar))? 0 : adminBar;
            properties =(mobile <= 600)? {position:"fixed", width:"100%", top:0} : {position:"fixed", width:"100%", top:adminBar} ;
            // (menuBar.hasClass("on"))? menuBar.css(properties): onScroll();
            menuBar.hasClass("on") && menuBar.css(properties);
        }

        function scroll(){
            menuHeight =  menuBar.height();
            menuOffset = (empty(adminBar))? menuHeight :menuBar.offset().top;

            onResize();
            _window.on("scroll", onScroll)//scroll

            _window.on("resize", onResize)
        }

        return {
            start:scroll,
            whenUp : whenUp,
            whenDown: whenDown
        };
    }
```

</details>

[go back :house:][home]


### Scroll Visible

<details>
<summary>
View Content
</summary>

**Note** You need the the ScrollTo class and this class uses
jquery

```js
class ScrollVisible extends ScrollTo {

     id:string;
     threshold:number;
     height:number;

    constructor(selector, target:string ="body", id:string , threshold:number = 50 ){
        super(selector,target);

        this.threshold = threshold;
        this.id = id;
        this.height = $("body").height();


        this.checkThreshold = this.checkThreshold.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    checkThreshold(){
        let threshold = (this.height/100)*this.threshold,
            scrollPosition = $(window).scrollTop(),
            selector = $(this.selector);
//         console.log(`selector is  ${selector}`);

        if( threshold <= scrollPosition){
            selector.addClass(this.id).removeClass("fade-out");

        }else{
            selector.removeClass(this.id).addClass("fade-out");
        }


    }

    onScroll(){
        const $window = $(window);

        $window.on("scroll", this.checkThreshold);

    }

    onClick(){
        const selector = $(this.selector);
        console.log(this.scroll);
        selector.on("click", this.to);
    }

    start(){
        this.onClick();
        this.onScroll();
    }
}

```

</details>

[go back :house:][home]


### Scroll To
<details>
<summary>View Content</summary>

**Note**: this uses javascript and JQuery

```js
class ScrollTo{

    selector: string;
    target: string;
    offsetTop: number;
    animationTime: number;

    constructor(selector, target:string ="body", offsetTop:number = 200, animationTime:number = 300){
        this.selector = selector;
        this.target = target;
        this.offsetTop = offsetTop;
        this.animationTime = animationTime;

        this.scroll= this.scroll.bind(this);
        this.to = this.to.bind(this);
    }

    scroll(){
       const selector = $(this.selector);

        selector.on("click", this.to);
    }

    to(){
        const target = $(this.target).position();
        $("html,body").animate({
            scrollTop:(target.top - this.offsetTop)
        },this.animationTime);

        console.log("It is working");

        return false;
    }
    start(){
        this.scroll();
    }
}


```

</details>

[go back :house:][home]
