import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MultistepService, IState, IStepDirection } from '../multistep.service';

@Component({
  selector: 'app-multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.css']
})
export class MultistepComponent implements OnInit {

  public model = {};
  public state: IState;

  constructor(
    @Inject(Router) public router: Router,
    @Inject(MultistepService) private multistepService: MultistepService
  ) { }

  stepIsFirstOrLast(direction: IStepDirection): boolean {    
    return this.multistepService.isStepFirstOrLast(direction);
  }

  GetForwardLable() : string {
    return this.multistepService.GetForwardLable();
  }

  goToNextStep(direction: IStepDirection): void {
    this.multistepService.goToNextStep(direction);
  };

  ngOnInit(): void {
    // Subscribe to state, so component can reflect form state in view.
    this.multistepService.state.subscribe(state => this.state = state);
    
    this.multistepService.stateUpdateStream.next({ dirty: false, isValid: false });
    this.multistepService.getInitialStep();
  }
}
