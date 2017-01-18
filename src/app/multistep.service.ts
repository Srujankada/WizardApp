import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

export interface IState {

  dirty: boolean,
  isValid: boolean

}

export type IStepDirection = 'backward' | 'forward';

@Injectable()
export class MultistepService {

  public model = {};
  public baseRoute = '/multistep';
  public hasInitted: boolean;
  public state: Observable<IState>;
  public stateUpdateStream: Subject<any> = new Subject();
  public stateUpdates: Subject<any> = new Subject();
  private requestOutstanding: boolean = false;
  public steps = [

    'step1',
    'step2',
    'step3',
    'step4'

  ];

  constructor(
    @Inject(Router) public router: Router) {

    this.state = this.stateUpdates.scan((state: IState, update: any) => Object.assign({}, state, update), {}).cache();
    this.stateUpdateStream.subscribe(this.stateUpdates);

  };

  public getInitialStep() {

    this.router.navigate([this.baseRoute + '/' + this.steps[0]]);

  };

  public isStepFirstOrLast(direction: IStepDirection) {

    if ((direction === 'backward' &&
      this.router.url.split('/')[2] === this.steps[0])
    ) {
      //&& this.router.url.split('/')[2] === this.steps[this.steps.length - 1])) {
      return true;
    }
    else if (direction === 'forward') return false;
    else {
      return false;
    }
  };

  public GetForwardLable() {
    if (this.router.url.split('/')[2] === this.steps[this.steps.length - 1]) {
      return 'Submit';
    }
    else {
      return 'Forward';
    }
  }

  public setState(state: any) {
    console.log(JSON.stringify(state));
    this.stateUpdateStream.next(state);
  }

  public goToNextStep(direction: IStepDirection): any {
    
    let stepIndex = this.steps.indexOf(this.router.url.split('/')[2]);
    
    console.log('stepIndex: ' + stepIndex + ' this.steps.length:' + this.steps.length);

    if (stepIndex === -1) return;

    if (stepIndex === this.steps.length-1 ) {
      //Call server and send data.
      console.log(JSON.stringify(this.model));
      console.log("Form Submitted successfully");
      
      console.log(this.baseRoute + '/' + this.steps[0]);

      this.model = {};
      this.router.navigate([this.baseRoute + '/' + this.steps[0]]);
      return;
    }

    this.router.navigate([this.baseRoute + '/' + this.steps[stepIndex + (direction === 'forward' ? 1 : -1)]]);

  };


}
