import { Component, OnInit } from '@angular/core';
import { TrackChart, TrackChartConfig } from 'track-chart';
import { GraphModel } from './trackchart.const';
import { DeliveryModel } from './trackchart.package.const';
import { SimpleModel } from './trackchart.simple.const';

const config: TrackChartConfig = new TrackChartConfig();
config.FillColor = 'rgba(40, 59, 65, 0.71)';
config.TextColor = '#ffffff';
config.TitleColor = '#356066';
config.UnFillColor = '#dddddd';
config.UnFillNodeColor = '#ffffff';
config.Font = 'Times';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  style: Object = {};
  chartModel: TrackChart = GraphModel;
  chart2Model: TrackChart = DeliveryModel;
  simpleModel: TrackChart = SimpleModel;
  title = 'Simple Tracking!';

  ngOnInit() {
    this.chartModel.Config = config;
    this.chart2Model.Config = config;
    this.simpleModel.Config = config;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
