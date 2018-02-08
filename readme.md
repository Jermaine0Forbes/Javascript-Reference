# Typescript Guide

All the information you need to know about this amazing language

## General

- [how to install jquery into typescript][jquery-type]
- [how to declare a variable type][data-type]
- [how to declare a return type of a function][function-type]

## Gulp



## Laravel

- [how to use typescript in laravel mix][type-mix]

## Errors
-  [TS2451: Cannot redeclare block-scoped variable ][redeclare-variable]
- [“property does not exist on type JQuery” ]

[function-type]:#how-to-declare-a-return-type-of-a-function
[data-type]:#how-to-declare-a-variable-type
[jquery-type]:#how-to-install-jquery-into-typescript
[redeclare-variable]:#cannot-redeclare-block-scoped-variable
[home]:#typescript-guide
[type-mix]:#how-to-use-typescript-in-laravel-mix

### property does not exist on type JQuery

**reference**
- [How can I stop “property does not exist on type JQuery” syntax errors when using Typescript?](https://stackoverflow.com/questions/24984014/how-can-i-stop-property-does-not-exist-on-type-jquery-syntax-errors-when-using)

[go back home][home]

### How to declare a return type of a function

```js

function greeting(message:string):string{
    return `Hello ${message}`
}
```

[go back home][home]

### How to declare a variable type


```js
let  humble:boolean = false;

let  name : string = "jermaine";

let age : number = 27;
```

[go back home][home]

### How to install jquery into typescript

#### Option 1 : type in the terminal

```
npm i --save-dev @types/jquery

```

#### Option 2 : type in the terminal 

```
// 1. Install typings
npm install typings -g
// 2. Download jquery.d.ts (run this command in the root dir of your project)
typings install dt~jquery --global --save

```

[go back home][home]

### Cannot redeclare block scoped variable

**reference**
- [stackoverflow](https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files)

If you have this problem, put `export = {};` at the top of the file and the error will go away

[go back home][home]


### How to use typescript in laravel mix

Recently laravel has a way compile typescript code with `mix.ts(fileToCompile, LocationToSend)`

1. You need to  create a tsconfig file

```
touch tsconfig.json
```

2. Put this code inside the config file

```
{
    "lib": [
        "dom",
        "es5",
    ],
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true,
    },
    "exclude":[
	"node_modules",
	"vendor"
	],

}
```
3. In the `webpack.mix.js` add the ts function

```
mix.ts('/resources/assets/typescript/example.ts', '/public/js/');

```

[go back home][home]
