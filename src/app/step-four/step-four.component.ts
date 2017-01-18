import { Component, OnInit, Inject, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MultistepService } from '../multistep.service';
import { MultistepForm } from '../multistep-form';


@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent extends MultistepForm implements OnInit, AfterViewChecked {

  @ViewChild('form') public latestForm: NgForm;

  constructor(
    @Inject(MultistepService) public multistepService: MultistepService
  ) { super(multistepService) }



  ngOnInit() {
    this.model = this.multistepService.model;
  }

}
