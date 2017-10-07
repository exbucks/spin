const config = {
    chart: {
        type: 'column',
        height: 300
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
    xAxis: {
        categories: [
            'Q1',
            'Q2',
            'Q3',
            'Q4'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Direct',
        data: [49.9, 71.5, 106.4, 129.2]

    }, {
        name: 'Indirect',
        data: [83.6, 78.8, 98.5, 93.4]

    }, {
        name: 'Adds',
        data: [48.9, 38.8, 39.3, 41.4],
        color: '#383838'

    }]
};

export default config;
