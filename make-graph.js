
var myData = new Array([10, 2], [15, 0], [18, 3], [19, 6], [20, 8.5], [25, 10], [30, 9], [35, 8], [40, 5], [45, 6], [50, 2.5]);
var myChart = new JSChart('chartid', 'line');
myChart.setDataArray(myData);
myChart.setLineColor('#8D9386');
myChart.setLineWidth(4);
myChart.setTitleColor('#7D7D7D');
myChart.setAxisColor('#9F0505');
myChart.setGridColor('#a4a4a4');
myChart.setAxisValuesColor('#333639');
myChart.setAxisNameColor('#333639');
myChart.setTextPaddingLeft(0);
myChart.draw();