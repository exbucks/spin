const config = {
    chart: {
        type: 'column',
        height: 300
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
    xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }

    },
    legend: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2],
        borderColor: '#212121'
    }, {
        name: 'Jane',
        data: [2, 2, 3, 2, 1],
        borderColor: '#212121'
    }, {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
        borderColor: '#212121',
        color: '#383838'
    }]
};

export default config;
