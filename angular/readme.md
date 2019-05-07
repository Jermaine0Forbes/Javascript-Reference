# Angular

- [how to install angular app][install-app]
- [how to serve angular on digital ocean][digital-angular]
- [how to run an event in angular][angular-event]
- [how to change port number for development][ng-port]
- [how to change host number for development][ng-host]

## Animations
- [how to create a simple animation][simple-anime]
- [how to create route animations][route-anime]

## CRUD
- [select data from a database][ng-read]

## Templates
- [how to use ngIf][ng-if]
- [how to use ngFor][ng-for]
- [how to do two-way data binding][data-bind]

## Routing
- [how to do simple routing][ng-route]

## Generate
- [how to generate a component][gen-comp]

[route-anime]:#how-to-create-route-animations
[simple-anime]:#how-to-create-a-simple-animation
[data-bind]:#how-to-do-two-way-data-binding
[ng-route]:#how-to-do-simple-routing
[ng-for]:#how-to-use-ngFor
[ng-if]:#how-to-use-ngif
[ng-read]:#select-data-from-a-database
[ng-host]:#how-to-change-host-number-for-development
[ng-port]:#how-to-change-port-number-for-development
[gen-comp]:#how-to-generate-a-component
[angular-event]:#how-to-run-an-event-in-angular
[digital-angular]:#how-to-serve-angular-on-digital-ocean
[install-app]:#how-to-install-angular-app


### how to create route animations


<details>
<summary>
View Content
</summary>

