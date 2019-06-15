# Angular

- [how to install angular app][install-app]
- [how to serve angular on digital ocean][digital-angular]
- [how to run an event in angular][angular-event]
- [how to change port number for development][ng-port]
- [how to change host number for development][ng-host]

## Animations
- [how to create a simple animation][simple-anime]
- [how to create route animations][route-anime]

## Head Tag
- [how to change the title and meta tags][title-meta]

## CRUD
- [select data from a database][ng-read]
- [how to add http params to your request][http-param]

## Templates
- [how to use ngIf][ng-if]
- [how to use ngFor][ng-for]
- [how to do two-way data binding][data-bind]
- [how to create a template reference variable][temp-var]
- [how to pass data into a subcomponent/child component][data-child]

## Routing
- [how to do simple routing][ng-route]
- [how to add routing in a feature module][route-feature]
- [how to redirect in a component][redirect-comp]

## NgModule
- [how to import ngmodule][import-mod]
- [how to add routing in a feature module][route-feature]

## Form
- [how to get value from an input element][form-inpt]
- [how to create a form group][form-group]

## Service
- [how to set up a typical service][basic-service]

## Generate
- [how to generate a component][gen-comp]
- [how to generate a module][gen-mod]
- [how to generate a service][gen-serv]

[title-meta]:#how-to-change-the-title-and-meta-tags
[basic-service]:#how-to-set-up-a-typical-service
[redirect-comp]:#how-to-redirect-in-a-component
[http-param]:#how-to-add-http-params-to-your-request
[data-child]:#how-to-pass-data-into-a-child-component
[temp-var]:#how-to-create-a-template-reference-variable
[form-group]:#how-to-create-a-form-group
[form-inpt]:#how-to-get-value-from-an-input-element
[route-feature]:#how-to-add-routing-in-a-feature-module
[gen-mod]:#how-to-generate-a-module
[import-mod]:#how-to-import-ngmodule
[gen-serv]:#how-to-generate-a-service
[home]:#angular
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

---

### how to change the title and meta tags

<details>
<summary>
View Content
</summary>

**reference**
- [Angular Meta Service for Meta Tags](https://www.concretepage.com/angular/angular-meta-service-for-meta-tags)
- [Dynamically add meta description based on route in Angular](https://stackoverflow.com/questions/48330535/dynamically-add-meta-description-based-on-route-in-angular)

---
**The proper way to do it**

<details>
<summary>
View Content
</summary>

1. In the routing module, add data to the routes

```js

... const appRoutes: Routes = [
    {
        path: 'path1', loadChildren: './path1#path1Module',
        data: {
            title: '...',
            description: '...',
            keywords: '...'
        }
    },
    {
        path: 'path2', loadChildren: './path2#path2Module',
        data: {
            title: '...',
            description: '...',
            keywords: '...'
        }
    } ...
```

2. In the component import these libraries and inject them into the constructor

```js

import { Component, OnInit } from '@angular/core';
// import all these things
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

// Inject these things
  constructor(private router: Router, private route: ActivatedRoute, ,private title: Title, private meta: Meta) { }

  ngOnInit() {
}

}


```

3. Now in the ngOnInit, add this code to grab the data from the route module


```js
export class AboutComponent implements OnInit {

// Inject these things
  constructor(private router: Router, private route: ActivatedRoute, ,private title: Title, private meta: Meta) { }

  ngOnInit() {

    this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.route)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .subscribe((event) => {
                this.updateDescription(event['description'], event['keywords'], event['title']);
            });

}

}

```


4. Now, add the method updateDescription in order for everything to work

```js

export class AboutComponent implements OnInit {

// Inject these things
  constructor(private router: Router, private route: ActivatedRoute, ,private title: Title, private meta: Meta) { }

  ngOnInit() {

    this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.route)
            .map((route) => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter((route) => route.outlet === 'primary')
            .mergeMap((route) => route.data)
            .subscribe((event) => {
                this.updateDescription(event['description'], event['keywords'], event['title']);
            });

}

updateDescription(desc: string, keywords: string, title: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'description', content: desc })
    this.meta.updateTag({ name: 'keywords', content: keywords })
    this.meta.updateTag({ name: 'og:title', content: title })
    this.meta.updateTag({ name: 'og:description', content: desc })
}

}



```

</details>

---
**Here is a simple way to do it**

<details>
<summary>
View Content
</summary>

1. Import Title & Meta in the Component and inject them into the constructor

```js

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//import these libraries
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

// inject them into the constructor
  constructor(private router: Router,private title: Title,private meta: Meta) { }

  ngOnInit() {

  }

}


```

2. Now, in the ngOnInit method add the methods of title and meta to change the tags

```js

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//import these libraries
import { Title,Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

// inject them into the constructor
  constructor(private router: Router,private title: Title,private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle("About Page")
    this.meta.updateTag({name:"description", content:"this is a description of the about page"})
    this.meta.updateTag({name:"keywords", content:"about"})
    this.meta.updateTag({name:"author", content:"jermaine forbes"})
    this.meta.updateTag({name:"date", content:"2019-05-10", scheme:"YYYY-MM-DD"})
    this.meta.updateTag({property: 'og:title', content: "About Page"});
    this.meta.updateTag({property: 'og:type', content: "website"});
  }

}


```

</details>





</details>

[go back :house:][home]


### how to set up a typical service

<details>
<summary>
View Content
</summary>


**How I see it:** Services are pretty much used to make calls to the database,
uploading things, and making API calls to other websites. So if you need to do any
of that. You should create a service

---
<details>
<summary>
1. First create the service. I'm creating a service called student and putting the
service into the student folder
</summary>
```
ng g service student/student
```
</details>

---
<details>
<summary>
2. Now import the student service into a module called StudentModule, within the
providers property
</summary>

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentService} from "./student.service";

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule
  ],
  providers:[StudentService]
})
export class StudentModule { }

