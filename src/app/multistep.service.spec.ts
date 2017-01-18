/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MultistepService } from './multistep.service';

describe('MultistepService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultistepService]
    });
  });

  it('should ...', inject([MultistepService], (service: MultistepService) => {
    expect(service).toBeTruthy();
  }));
});