**reference**
- [Angular — Supercharge your Router transitions using animations](https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8)
- [route transition animations](https://angular.io/guide/route-animations)

1. Go to `app-routing.module.ts` to add data into  routes array

```js
const routes: Routes = [

  // add the data property, and name it whatever you want
  // in this example I named a property animation
  {path:"", component:HomeComponent , data:{animation:"Homepage"}},
  {path:"about", component:AboutComponent, data:{animation:"Aboutpage"}},
  {path:"animals", component:AnimalsComponent},
  {path:"two-way", component:BindExComponent},
  {path:"anime", component:AnimeComponent},
  {path:"**", component:ErrorComponent},

];

```

2. In `app-component.html`, wrap the `router-outlet` in a div tag that has a
animation trigger and a method that takes in route data value that will be passed
to the router outlet

```html

<main class="container">
  <h1>App Root</h1>

  <!-- routeAnimations is the name of an animation trigger that will fire off only
      if value was assigned to #outlet
  -->
  <div [@routeAnimations]="prepareOutlet(outlet)">

    <!-- the #outlet is a temporary variable that will grab the route data
        that you have created in the app routing module paths, once data is assigned
        to the #outlet variable it will trigger the prepareOutlet method
    -->
    <router-outlet #outlet="outlet"></router-outlet>
  </div>


</main>

```

3. In `app.component.ts`, create the method **prepareOutlet** like so and import
the **RouterOutlet** class

```js
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {


  constructor(private http: HttpClient){

  }

  prepareOutlet(outlet: RouterOutlet){
    // this will honestly just return the value of the animation property that was
    // made in the app-routing module. The method in itself is not important it
    // is just supposed to trigger the animation
     return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}

```

4. Now, it's time to create the **routeAnimations** trigger animation. So we first
have to import all the functions the animations library

```js
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

// Import these animation functions from this library
import {
  trigger,
  state,
  style,
  stagger,
  group,
  query,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    // this creates the routeAnimations trigger
    trigger('routeAnimations',[
      // I think this means that if any state happens then execute this transition
      transition("* <=> *",[
        query(":enter, :leave", style({ position:"fixed", width:"100%"}),{optional:true}),
        //the group function runs several animations at the same time
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),

          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])//group
      ])//transition
    ])//trigger - routeAnimations
  ]//animations
})

```

5. After all that the animations should run, when you go to a different route

</details>

[go back :house:][home]


### how to create a simple animation


<details>
<summary>
View Content
</summary>

1. Go to **polyfill.ts** and uncomment `import 'web-animations-js'; `, then npm install
it

```
npm i --save web-animations-js
```

2. Import **BrowserAnimationsModule** to app.module and add it into **imports**

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import this shit
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';

@NgModule({
  declarations: [
  routingComponents,
  AnimeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      FormsModule,
       BrowserAnimationsModule // add this shit
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }

```

3. Create a component you want to create animations to

```
ng g c anime
```

4. In the component import the animation functions

```js
import {
  trigger,
  state,
  style,
  stagger,
  animate,
  transition,
  // ...
} from '@angular/animations';

```

5. In the component add the animations property in the `@Component` decorator, and
then add a trigger animation like this

```js
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  animations:[
    trigger("fadeIn",[

      state("open",style({
        opacity:0.5,
        fontSize:"5px"

      })
    ),
      state("close",style({
        opacity:1,
        fontSize:"16px"

      })),
      transition("open <=> close",[
        animate("0.5s"),
      ])
    ]
    )
  ]
})
```


6. In the HTML template , if you want to make the animation to start right when the page
loads. Makes sure you add the  name of the trigger and add the expression **in double quotes**

```html
<!-- add the expression in double quotes or it won't work -->
<p [@fadeIn]="'open'">
  anime works!
</p>
```

7. If you want to change the state of the animation you have to switch it based on
a value . So it is recommended to have a ternary operator and have some method
that will change the value that will ultimately change the state

**In html**
```html
<!-- If the isOpen value is true or false it will change the state animation -->
<div [@fadeIn]="isOpen? 'open' : 'close' ">
  <p>anime works!</p>
  <p>anime works!</p>
  <p>anime works!</p>

</div>

<button type="button" (click)="change()" name="button">change animations</button>
```

**In the component**
```js
export class AnimeComponent implements OnInit {

  isOpen:boolean = false;

  constructor() { }

  //this method will change the value, which will ultimately change the state
  change(){

    this.isOpen = !this.isOpen;
    console.log("change is happening")
  }

  ngOnInit() {
  }

}

```


</details>

[go back :house:][home]


### how to do two-way data binding


<details>
<summary>
View Content
</summary>

**reference**
- [angular](https://angular.io/guide/template-syntax#two-way-binding---)

1. First you have to add the **Forms** component into `app.module.ts`

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// This is how you import the FormsModule
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  // And this is where you add the FormsModule into the component
      FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }

```

2. Next, create a new component

```
ng g c bind-ex
```

3. Within the module of that component create two variables like so

**bind-ex.component.ts**

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-ex',
  templateUrl: './bind-ex.component.html',
  styleUrls: ['./bind-ex.component.scss']
})
export class BindExComponent implements OnInit {

  titleBlock:string  = "This is a title";
  pBlock:string  = "This is a paragraph";

  constructor() { }

  ngOnInit() {
  }

}

```

4. Now in the html template create an html code like this, and focus on adding the
**ngModel** attribute into an input/textarea tag. Wrapping the ngModel attribute into
a **banana in the box** wrapper like so `[(ngModel)]` . This will allow the two-way data binding
to happen. Also assigning the variable to ngModel will get the values that were assigned in the
component.

```html
<section class=" mb-5">

  <form  method="post">
    <div class="form-group ">
      <label>Title</label>
      <input class="form-control col-4 " type="text" name="title" [(ngModel)]="titleBlock">
    </div>
    <div class="form-group ">
      <label>Paragraph</label>
      <textarea class="form-control col-4" name="name" rows="8" cols="80"
      [(ngModel)]="pBlock"
      ></textarea>
    </div>
  </form>

</section>
<section class=" mb-5">
  <h2>{{titleBlock}}</h2>
  <p>
    {{pBlock}}
  </p>
</section>
```
5. If everything runs correctly, then you should be able to update multiple values
with two-way data binding. Also add the component into the **app.module.ts**

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';

// Import this shit
import { BindExComponent } from './bind-ex/bind-ex.component';


@NgModule({
  declarations: [
  AppComponent,
  BindExComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }

```

</details>

[go back :house:][home]



### how to do simple routing

