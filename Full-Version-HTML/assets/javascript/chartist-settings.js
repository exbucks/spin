// Chartist Setting from chartist.html
function elementExists(selector, cb) {
    if(!!document.querySelector(selector)) {
        cb.call(selector);
    }
};
// Simple Line Chart

elementExists('.chartist-simple-line-chart', function() {
    new Chartist.Line(this, {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    }, {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    });
});

// Line scatter diagram with responsive settings
var times = function(n) {
  return Array.apply(null, new Array(n));
};

var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
  data.labels.push(index + 1);
  data.series.forEach(function(series) {
    series.push(Math.random() * 100)
  });

  return data;
}, {
  labels: [],
  series: times(4).map(function() { return new Array() })
});

var options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 13 === 0 ? 'W' + value : null;
    }
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 4 === 0 ? 'W' + value : null;
      }
    }
  }]
];

elementExists('.chartist-line-scatter-diagram-with-responsive-settings', function() {
    new Chartist.Line(this, data, options, responsiveOptions);
});

// Line Chart with Area
elementExists('.chartist-line-chart-with-area', function() {
    new Chartist.Line(this, {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    }, {
        low: 0,
        showArea: true
    });
});

// Bi-polar Line chart with area only
elementExists('.chartist-bi-polar-line-chart-with-area-only', function() {
    new Chartist.Line(this, {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    }, {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showLabel: false,
            showGrid: false
        }
    });
});

// Bi Polar Bar Chart
elementExists('.chartist-bi-polar-bar-chart', function(){
    var data = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    };

    var options = {
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
            }
        }
    };

    new Chartist.Bar(this, data, options);
});



// Overlapping bars on mobile
elementExists('.chartist-overlapping-bars-on-mobile', function() {
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    var options = {
        seriesBarDistance: 10
    };

    var responsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar(this, data, options, responsiveOptions);
});

// Multi Line Labels
elementExists('.chartist-multi-line-labels', function() {
    new Chartist.Bar(this, {
        labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
        series: [
            [60000, 40000, 80000, 70000],
            [40000, 30000, 70000, 65000],
            [8000, 3000, 10000, 6000]
        ]
    }, {
        seriesBarDistance: 10,
        axisX: {
            offset: 60
        },
        axisY: {
            offset: 80,
            labelInterpolationFnc: function(value) {
                return value + ' CHF'
            },
            scaleMinSpace: 15
        }
    });
});

// Multi Line Labels
elementExists('.chartist-stacked-bar-chart', function() {
    new Chartist.Bar(this, {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
            [800000, 1200000, 1400000, 1300000],
            [200000, 400000, 500000, 300000],
            [100000, 200000, 400000, 600000]
        ]
    }, {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
            }
        }
    }).on('draw', function(data) {
        if(data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });
});

// Horizontal Bar Chart
elementExists('.chartist-horizontal-bar-chart', function() {
    new Chartist.Bar('.chartist-horizontal-bar-chart', {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    }, {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        }
    });
});

// Distributed Series
elementExists('.chartist-distributed-series', function() {
    new Chartist.Bar('.chartist-distributed-series', {
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
    }, {
        distributeSeries: true
    });
});

// Simple Pie Chart
elementExists('.chartist-simple-pie-chart', function() {
    var data = {
        series: [5, 3, 4]
    };

    // Pie Chart with Custom Labels
    var sum = function(a, b) { return a + b };

    new Chartist.Pie('.chartist-simple-pie-chart', data, {
        labelInterpolationFnc: function(value) {
            return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
    });
});

elementExists('.chartist-pie-chart-with-custom-labels', function() {
    var data = {
        labels: ['Bananas', 'Apples', 'Grapes'],
        series: [20, 15, 40]
    };

    var options = {
        labelInterpolationFnc: function(value) {
            return value[0]
        }
    };

    var responsiveOptions = [
        ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
                return value;
            }
        }],
        ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
        }]
    ];

    new Chartist.Pie(this, data, options, responsiveOptions);
});

// Gauge Chart
elementExists('.chartist-gauge-chart', function() {
    new Chartist.Pie(this, {
        series: [20, 10, 30, 40]
    }, {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: false
    });
});

// Animating Donut
elementExists('.chartist-animating-donut', function() {
    var chart = new Chartist.Pie(this, {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
    }, {
        donut: true,
        showLabel: false
    });

    chart.on('draw', function(data) {
        if(data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
                'stroke-dashoffset': {
                    id: 'anim' + data.index,
                    dur: 1000,
                    from: -pathLength + 'px',
                    to:  '0px',
                    easing: Chartist.Svg.Easing.easeOutQuint,
                    // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                    fill: 'freeze'
                }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if(data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
        }
    });

    // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
    chart.on('created', function() {
        if(window.__anim21278907124) {
            clearTimeout(window.__anim21278907124);
            window.__anim21278907124 = null;
        }
        window.__anim21278907124 = setTimeout(chart.update.bind(chart), 10000);
    });
});