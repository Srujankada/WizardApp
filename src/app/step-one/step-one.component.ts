import { Component, OnInit, OnDestroy, Inject, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MultistepService } from '../multistep.service';
import { MultistepForm } from '../multistep-form';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent extends MultistepForm implements OnInit, AfterViewChecked {

  @ViewChild('form') public latestForm: NgForm;

  constructor(
    @Inject(MultistepService) public multistepService: MultistepService
  ) { super(multistepService) }



  ngOnInit() {
    this.model = this.multistepService.model;
  }

  ngOnDestroy() {
    
  }

}