**reference**
- [Angular 7 Tutorial - 23 - Routing and Navigation](https://www.youtube.com/watch?v=Nehk4tBxD4o)

<details>
<summary>
View Content
</summary>

1. Generate several components that you want to be route to

```
ng g c about
ng g c contact
```

2. Import the routes the into `app-routing.module.ts`

```js

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// this is how you import them
import { AppComponent } from './app.component';
import { AboutComponent }     from './about/about.component';
import { ContactComponent }     from './contact/contact.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }



```

3. Include the components into the Routes array and them add them into object literals like
so

```js

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// this is how you import them
import { AppComponent } from './app.component';
import { AboutComponent }     from './about/about.component';
import { ContactComponent }     from './contact/contact.component';

// add the routes like so
const routes: Routes = [
{path: "about", component:AboutComponent},
{path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }



```

4. Export the route components into an array like so


```js

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// this is how you import them
import { AppComponent } from './app.component';
import { AboutComponent }     from './about/about.component';
import { ContactComponent }     from './contact/contact.component';

// add the routes like so
const routes: Routes = [
{path: "about", component:AboutComponent},
{path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// This is how you create the array
export const routingComps = [ AppComponent,AboutComponent,ContactComponent];

```

5. Now, include them into `app.module.ts`, and add them inside the **declarations**
array. Also make sure you have the **AppRoutingModule** in the **imports** array

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// include the routingComps like so
import { AppRoutingModule,routingComps } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  routingComps

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }

```

6. So in the root component, usually **AppComponent**, add the links to the different
views with the **routerLink** attribute.

```html
<header class="bg-dark">
  <section class="container">
    <nav class="nav">
      <li class="nav-item">
        <!-- add routeLine to the anchor tags -->
        <a class="nav-link text-white" routerLink="/about" routerLinkActive="active">About</a>
      </li>
      <li class="nav-item">
          <!-- add routeLine to the anchor tags -->
        <a class="nav-link text-white" routerLink="/animals" routerLinkActive="active">Animals</a>
      </li>
    </nav>
  </section>
</header>

<main class="container">
  <h1>App Root</h1>
  <router-outlet></router-outlet>

</main>
```

7. Lastly, make sure you add the router-outlet to the root component


```html
<main class="container">
  <h1>App Root</h1>
  <router-outlet></router-outlet>

</main>

```

8. Now it should work


</details>

[go back :house:][home]


### how to use ngFor


<details>
<summary>
View Content
</summary>

**reference**
- [angular](https://angular.io/guide/template-syntax#ngforof)

```html
<div *ngFor="let hero of heroes">{{hero.name}}</div>
```

</details>

[go back :house:][home]

### how to use ngIf

<details>
<summary>
View Content
</summary>

**reference**
- [angular](https://angular.io/guide/template-syntax#ngif)

**My definition:** ngif is the if statement for angular. If the a certain value is
set in the component then it will display the information to the page. However, if it is not set it
will not show any content at

**In app.component.html**
```html
<!-- it shouldn't display anything since there was no value assigned to it -->
<p *ngIf="status">I see you</p>
```
**In app.component.ts**
```js

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status:string;

  constructor(private http: HttpClient){

  }


}

```

</details>

[go back :house:][home]

### select data from a database

**reference**
- []()

<details>
<summary>
View Content
</summary>

1. import the HttpClientModule to `app.module.ts`like so

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // add at the top like so

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // and add it in the imports
  ],
  providers: [],
  // bootstrap: [AppComponent,AnimalsComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }

```

2. import the **HttpClient** class to `app.component.ts` or any component you are trying
to create a simple CRUD api . Also you need to add the **HttpClient** to the constructor

```js
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';// This is where you import it

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient){

  }


}

```

3. Add the a method to call url to retrive data. Then in the html add an event to call
the method


**In the Component**

```js
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient){

  }

//Create the method
  clickAgain(){
    // the get method will call the url, and get the data
    let obs  = this.http.get("http://www.example.com/ajax/ng-test.php?id=2");

    obs.subscribe((res) =>{

          console.log(res)// once the button is clicked data would be logged into the console


    })//subscribe

  }
}
```