```
</details>

---
<details>
<summary>
3. In the Service import HttpClient and HttpParams to do a simple REST api call like
this. And inject the HttpClient in the constructor
</summary>

```js

import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  this.url = "http://students.com";
}

getStudent(id){

  const params = new HttpParams().set("id",id);

  return this.http.get(this.url,{params})
}


```
</details>

---
<details>
<summary>
4. Now we make a call to the student component when we need to get a student with
the StudentService. Assuming we already created the StudentComponent, and the StudentRoutingModule
</summary>

```js
import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(orivate service: StudentService) { }

  ngOnInit() {
  }

  getOne(number){

    service.getStudent(number).subsribe(res =>{
      console.log(res)
    })
  }

}

```
</details>

</details>

[go back :house:][home]

### how to redirect in a component

<details>
<summary>
View Content
</summary>


**reference**
- [Redirect within component Angular 2](https://stackoverflow.com/questions/32896407/redirect-within-component-angular-2)


```js
import {Router} from '@angular/router';

constructor(private artistService: ArtistService, private router: Router) { }

  selectRow(id: number): void{
       this.router.navigate([`./artist-detail/${id}`]);

  }
```

</details>

[go back :house:][home]



### how to add http params to your request

<details>
<summary>
View Content
</summary>

**reference**
- [Angular HTTP Client - Quickstart Guide](https://blog.angular-university.io/angular-http/)

**My definition:** I think this class is extremely useful if you want to add several parameters
to get/post/put request for the httpclient this is a lot easier

**With HttpParams**

```js
import { Injectable } from '@angular/core';
// Make sure you add HttpParams
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {People} from "./people";

@Injectable({
  providedIn: 'root'
})
export class LocateService {
  private url:string = "http://php.jforbes.site/ajax/get-people.php";
  constructor(private http: HttpClient) { }

  getPeople(num){
    // this will set the url to look like this: http://php.jforbes.site/ajax/get-people.php?limit=num
      const params = new HttpParams().set("limit", num);

     return this.http.get(this.url,{params})

  }//getPeople

}//LocateService
```


**The old way**

```js
import { Injectable } from '@angular/core';
// Make sure you add HttpParams
import { HttpClient,HttpParams } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {People} from "./people";

@Injectable({
  providedIn: 'root'
})
export class LocateService {
  private url:string = "http://php.jforbes.site/ajax/get-people.php?";
  constructor(private http: HttpClient) { }

  getPeople(num){
    // this will look like: http://php.jforbes.site/ajax/get-people.php?limit=num
     return this.http.get(this.url+"limit="+num)

  }//getPeople

}//LocateService
```





</details>

[go back :house:][home]

### how to pass data into a child component

<details>
<summary>
View Content
</summary>

**reference**
- [Sharing Data Between Angular Components - Four Methods](https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/)

1. In the parent component add a property with a value

```js
leUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  private parentMessage: string = "this is a message from the parent";

  constructor(private service: LocateService) { }

  ngOnInit() {
  }


}
```

2. In the child component add the Input module, and assign it to a property like so

```js
//import the Input module like so
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

// Add the input decorator to property like this
  @Input() person;

  constructor() { }

  ngOnInit() {
  }

}
```

3. In the parent template, pass the property into child selector like this

```html
<p>This is the parent template</p>
  <app-people-list [person]="parentMessage"></app-people-list>

