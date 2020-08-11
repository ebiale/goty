import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-hor-graph-bar',
  templateUrl: './hor-graph-bar.component.html',
  styleUrls: ['./hor-graph-bar.component.css']
})
export class HorGraphBarComponent implements OnDestroy{
  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';


  constructor() {
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void {

  }
}
