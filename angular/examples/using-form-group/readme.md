# Using Form Group

## Date: 5/8/19

I just wanted to record the stuff I was working on with FormGroup and FormControl

### locate-people.module.ts

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
    FormsModule,
    LocateRoutingModule,
    ReactiveFormsModule
  ],
  providers:[LocateService],
  exports:[routesComp]
  // bootstrap:[PeopleComponent]
})
export class LocatePeopleModule { }

```

### people.component.ts

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
  private testForm = new FormGroup({
     amountField :  new FormControl(1),
     summaryField : new FormControl("summary")
  })

  private submitted:boolean = false;

  constructor(private service: LocateService) { }

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.amountField)
    // console.log(this.summaryField)
    console.log(this.testForm)
    // this.submitted = true;

  }
  // onSubmit(val){
  //   let v = val.target.amount.value;
  //   this.service.getPeople(v);
  // }

}

```

### people.component.html

```html

<h2>Form input</h2>
<form  (ngSubmit)="onSubmit()" [formGroup]="testForm">
  <div class="form-group">
    <input type="text" class="form-control col-3" name="amount" formControlName="amountField" >
  </div>
  <div class="form-group">
    <textarea class="form-control col-3" name="summary" rows="8" cols="80"  formControlName="summaryField"></textarea>
  </div>
  <input type="submit" [disabled]="submitted" >
</form>

```
