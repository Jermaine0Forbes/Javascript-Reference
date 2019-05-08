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
