import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import zl from 'fusioncharts/fusioncharts.zoomline';
// import Maps from 'fusioncharts/maps/index';
// import World from 'fusioncharts/maps/es/fusioncharts.world';
// import Generartor from './generator';
// FusionCharts.addDep(Charts);
// FusionCharts.addDep(zl);
window.col = Charts;
Charts(FusionCharts);
zl(FusionCharts);


// import FusionCharts from 'fusioncharts/core';
// import column2d from 'fusioncharts/viz/column2d';
// import line from 'fusioncharts/viz/line';
// import ar from 'fusioncharts/viz/area2d';
// import M from 'fusioncharts/maps/index';
// import W from 'fusioncharts/maps/es/fusioncharts.world';
// FusionCharts.addDep(column2d, line, M, W);
// FusionCharts.addDep(ar);

// var generator = new Generartor();
// var data = generator.generate({
//   dataCount: 12
// }).getData();

const isReady = () => {
  var chartInstance = new FusionCharts({
    id: 'stockRealTimeChart',
    type: 'line',
    renderAt: 'chart-container',
    width: '600',
    height: '350',
    dataFormat: 'json',
    dataSource: {data: [{value: 5}, {value: 9}, {value: 7}]}
  });
  chartInstance.render();
};

// Expose fusioncharts to window
window.FusionCharts = FusionCharts;

FusionCharts.ready(isReady);
