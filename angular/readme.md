# Angular

- [how to install angular app][install-app]
- [how to serve angular on digital ocean][digital-angular]
- [how to run an event in angular][angular-event]
- [how to change port number for development][ng-port]
- [how to change host number for development][ng-host]

## CRUD
- [select data from a database][ng-read]

## Templates
- [how to use ngIf][ng-if]

## Generate
- [how to generate a component][gen-comp]

[ng-if]:#how-to-use-ngif
[ng-read]:#select-data-from-a-database
[ng-host]:#how-to-change-host-number-for-development
[ng-port]:#how-to-change-port-number-for-development
[gen-comp]:#how-to-generate-a-component
[angular-event]:#how-to-run-an-event-in-angular
[digital-angular]:#how-to-serve-angular-on-digital-ocean
[install-app]:#how-to-install-angular-app


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