**In HTML**

```html
<button class="btn btn-primary" type="button" name="button" (click)="clickAgain()">Get Data</button>

```

4. Now just create the php file to make the ajax request. **Make sure you add headers into php file**

```php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$input = json_decode(file_get_contents("php://input"),true);
define("req", $_REQUEST);
define("serve", $_SERVER);
$method = serve['REQUEST_METHOD'];
$status = true;
$json = "false";
$data = [];


if($status){
include_once("../components/testing-db.php");//includes the mysqli class
$id = req["id"];
$query = "select id , animal, sex from animals limit 5;";

$stmt = $sql->prepare($query);
$result = $stmt->execute();
$stmt->bind_result($i,$ani, $sex);

if($result){

  while ($stmt->fetch()) {
    $data[]= ["id" => $i, "animal" => $ani , "sex" => $sex];
  }

  $json = json_encode( $data);
}


}else{

  $json = json_encode(["data" => "something is wrong"]);
}


echo $json;

```

5. This should work, once the button is click data will be logged into the console.


</details>

[go back :house:][home]


###  how to change host number for development

<details>
<summary>
View Content
</summary>

**reference**
- [stackoverflow](https://stackoverflow.com/questions/37762125/set-default-host-and-port-for-ng-serve-in-config-file)

1. In the **angular.json** file, try to find the `"serve"` property and type in port like this

```
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "projects": {
        "my-project": {
            "architect": {
                "serve": {
                    "options": {
                        "port": 4444,
                        "host":"0.0.0.0"
                    }
                }
            }
        }
    }
}
```

</details>


[go back :house:][home]

### how to change port number for development

<details>
<summary>
View Content
</summary>

**reference**
- [stackoverflow](https://stackoverflow.com/questions/37762125/set-default-host-and-port-for-ng-serve-in-config-file)


1. In the **angular.json** file, try to find the `"serve"` property and type in port like this

```
{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "projects": {
        "my-project": {
            "architect": {
                "serve": {
                    "options": {
                        "port": 4444
                    }
                }
            }
        }
    }
}
```

</details>


[go back :house:][home]

### how to generate a component


<details>
<summary>
View Content
</summary>

**reference**
- [angular](https://angular.io/cli/generate#component)


```
ng g component insertComponentName
```

</details>

[go back :house:][home]

### how to run an event in angular

**reference**
- [angular](https://angular.io/guide/user-input)

<details>
<summary>
View Content
</summary>

1. In `src/app.component.ts` you can add methods to for an event to call

```js
export class AppComponent {


  constructor(){

  }

  clickThis(){
    let p = document.getElementById("result");

    p.innerHTML= "something happened";
  }
}

```

2. In `src/app.component.html`create a button and a element that has the id **result**

```html
<!-- the (click) parenthesis is the event that you attach to the button which allows to call the method click this-->
<button class="btn btn-primary" type="button" name="button" (click)="clickThis()">click this</button>

<p id="result"></p>

```

3. Now run the app

```
ng serve --host=0.0.0.0
```

4. And then it should work

</details>

[go back :house:][home]

### how to serve angular on digital ocean

<details>
<summary>
View Content
</summary>

1. allow the port number to run

```
sudo ufw allow  4200
```

2. Now go to the directory where the angular app is and type in this command

```
cd my-app

ng serve --host=0.0.0.0
```

3. Now based on your ip address you type in the ip address followed by the port
number like so

```
111.111.111.111:4200
```

4. This should allow you to see the angular app in development mode.

</details>

[go back :house:][home]

## how to install angular app


<details>
<summary>
View Content
</summary>

**reference**
- [angular](https://angular.io/guide/quickstart)
- [github](https://github.com/angular/angular-cli/issues/7735)

1. The so called normal way that did not work for me

```
npm i -g  @angular/cli

ng new insert-name-for-app

// Error: The program 'ng' is currently not installed. sudo apt install ng-common
```

2. This actually worked for me

```
 npm install --unsafe-perm -g @angular/cli
```

</details>

[go back :house:][home]
