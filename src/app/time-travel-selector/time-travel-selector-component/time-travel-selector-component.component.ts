import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-time-travel-selector-component',
  templateUrl: './time-travel-selector-component.component.html',
  styleUrls: ['./time-travel-selector-component.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimeTravelSelectorComponent implements OnInit, AfterViewInit {
  res: any;
  chart:any;
  data:any;
  names:any;

  @ViewChild('bar',{static: false}) bar!:ElementRef;   
  constructor(private route: ActivatedRoute, elementRef: ElementRef) {
    this.data = [];
    this.names = [];
  }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      this.res = res;
    })
  }
  ngAfterViewInit() {
    this.res = this.res || []
    this.bar.nativeElement.innerText = 'txt';

    const ctx = this.bar.nativeElement.getContext('2d');


    this.res.data.forEach((element:any, index:number) => {
      this.data.push(element.timeStamp);
      this.names.push(element.value)
  });

    this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.names,
            datasets: [{
                label: '# of Votes',
                data:  this.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    this.updateChartData(this.chart, this.data, 0);

  }

  updateChartData(chart:any, data:any, index:number):void {
      chart.data.datasets[index].data = data;
      chart.update()
  }

 
}
