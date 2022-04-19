import { Injectable,EventEmitter, Output  } from '@angular/core';
import { Observable, of } from 'rxjs';

type Data = {
  key: number;
  value: string;
  timeStamp: number;
};

type FakeData = {
  [key:number]: Data;
};

@Injectable({
  providedIn: 'root'
})
export class TimeTravelSelectorService {
  fakeData:FakeData[]; 
  data: Data; 
  @Output() cartChanged = new EventEmitter<any>();

  constructor() {
    this.fakeData = [];
    this.data = {} as Data;

    setInterval(() => {
      this.simulatePushData(5); 
      this.cartChanged.emit(this.simulatePushData(5))   
    }, 500);

    setInterval(() => {
      this.clearSimulatePushData();   
      this.cartChanged.emit(this.clearSimulatePushData())   
 
    }, 30000);

  }

  clearSimulatePushData():void {
    this.fakeData = []
  }

  simulatePushData(items:number): Observable<any[]> {

    for (var i = 0; i <= items; i++) {
      let data = {
        key: i+i,
        value: 'name ' + i+i,
        timeStamp: new Date().setTime(new Date().getTime())+(i+i)
      } as unknown as Data; 
      
      this.fakeData.push(data)
    }
      return of(this.fakeData);
  }

  getGenData(max:number): Observable<any[]> {
    for (var i = 0; i <= max; i++) {
      let data = {
        key: i,
        value: 'name ' +i,
        timeStamp: new Date().setTime(new Date().getTime())+i
      } as unknown as Data; // 👈️ type assertion
      
      this.fakeData[i] = data;
    }
      return of(this.fakeData);
  }
}