```

4. Now, in the child template add the property into your view

```html
<p>This is the child template</p>
{{person}} <!-- this should print out : this is a message from the parent -->
```

</details>

[go back :house:][home]

### how to create a template reference variable

<details>
<summary>
View Content
</summary>

**reference**
- [Working with Angular 5 Template Reference Variables](https://itnext.io/working-with-angular-5-template-reference-variable-e5aa59fb9af)

**My definition:** The template reference variable grabs the element from the view and
allows you to add the variable into a method that you created into a component

```html
<!-- once the submit button is clicked the onSubmit method will grab the input
    element value -->
<form  (ngSubmit)="onSubmit(amountInput)" >
  <div class="form-group">
    <!-- this will grab this specific input element -->
    <input type="text" class="form-control col-3" name="amount" #amountInput>
  </div>
  <input type="submit" >
</form>
```
```js
export class PeopleComponent implements OnInit {

  private submitted:boolean = false;

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(inpt){
    // this will output the input value
    console.log(inpt.value)
  }

}
```

</details>

[go back :house:][home]



### how to create a form group

<details>
<summary>
View Content
</summary>

**reference**
- [Angular 2 Cannot find control with unspecified name attribute on formArrays](https://stackoverflow.com/questions/43437726/angular-2-cannot-find-control-with-unspecified-name-attribute-on-formarrays)
- [Model Driven Forms](https://codecraft.tv/courses/angular/forms/model-driven/)




<details>
<summary>
1. Add FormsModule and ReactiveFormsModule in the imports property of the module
</summary>

```js

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from './people/people.component'
import { HttpClientModule } from '@angular/common/http';
import {LocateRoutingModule, routesComp} from "./locate-routing/locate-routing.module";
import {LocateService} from "./locate.service";

// These are the things you import
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [routesComp],
  imports: [
    CommonModule,
    HttpClientModule,
    LocateRoutingModule,
    // this is where you add it
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[LocateService],
  exports:[routesComp]
})
export class LocatePeopleModule { }

```

</details>




<details>
<summary>
2. import FormControl and FormGroup into the component, then create FormGroup like the example below
</summary>

**people.component.ts**

```js
import { Component, OnInit } from '@angular/core';
import {LocateService} from "../locate.service";

// Import these classes
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

// Create the  FormGroup like so
  private testForm = new FormGroup({
     amountField :  new FormControl(1),
     summaryField : new FormControl("summary")
  })

  private submitted:boolean = false;

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(){

    //this will output all the properties that come with the FormGroup class
    console.log(this.testForm)

  }

}

```
</details>




<details>
<summary>
3. In the view make sure you add formGroup syntax with the name of the form group
you assigned to in the component, and when you when you add the form controls. Remember
to not put them in brackets and name them `formControlName` as opposed `formControl`
</summary>

**people.component.html**
```html

<h2>Form input</h2>
<!-- add the name of the formGroup -->
<form  (ngSubmit)="onSubmit()" [formGroup]="testForm">
  <div class="form-group">
    <!-- make sure you don't put formControlName in brackets it will throw an error -->
    <input type="text" class="form-control col-3" name="amount" formControlName="amountField" >
  </div>
  <div class="form-group">
    <textarea class="form-control col-3" name="summary" rows="8" cols="80"  formControlName="summaryField"></textarea>
  </div>
  <!-- if submitted property returns true, it will disable the button
      meaning, that you won't be able to click on it-->
  <input type="submit" [disabled]="submitted" >
</form>

```

</details>


4. Everything should work, so that's about it.

</details>

[go back :house:][home]


### how to get value from an input element



<details>
<summary>
View Content
</summary>

**reference**
- [Angular 4 - get input value](https://stackoverflow.com/questions/47529327/angular-4-get-input-value)

---
<details>
<summary>
 Using the Template Reference Variable
</summary>

**people.component.ts**

```js

export class PeopleComponent implements OnInit {

  private submitted:boolean = false;

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(inpt){

    console.log(inpt.value)

  }

}
```

**people.component.html**

```html

<h2>Form input</h2>
<form  (ngSubmit)="onSubmit(amountInput)" >
  <div class="form-group">
    <input type="text" class="form-control col-3" name="amount" #amountInput>
  </div>
  <input type="submit" >
</form>

```


</details>

---
<details>
<summary>
Using FormControl
</summary>

**people.component.ts**

make sure you add the **FormControl** module

```js
import { Component, OnInit } from '@angular/core';
import {LocateService} from "../locate.service";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  private amountField :  new FormControl(1);

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.amountField)

  }

}

```

**people.component.html**

```html
<form  (ngSubmit)="onSubmit()" >
  <div class="form-group">
    <input type="text" class="form-control col-3" name="amount" [formControl]="amountField" >
  </div>
  <input type="submit" />
