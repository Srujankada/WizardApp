import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { MultistepBaseComponent } from './multistep-base/multistep-base.component';
import { MultistepComponent } from './multistep/multistep.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

import {MultistepService} from './multistep.service';

import { AlertModule } from 'ng2-bootstrap/alert';

import { ModalModule } from 'ng2-bootstrap/modal';

const multistepRoutes: Routes = [
  {
    path: '',
    redirectTo: '/multistep',
    pathMatch: 'full',
  },
  {
    path: 'multistep',
    component: MultistepComponent,
    children: [
      {
        path: '',
        component: MultistepBaseComponent,
      },
      {
        path: 'step1',
        component: StepOneComponent
      },
      {
        path: 'step2',
        component: StepTwoComponent
      },
      {
        path: 'step3',
        component: StepThreeComponent
      }
      ,
      {
        path: 'step4',
        component: StepFourComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MultistepBaseComponent,
    MultistepComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(multistepRoutes),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [MultistepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
