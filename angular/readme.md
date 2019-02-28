# Angular

- [how to install angular app][install-app]
- [how to serve angular on digital ocean][digital-angular]
- [how to run an event in angular][angular-event]
- [how to change port number for development][ng-port]
- [how to change host number for development][ng-host]

## Generate
- [how to generate a component][gen-comp]


[ng-host]:#how-to-change-host-number-for-development
[ng-port]:#how-to-change-port-number-for-development
[gen-comp]:#how-to-generate-a-component
[angular-event]:#how-to-run-an-event-in-angular
[digital-angular]:#how-to-serve-angular-on-digital-ocean
[install-app]:#how-to-install-angular-app


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
