const config = {
    chart: {
        type: 'bar',
        height: 300
    },
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
        data: [107, 31, 635, 203],
        borderColor: '#212121'
    }, {
        name: 'Year 1900',
        data: [133, 156, 947, 408],
        borderColor: '#212121'
    }, {
        name: 'Year 2012',
        data: [1052, 954, 4250, 740],
        borderColor: '#212121',
        color: '#383838'
    }]
};

export default config;