</form>
```


**locate-people.module.ts**

make sure you add **FormsModule** and **ReactiveFormsModule** in the imports property

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from './people/people.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {LocateRoutingModule, routesComp} from "./locate-routing/locate-routing.module";
import {LocateService} from "./locate.service";


@NgModule({
  declarations: [routesComp],
  imports: [
    CommonModule,
    HttpClientModule,
    LocateRoutingModule,
    // Add these modules into the imports in order for the form control to work
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[LocateService],
  exports:[routesComp]
})
export class LocatePeopleModule { }

```

</details>

---
<details>
<summary>
Using the ngModel
</summary>

**people.component.html**

```html
<h2>Form input</h2>
<form  (ngSubmit)="onSubmit()" method="post">
  <div class="form-group">
    <input type="text" class="form-control col-3" name="amount" [(ngModel)]="num" >
  </div>
  <input type="submit">
</form>
```

**people.component.ts**

```js
export class PeopleComponent implements OnInit {

  private num:string = "";

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.num)
  }

}
```


</details>

---
<details>
<summary>
Using the $event
</summary>

**people.component.html**
```html

<h2>Form input</h2>
<form  (ngSubmit)="onSubmit($event)" >
  <div class="form-group">
    <input type="text" class="form-control col-3" name="amount" >
  </div>
  <input type="submit" >
</form>
```
**people.component.ts**
```js
export class PeopleComponent implements OnInit {

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(val){
    let v = val.target.amount.value;
  }

}

```

</details>


</details>

[go back :house:][home]

### how to add routing in a feature module

**reference**
- [Setting up Routing in a multi-module Angular 4 app using the Router module](https://medium.com/@astamataris/setting-up-routing-in-a-multi-module-angular-4-app-using-the-router-module-d8e610196443)

<details>
<summary>
View Content
</summary>

1. First create a module, and a component in the module

```
ng g module animal

ng g c animal/animal

```

2. Next create a routing module in the module folder

```
touch animal/animal-routing.module.ts
```

3. In the routing module add code like this. **Note:** make sure you add the
`RouterModule.forChild()` in the imports property

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Import  these libraries in order to do routing properly
import { Routes, RouterModule } from '@angular/router';

// import the component you created
import {AnimalComponent} from "./animal/animal.component";


const animalRoutes: Routes = [
  {path:"animal", component:AnimalComponent}
];

@NgModule({
  // It is important to  add the method forChild as opposed to forRoot
  // you will get an error if you dont
  imports: [RouterModule.forChild(animalRoutes)],
  exports: [
    RouterModule
  ]
})
export class AnimalRoutingModule { }

export const routesComp = [AnimalComponent]
```

4. In the module that you created import the components from the routing module
and add the routes into the **declarations** and the routing module into the **imports**

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from './people/people.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AnimalRoutingModule, routesComp} from "./animal-routing.module";


@NgModule({
  declarations: [routesComp],
  imports: [
    CommonModule,
    AnimalRoutingModule
  ],
  exports:[routesComp]
})
export class AnimalModule { }
```

5. Now, in the `app.module` add the newly created module into the **imports** property

```js

// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AnimalModule} from "./animal/animal.component";


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    ItemDirective
  ],
  imports: [
    AnimalModule // add this module into here
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

6. Everything should work, if it doesn't make sure you add the module before `AppRoutingModule`

</details>

[go back :house:][home]


### how to import ngmodule

<details>
<summary>
View Content
</summary>

```js
import { NgModule } from '@angular/core';

```

</details>

[go back :house:][home]


### how to generate a module

<details>
<summary>
View Content
</summary>

```
ng g module insertModuleName
```

</details>

[go back :house:][home]

### how to generate a service

<details>
<summary>
View Content
</summary>

#### To create a service in the root folder

```
ng g service insertServiceName
```

#### To create a service in a different folder

```
ng g service  path/to/folder/insertServiceName
```

</details>

[go back :house:][home]


### how to create route animations

**reference**
- [Angular — Supercharge your Router transitions using animations](https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8)
- [route transition animations](https://angular.io/guide/route-animations)

<details>
<summary>
View Content
</summary>


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

### how to install angular app


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

#### if you need to change the local host and port number

1. go to the file angular.json file and search for serve property and under that
search for options. When you find it add the host property and the port property

```
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "my-app:build",
    "port": 1337,
    "host":"0.0.0.0"
  },

```

2. Open up the new port with the ufw command like so

```
sudo ufw allow 1337

```

3. Also if you ever want to see all the ports you type this command

```

sudo ufw status
```

4. Also if you ever want to delete a port you type this command

```
sudo ufw status numbered

sudo ufw  delete 22
```

</details>

[go back :house:][home]
