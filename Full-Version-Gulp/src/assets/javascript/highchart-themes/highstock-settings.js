$(function() {
    Dashboard.Helpers.elementExists('.highstock-single-line-series', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
            // Create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 1
                },

                credits: {
                enabled: false
                },
                exporting: {
                enabled: false
                },

                series : [{
                    name : 'AAPL',
                    data : data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        });

    });

    // Chart Settings to subsite "Exchange & Trading" ( exchange&trading.html )
    Dashboard.Helpers.elementExists('.highstock-plot-lines-on-y-axis', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

            var startDate = new Date(data[data.length - 1][0]), // Get year of last data point
                minRate = 1,
                maxRate = 0,
                startPeriod,
                date,
                rate,
                index;

            startDate.setMonth(startDate.getMonth() - 3); // a quarter of a year before last data point
            startPeriod = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

            for (index = data.length - 1; index >= 0; index = index - 1) {
                date = data[index][0]; // data[i][0] is date
                rate = data[index][1]; // data[i][1] is exchange rate
                if (date < startPeriod) {
                    break; // stop measuring highs and lows
                }
                if (rate > maxRate) {
                    maxRate = rate;
                }
                if (rate < minRate) {
                    minRate = rate;
                }
            }


            // This Chart used in page: 'exchange&trading.html'
            $(_this).highcharts('StockChart', {

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: ''
                },

                yAxis: {
                    title: {
                        text: ''
                    },
                    plotLines: [{
                        value: minRate,
                        color: '#2D99DC',
                        dashStyle: 'shortdash',
                        width: 1,
                        label: {
                            text: '',
                        }
                    }, {
                        value: maxRate,
                        color: '#CB3E4B',
                        dashStyle: 'shortdash',
                        width: 1,
                        label: {
                            text: ''
                        }
                    }]
                },

                 credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },

                series: [{
                    name: 'USD to EUR',
                    color: 'yellow',
                    type: 'area',
                    color: '#2D99DC',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(45, 153, 220, .1)'],
                                [1, 'rgba(45, 153, 220, 0)']
                                ]},
                    threshold: null,
                    data: data,
                    tooltip: {
                        valueDecimals: 4
                    }
                }]
            });
        });
    });


    Dashboard.Helpers.elementExists('.highstock-compare-multiple-series', function() {
        var seriesOptions = [],
            seriesCounter = 0,
            element = this,
            names = ['MSFT', 'AAPL', 'GOOG'];

        /**
         * Create the chart when all data is loaded
         * @returns {undefined}
         */
        function createChart() {

            $(element).highcharts('StockChart', {

                rangeSelector: {
                    selected: 4
                },

                yAxis: {
                    labels: {
                        formatter: function () {
                            return (this.value > 0 ? ' + ' : '') + this.value + '%';
                        }
                    },
                    plotLines: [{
                        value: 0,
                        width: 2,
                        color: 'silver'
                    }]
                },

                chart: {
                    backgroundColor: 'red'
                },

                plotOptions: {
                    series: {
                        compare: 'percent'
                    },
                    background: 'red'
                },

                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                    valueDecimals: 2
                },

                series: seriesOptions
            });
        }

        $.each(names, function (i, name) {

            $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

                seriesOptions[i] = {
                    name: name,
                    data: data
                };

                // As we're loading the data asynchronously, we don't know what order it will arrive. So
                // we keep a counter and create the chart when all the data is loaded.
                seriesCounter += 1;

                if (seriesCounter === names.length) {
                    createChart();
                }
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-points-with-data-grouping', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=large-dataset.json&callback=?', function (data) {

            // Create a timer
            var start = +new Date();

            // Create the chart
            $(_this).highcharts('StockChart', {
                chart: {
                    events: {
                        load: function () {
                            if (!window.isComparing) {
                                this.setTitle(null, {

                                });
                            }
                        }
                    },
                    zoomType: 'x'
                },

                rangeSelector: {

                    buttons: [{
                        type: 'day',
                        count: 3,
                        text: '3d'
                    }, {
                        type: 'week',
                        count: 1,
                        text: '1w'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 3
                },

                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    }
                },

                series: [{
                    name: 'Temperature',
                    data: data.data,
                    pointStart: data.pointStart,
                    pointInterval: data.pointInterval,
                    tooltip: {
                        valueDecimals: 1,
                        valueSuffix: '°C'
                    }
                }]

            });
        });
    });


    Dashboard.Helpers.elementExists('.highstock-flags-marking-events', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

            // Create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 0
                },

                tooltip: {
                    style: {
                        width: '200px'
                    },
                    valueDecimals: 4,
                    shared : true
                },

                yAxis : {
                    title : {
                        text : 'Exchange rate'
                    }
                },

                series : [{
                    name : 'USD to EUR',
                    data : data,
                    id : 'dataseries'

                // the event marker flags
                }, {
                    type : 'flags',
                    data : [{
                        x : Date.UTC(2015, 5, 8),
                        title : 'C',
                        text : 'Stocks fall on Greece, rate concerns; US dollar dips'
                    }, {
                        x : Date.UTC(2015, 5, 12),
                        title : 'D',
                        text : 'Zimbabwe ditches \'worthless\' currency for the US dollar '
                    }, {
                        x : Date.UTC(2015, 5, 19),
                        title : 'E',
                        text : 'US Dollar Declines Over the Week on Rate Timeline'
                    }, {
                        x : Date.UTC(2015, 5, 26),
                        title : 'F',
                        text : 'Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally '
                    }, {
                        x : Date.UTC(2015, 5, 29),
                        title : 'G',
                        text : 'Euro records stunning reversal against dollar'
                    }, {
                        x : Date.UTC(2015, 5, 30),
                        title : 'H',
                        text : 'Surging US dollar curbs global IT spend'
                    }],
                    onSeries : 'dataseries',
                    shape : 'circlepin',
                    width : 16
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-two-panes-candlestick-and-volume', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function (data) {

            // split the data set into ohlc and volume
            var ohlc = [],
                volume = [],
                dataLength = data.length,
                // set the allowed units for data grouping
                groupingUnits = [[
                    'week',                         // unit name
                    [1]                             // allowed multiples
                ], [
                    'month',
                    [1, 2, 3, 4, 6]
                ]],

                i = 0;

            for (i; i < dataLength; i += 1) {
                ohlc.push([
                    data[i][0], // the date
                    data[i][1], // open
                    data[i][2], // high
                    data[i][3], // low
                    data[i][4] // close
                ]);

                volume.push([
                    data[i][0], // the date
                    data[i][5] // the volume
                ]);
            }


            // create the chart
            $(_this).highcharts('StockChart', {

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: ''
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                yAxis: [{
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'OHLC'
                    },
                    height: '60%',
                    lineWidth: 2
                }, {
                    labels: {
                        align: 'right',
                        x: -3
                    },
                    title: {
                        text: 'Volume'
                    },
                    top: '65%',
                    height: '35%',
                    offset: 0,
                    lineWidth: 2
                }],

                series: [{
                    type: 'candlestick',
                    lineColor: 'white',
                    color: '#35BDA8',
                    name: 'AAPL',
                    data: ohlc,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }, {
                    type: 'column',
                    name: 'Volume',
                    color: '#2D99DC',
                    data: volume,
                    yAxis: 1,
                    dataGrouping: {
                        units: groupingUnits
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.higstock-compare-multiple-series', function() {
        var seriesOptions = [],
            seriesCounter = 0,
            names = ['MSFT', 'AAPL', 'GOOG'];

        var _this = this;

        /**
         * Create the chart when all data is loaded
         * @returns {undefined}
         */
        function createChart() {

            $(_this).highcharts('StockChart', {



                rangeSelector: {
                    selected: 4
                },

                yAxis: {
                    labels: {
                        formatter: function () {
                            return (this.value > 0 ? ' + ' : '') + this.value + '%';
                        }
                    },
                    plotLines: [{
                        value: 0,
                        width: 2,
                        color: 'silver'
                    }]
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                plotOptions: {
                    series: {
                        compare: 'percent'
                    }
                },

                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                    valueDecimals: 2
                },

                series: seriesOptions
            });


        }

        $.each(names, function (i, name) {

            $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

                seriesOptions[i] = {
                    name: name,
                    data: data
                };

                // As we're loading the data asynchronously, we don't know what order it will arrive. So
                // we keep a counter and create the chart when all the data is loaded.
                seriesCounter += 1;

                if (seriesCounter === names.length) {
                    createChart();
                }
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-52000-points-with-data-grouping', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=large-dataset.json&callback=?', function (data) {

            // Create a timer
            var start = +new Date();

            // Create the chart
            $(_this).highcharts('StockChart', {
                chart: {
                    events: {
                        load: function () {
                            if (!window.isComparing) {
                                this.setTitle(null, {
                                    text: ''
                                });
                            }
                        }
                    },
                    zoomType: 'x'
                },

                  credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                rangeSelector: {

                    buttons: [{
                        type: 'day',
                        count: 3,
                        text: '3d'
                    }, {
                        type: 'week',
                        count: 1,
                        text: '1w'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 3
                },

                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    }
                },

                title: {
                    text: ''
                },

                subtitle: {
                    text: 'Built chart in ...' // dummy text to reserve space for dynamic subtitle
                },

                series: [{
                    name: 'Temperature',
                    data: data.data,
                    pointStart: data.pointStart,
                    pointInterval: data.pointInterval,
                    tooltip: {
                        valueDecimals: 1,
                        valueSuffix: '°C'
                    }
                }]

            });
        });
    });


    Dashboard.Helpers.elementExists('.highstock-17million-point-async-loading', function() {
        var _this = this;
        /**
         * Load new data depending on the selected min and max
         */
        function afterSetExtremes(e) {

            var chart = $('#container').highcharts();

            chart.showLoading('Loading data from server...');
            $.getJSON('https://www.highcharts.com/samples/data/from-sql.php?start=' + Math.round(e.min) +
                    '&end=' + Math.round(e.max) + '&callback=?', function (data) {

                chart.series[0].setData(data);
                chart.hideLoading();
            });
        }

        // See source code from the JSONP handler at https://github.com/highcharts/highcharts/blob/master/samples/data/from-sql.php
        $.getJSON('https://www.highcharts.com/samples/data/from-sql.php?callback=?', function (data) {

            // Add a null value for the end date
            data = [].concat(data, [[Date.UTC(2011, 9, 14, 19, 59), null, null, null, null]]);

            // create the chart
            $(_this).highcharts('StockChart', {
                chart : {
                    type: 'candlestick',
                    color: '#2D99DC',
                    zoomType: 'x'
                },


                navigator : {
                    adaptToUpdatedData: false,
                    series : {
                        data : data
                    }
                },

                scrollbar: {
                    liveRedraw: false
                },

                title: {
                    text: ''
                },

                subtitle: {
                    text: ''
                },

                 credits: {
                enabled: false
                },
                exporting: {
                enabled: false
                },

                rangeSelector : {
                    buttons: [{
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'day',
                        count: 1,
                        text: '1d'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false, // it supports only days
                    selected : 4 // all
                },

                xAxis : {
                    events : {
                        afterSetExtremes : afterSetExtremes
                    },
                    minRange: 3600 * 1000 // one hour
                },

                yAxis: {
                    floor: 0
                },

                series : [{
                    data : data,
                     color: '#2D99DC',
                    dataGrouping: {
                        enabled: false
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-intraday-area', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {

            // create the chart
            $(_this).highcharts('StockChart', {


                title: {
                    text: ''
                },

                subtitle: {
                    text: ''
                },

                xAxis: {
                    gapGridLineWidth: 0
                },

                  credits: {
                enabled: false
                },
                exporting: {
                enabled: false
                },

                rangeSelector : {
                    buttons : [{
                        type : 'hour',
                        count : 1,
                        text : '1h'
                    }, {
                        type : 'day',
                        count : 1,
                        text : '1D'
                    }, {
                        type : 'all',
                        count : 1,
                        text : 'All'
                    }],
                    selected : 1,
                    inputEnabled : false
                },

                series : [{
                    name : 'AAPL',
                    type: 'area',
                    data : data,
                    gapSize: 5,
                    tooltip: {
                        valueDecimals: 2
                    },
                   color: '#2D99DC',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(45, 153, 220, .1)'],
                                [1, 'rgba(45, 153, 220, 0)']
                                ]},
                    threshold: null
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-intraday-with-breaks', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {

            // create the chart
            $(_this).highcharts('StockChart', {


                title: {
                    text: ''
                },

                subtitle: {
                    text: ''
                },

                xAxis: {
                    breaks: [{ // Nights
                        from: Date.UTC(2011, 9, 6, 16),
                        to: Date.UTC(2011, 9, 7, 8),
                        repeat: 24 * 36e5
                    }, { // Weekends
                        from: Date.UTC(2011, 9, 7, 16),
                        to: Date.UTC(2011, 9, 10, 8),
                        repeat: 7 * 24 * 36e5
                    }]
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                rangeSelector : {
                    buttons : [{
                        type : 'hour',
                        count : 1,
                        text : '1h'
                    }, {
                        type : 'day',
                        count : 1,
                        text : '1D'
                    }, {
                        type : 'all',
                        count : 1,
                        text : 'All'
                    }],
                    selected : 1,
                    inputEnabled : false
                },

                series : [{
                    name : 'AAPL',
                    type: 'area',
                    data : data,
                    gapSize: 5,
                    tooltip: {
                        valueDecimals: 2
                    },
                    color: '#2D99DC',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(45, 153, 220, .1)'],
                                [1, 'rgba(45, 153, 220, 0)']
                                ]},
                    threshold: null
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-intraday-candlestick', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=new-intraday.json&callback=?', function (data) {

            // create the chart
            $(_this).highcharts('StockChart', {


                title: {
                    text: ''
                },

                rangeSelector : {
                    buttons : [{
                        type : 'hour',
                        count : 1,
                        text : '1h'
                    }, {
                        type : 'day',
                        count : 1,
                        text : '1D'
                    }, {
                        type : 'all',
                        count : 1,
                        text : 'All'
                    }],
                    selected : 1,
                    inputEnabled : false
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                series : [{
                    name : 'AAPL',
                    type: 'candlestick',
                    color: '#2D99DC',
                    data : data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-flags-marking-events', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

            // Create the chart
            $('.highstock-flags-marking-events').highcharts('StockChart', {

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },


                rangeSelector : {
                    selected : 0
                },

                title : {
                    text : ''
                },

                tooltip: {
                    style: {
                        width: '200px'
                    },
                    valueDecimals: 4,
                    shared : true
                },

                yAxis : {
                    title : {
                        text : 'Exchange rate'
                    }
                },


                series : [{
                    name : 'USD to EUR',
                    data : data,
                    id : 'dataseries'

                // the event marker flags
                }, {
                    type : 'flags',
                    data : [{
                        x : Date.UTC(2015, 5, 8),
                        title : 'C',
                        text : 'Stocks fall on Greece, rate concerns; US dollar dips'
                    }, {
                        x : Date.UTC(2015, 5, 12),
                        title : 'D',
                        text : 'Zimbabwe ditches \'worthless\' currency for the US dollar '
                    }, {
                        x : Date.UTC(2015, 5, 19),
                        title : 'E',
                        text : 'US Dollar Declines Over the Week on Rate Timeline'
                    }, {
                        x : Date.UTC(2015, 5, 26),
                        title : 'F',
                        text : 'Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally '
                    }, {
                        x : Date.UTC(2015, 5, 29),
                        title : 'G',
                        text : 'Euro records stunning reversal against dollar'
                    }, {
                        x : Date.UTC(2015, 5, 30),
                        title : 'H',
                        text : 'Surging US dollar curbs global IT spend'
                    }],
                    onSeries : 'dataseries',
                    shape : 'circlepin',
                    width : 16
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-dynamically-updated-data', function() {
        var _this = this;

        Highcharts.setOptions({
            global : {
                useUTC : false
            }
        });

        // Create the chart
        $(_this).highcharts('StockChart', {
            chart : {
                events : {
                    load : function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },

            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'minute',
                    text: '1M'
                }, {
                    count: 5,
                    type: 'minute',
                    text: '5M'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },

            title : {
                text : ''
            },

             credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },


            series : [{
                name : 'Random data',
                data : (function () {
                    // generate an array of random data
                    var data = [], time = (new Date()).getTime(), i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            Math.round(Math.random() * 100)
                        ]);
                    }
                    return data;
                }())
            }]
        });

    });

    Dashboard.Helpers.elementExists('.highstock-spline', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

            // Create the chart
            $(_this).highcharts('StockChart', {

                rangeSelector: {
                    selected: 1
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title: {
                    text: ''
                },

                series: [{
                    name: 'AAPL Stock Price',
                    data: data,
                    type: 'spline',
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-step-line', function() {
        var _this = this;
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

            // Create the chart
            $(_this).highcharts('StockChart', {

                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: ''
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                series: [{
                    name: 'AAPL Stock Price',
                    data: data,
                    step: true,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-area', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

            // Create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 1
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title : {
                    text : ''
                },

                series : [{
                    name : 'AAPL Stock Price',
                    data : data,
                    type : 'area',
                    threshold : null,
                    tooltip : {
                        valueDecimals : 2
                    },
                     color: '#2D99DC',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(45, 153, 220, .1)'],
                                [1, 'rgba(45, 153, 220, 0)']
                                ]},
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-area-spline', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

            // Create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 1
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title : {
                    text : ''
                },

                series : [{
                    name : 'AAPL Stock Price',
                    data : data,
                    type : 'areaspline',
                    threshold : null,
                    tooltip : {
                        valueDecimals : 2
                    },
                     color: '#2D99DC',
                    fillColor: {
                    linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, 'rgba(45, 153, 220, .1)'],
                                [1, 'rgba(45, 153, 220, 0)']
                                ]},
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-area-range', function() {
        var _this = this;
        // Notice that the dataset has missing data
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

            $(_this).highcharts('StockChart', {

                chart: {
                    type: 'arearange'
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                rangeSelector: {
                    selected: 2
                },

                title: {
                    text: ''
                },

                tooltip: {
                    valueSuffix: '°C'
                },

                series: [{
                    name: 'Temperatures',
                    data: data
                }]

            });
        });

    });

    Dashboard.Helpers.elementExists('.highstock-spline-range', function() {
        var _this = this;
        // Notice that the dataset has missing data
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

            $('.highstock-spline-range').highcharts('StockChart', {

                chart: {
                    type: 'areasplinerange'
                },

                rangeSelector: {
                    selected: 2
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title: {
                    text: ''
                },

                tooltip: {
                    valueSuffix: '°C'
                },

                series: [{
                    name: 'Temperatures',
                    data: data
                }]

            });
        });

    });

    Dashboard.Helpers.elementExists('.highstock-candlestick', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?a=e&filename=aapl-ohlc.json&callback=?', function (data) {

            // create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 1
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title : {
                    text : ''
                },

                series : [{
                    type : 'candlestick',
                    name : 'AAPL Stock Price',
                     color: '#2D99DC',
                    data : data,
                    dataGrouping : {
                        units : [
                            [
                                'week', // unit name
                                [1] // allowed multiples
                            ], [
                                'month',
                                [1, 2, 3, 4, 6]
                            ]
                        ]
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-ohlc', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function (data) {

            // create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 2
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title : {
                    text : ''
                },

                series : [{
                    type : 'ohlc',
                    name : 'AAPL Stock Price',
                    data : data,
                    dataGrouping : {
                        units : [[
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]]
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-column', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-v.json&callback=?', function (data) {

            // create the chart
            $(_this).highcharts('StockChart', {
                chart: {
                    alignTicks: false
                },

                rangeSelector: {
                    selected: 1
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title: {
                    text: ''
                },

                series: [{
                    type: 'column',
                    name: 'AAPL Stock Volume',
                    data: data,
                    dataGrouping: {
                        units: [[
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]]
                    }
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-column-range', function() {
        var _this = this;
        // Notice that the dataset has missing data
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

            $(_this).highcharts('StockChart', {

                chart: {
                    type: 'columnrange'
                },

                rangeSelector: {
                    selected: 2
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title: {
                    text: ''
                },

                tooltip: {
                    valueSuffix: '°C'
                },

                series: [{
                    name: 'Temperatures',
                    data: data
                }]
            });
        });
    });

    Dashboard.Helpers.elementExists('.highstock-point-markers-only', function() {
        var _this = this;

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

            // Create the chart
            $(_this).highcharts('StockChart', {


                rangeSelector : {
                    selected : 2
                },

                credits: {
                enabled: false
                },

                exporting: {
                enabled: false
                },

                title : {
                    text : ''
                },

                series : [{
                    name : 'AAPL Stock Price',
                    data : data,
                    lineWidth : 0,
                    marker : {
                        enabled : true,
                        radius : 2
                    },
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        });
    });
});
