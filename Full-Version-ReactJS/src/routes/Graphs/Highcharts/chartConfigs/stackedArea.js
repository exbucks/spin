const config = {
    chart: {
        type: 'area',
        height: 300
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },

    xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [502, 900, 809, 947, 1402, 3634, 5268],
        color: '#222D34',
        lineColor: '#2E9BDA',
        marker: {
            enabled: false
        }
    }, {
        name: 'Africa',
        data: [106, 1708, 890, 500, 490, 767, 1766],
        marker: {
            enabled: false
        },
        color: '#263C40',
        lineColor: '#3BBDA8'
    }, {
        name: 'Europe',
        data: [163, 800, 276, 300, 159, 729, 628],
        color: '#383838',
        lineColor: '#787878',
        marker: {
            enabled: false
        }
    }]
};

export default config;
