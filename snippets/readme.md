# Javascript Snippets 

## Vanilla 

## JQuery 

## Typescript

- [ scroll to ][scroll-to]


## Both

[home]:#javascript-snippets
[scroll-to]:#scroll-to


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
