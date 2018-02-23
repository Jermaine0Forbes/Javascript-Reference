# Typescript Guide

All the information you need to know about this amazing language

## General

- [how to install jquery into typescript][jquery-type]
- [how to declare a variable type][data-type]
- [how to declare a return type of a function][function-type]

## Gulp

- [how to create a simple gulp file for typescript][gulp-type]


## Laravel

- [how to use typescript in laravel mix][type-mix]

## TSConfig

- [tsconfig options table][config-table]

## Errors
-  [TS2451: Cannot redeclare block-scoped variable ][redeclare-variable]
- [“property does not exist on type JQuery” ][jquery-error]

[config-table]:#tsconfig-options-table
[jquery-error]:#propery-does-not-exist-on-type-jquery
[gulp-type]:#how-to-create-a-simple-gulp-file-for-typescript
[function-type]:#how-to-declare-a-return-type-of-a-function
[data-type]:#how-to-declare-a-variable-type
[jquery-type]:#how-to-install-jquery-into-typescript
[redeclare-variable]:#cannot-redeclare-block-scoped-variable
[home]:#typescript-guide
[type-mix]:#how-to-use-typescript-in-laravel-mix


### tsconfig options table 

#### Compile Options Table 

name|type|description
-|-|-
outFile|string|Concatenate and emit output to single file.
pretty|boolean|Stylize errors and messages using color and context (experimental).
lib|array|Specify library file to be included in the compilation. Requires TypeScript version 2.0 or later.
target|string|Specify ECMAScript target version. Permitted values are 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018' or 'esnext'.
module|string|Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015' or 'esnext'.

##### More Detail 

**lib:** `"es5", "es6", "es2015", "es7", "es2016", "es2017", "es2018", "esnext", "dom", "dom.iterable", "webworker", "scripthost", "es2015.core", "es2015.collection", "es2015.generator", "es2015.iterable",
                        "es2015.promise", "es2015.proxy", "es2015.reflect", "es2015.symbol", "es2015.symbol.wellknown", "es2016.array.include", "es2017.object", "es2017.sharedmemory", "es2017.string", "es2017.typedarrays", "esnext.array", "esnext.asynciterable", "esnext.promise"`

[go back home][home]

### how to create a simple gulp file for typescript

1. If you initialzed npm yet go ahead and do it 

```
npm init
```
2. Install these specific dependencies

```
npm i -g gulp-cli

npm i --save-dev typescript gulp gulp-typescript
```

3. create your typescript file and add your code in

```js
//I named this file main.ts
function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
```
4. Create a tsconfig.json file and add this

```
{
    "files": [
        "src/main.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
}
```
5. Now create a gulpfile

```
touch gulpfile.js
```
6. Add this code into your gulpfile

```js
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", ["type"]);

gulp.task("type", function(){
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("js"));
});


gulp.task("watch", function(){
    gulp.watch("typescript/*.ts",["type"]);
});
```

7. now just write ...

```
gulp
```

8. And now you are done


[go back :house][home]

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
