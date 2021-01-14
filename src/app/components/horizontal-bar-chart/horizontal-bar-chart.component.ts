import { Component, Input, OnDestroy } from '@angular/core';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css'],
})
export class HorizontalBarChartComponent implements OnDestroy {
  @Input() results: any[] = [];

  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';
  colorScheme = 'nightLights';

  interval;

  constructor() {
    //this.interval = setInterval(() => this.randomize(), 1500);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  randomize() {
    /* console.log('tick');
    const newResults = [...this.results];
    for (let i in this.results) {
      newResults[i].value = Math.round(Math.random() * 1_000_000);
    }
    this.results = newResults; */
    console.log(this.results);
  }
}
