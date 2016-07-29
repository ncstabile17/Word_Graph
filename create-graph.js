function makeGraph() {

var graphObj = makeFunc();

var xLabels = graphObj.xLabels;
var datasets = graphObj.datasets;

        var config = {
            type: 'line',
            data: {
                labels: xLabels,
                datasets: datasets
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        // beforeTitle: function() {
                        //     return '...beforeTitle';
                        // },
                        // afterTitle: function() {
                        //     return '...afterTitle';
                        // },
                        // beforeBody: function() {
                        //     return '...beforeBody';
                        // },
                        // afterBody: function() {
                        //     return '...afterBody';
                        // },
                        // beforeFooter: function() {
                        //     return '...beforeFooter';
                        // },
                        // footer: function() {
                        //     return 'Footer';
                        // },
                        // afterFooter: function() {
                        //     return '...afterFooter';
                        // },
                    }
                },
                hover: {
                    mode: 'dataset'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Chapter'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of Times Used'
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 5,
                        }
                    }]
                }
            }
        };
        
            var ctx = document.getElementById("canvas").getContext("2d");
            //ctx.translate(500,500);
            window.myLine = new Chart(ctx, config);
           // ctx.translate(0,100);
            window.myLine.update();
        

 }
