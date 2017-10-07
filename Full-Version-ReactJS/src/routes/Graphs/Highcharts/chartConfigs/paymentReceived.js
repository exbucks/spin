const config = {
    chart: {
        renderTo: 'container',
        backgroundColor: 'transparent',
        type: 'line'
    },
    title: {
        text: '',
        x: -20 //center
    },
    subtitle: {
        text: '',
        x: -20
    },
    xAxis: {
        gridLineWidth: 1,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    yAxis: {
        gridLineWidth: 1,
        title: {
            text: ''
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'bottom',
        borderWidth: 0
    },
    series: [{
        name: 'Credit Card',
        type: 'area',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 21.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        color: '#2E9BDA',
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(45, 153, 220, .4)'],
                [1, 'rgba(45, 153, 220, 0)']
            ]
        },
        lineWidth: '1',
        marker: {
            symbol: 'circle',
        }
    }, {
        name: 'PayPal',
        data: [-0.2, 0.8, 17.7, 11.3, 8.0, 15.0, 27.8, 24.1, 20.1, 29.1, 8.6, 16.5],
        color: '#35BDA8',
        type: 'area',
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, 'rgba(59, 189, 168, .2)'],
                [1, 'rgba(59, 189, 168, 0)']
            ]
        },
        lineWidth: '1',
        marker: {
            symbol: 'circle',
        }
    }]
};

export default config;
