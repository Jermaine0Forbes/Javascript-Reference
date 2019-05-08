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
