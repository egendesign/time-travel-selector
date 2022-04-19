import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

import {TimeTravelSelectorService} from './time-travel-selector-service.service'


@Injectable({
  providedIn: 'root'
})
export class TimeTravelSelectorResolverServiceResolver implements Resolve<any> {

  constructor(private ttss: TimeTravelSelectorService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.ttss.getGenData(5);
  }
}
