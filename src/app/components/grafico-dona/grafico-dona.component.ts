import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input('chartType') doughnutChartType:string = '';
  @Input('chartLabels') doughnutChartLabels:string[] = [];
  @Input('chartData') doughnutChartData:number[] = [];
  constructor() { }

  ngOnInit() {
  }

}
