/** START JS SETTINGS "Sparklines": Monitor / Network Monitoring from monitor.html**/
  $('#network-monitoring').sparkline('html',
       {
      fillColor: false,
       width: '100%',
    height: '60 ',
      lineWidth: 1,
    lineColor: '#4ca8e1',
    fillColor: '#2a2a2a',
    spotRadius: 2,
    spotColor: '',
    minSpotColor: '',
    maxSpotColor: '',
    highlightSpotColor: '#00ffff',
    normalRangeColor: '#262626',
      normalRangeMin: -1,
      normalRangeMax: 8 });
/** END JS SETTINGS "Sparklines": Monitor / Network Monitoring from monitor.html **/

/** START JS SETTINGS "Sparklines": Monitor / Hardware Temperature / CPU from monitor.html **/
  $('#hardware-temperature-cpu').sparkline('html',
       {
     fillColor: false,
       width: '100%',
    height: '60 ',
      lineWidth: 1,
     lineColor: '#4ca8e1',
    fillColor: '#2a2a2a',
    spotRadius: 2,
    spotColor: '',
    minSpotColor: '',
    maxSpotColor: '',
    highlightSpotColor: '#00ffff',
    normalRangeColor: '#262626',
      normalRangeMin: -1,
      normalRangeMax: 8 });
/** END JS SETTINGS "Sparklines": Monitor /  Hardware Temperature / CPU from monitor.html **/

/** START JS SETTINGS "Sparklines": Monitor / Hardware Temperature / HDD1 from monitor.html **/
  $('#hardware-temperature-hdd1').sparkline('html',
       {
      fillColor: false,
       width: '100%',
    height: '60 ',
      lineWidth: 1,
     lineColor: '#4ca8e1',
    fillColor: '#2a2a2a',
    spotRadius: 2,
    spotColor: '',
    minSpotColor: '',
    maxSpotColor: '',
    highlightSpotColor: '#00ffff',
    normalRangeColor: '#262626',
      normalRangeMin: -1,
      normalRangeMax: 8 });
/** END JS SETTINGS "Sparklines": Monitor / Hardware Temperature / HDD1 from monitor.html**/

/** START JS SETTINGS "Sparklines": Monitor / Sparklines / Hardware Temperature / HDD2 from monitor.html **/
  $('#hardware-temperature-hdd2').sparkline('html',
       {
      fillColor: false,
       width: '100%',
    height: '60 ',
      lineWidth: 1,
    lineColor: '#4ca8e1',
    fillColor: '#2a2a2a',
    spotRadius: 2,
    spotColor: '',
    minSpotColor: '',
    maxSpotColor: '',
    highlightSpotColor: '#00ffff',
    normalRangeColor: '#262626',
      normalRangeMin: -1,
      normalRangeMax: 8 });
/** END JS SETTINGS "Sparklines": Monitor / Hardware Temperature / HDD2 from monitor.html **/

/** START JS SETTINGS "Sparklines": System from system.html**/
   // Bar charts using inline values
      $('.sparkline-bar').sparkline('html', {
        type: 'bar',
        height: '52px',
        barWidth: 8,
        barSpacing: 2,
        barColor: '#E66C40',
        negBarColor: '#35BDA8',
        stackedBarColor: '#434343'
      });
/** END JS SETTINGS "Sparklines": System from system.html**/

// Sparklines from sparklines.html
      $(".sparklines-pie").sparkline([4, 2, 6], {
        type: 'pie',
        sliceColors: ['#2D99DC', '#E56B44', '#88B152']
      });

      $('.sparklines-line').sparkline('html', {
        lineColor: '#2E9BDA',
        width: '30px',
        minSpotColor: 'white',
        spotColor: 'white',
        maxSpotColor: 'white',
        fillColor: '#222D33'
      });

      $('.sparklines-bar').sparkline('html', {
        type: 'bar',
        height: '15px',
        width: '15px',
        barColor: '#2E9BDA',
        negBarColor: '#CA3E4C',
        stackedBarColor: ['#3BBDA8', '#243834']
      });

      $('.sparklines-composite-inline').sparkline('html', {
        fillColor: false,
        lineColor: '#5C5C5C',
        spotColor: 'white',
        minSpotColor: '#CA3E4C',
        maxSpotColor: '#88B152',
        changeRangeMin: 0,
        chartRangeMax: 10
      });

      $('.sparklines-composite-bar').sparkline('html', {
        type: 'bar',
        barColor: '#309ED9'
      });

      $('.sparklines-composite-bar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6,
        4, 7, 8, 4, 3, 2, 2, 5, 6, 7
      ], {
        composite: true,
        fillColor: false,
        lineColor: 'white',
        spotColor: 'white',
        minSpotColor: '#CA3E4C',
        maxSpotColor: '#88B152'
      });

      $('.sparklines-discrete').sparkline('html', {
        type: 'discrete',
        lineColor: '#2E9BDA',
        xwidth: 36
      });

      $('.sparklines-treshold').sparkline('html', {
        type: 'discrete',
        lineColor: '#309ED9',
        thresholdColor: '#C93E4E',
        thresholdValue: 4
      });

      $('.sparklines-tristate').sparkline('html', {
        type: 'tristate',
        posBarColor: '#2E9BDA',
        negBarColor: '#C93E4E',
        zeroBarColor: '#5C5C5C'
      });

      $('.sparklines-tristane-chart-using-a-colour-map').sparkline('html', {
        type: 'tristate',
        posBarColor: '#309ED9',
        negBarColor: '#C83E4F',
        zeroBarColor: '#005E9E',
        colorMap: {
          '-4': 'gray',
          '-2': 'pink',
          '2': 'orange'
        }
      });

      $('.sparklines-box-plot').sparkline('html', {
        type: 'box',
        lineColor: '#5C5C5C',
        boxLineColor: '#309ED9',
        boxFillColor: '#222E33',
        whiskerColor: '#5C5C5C',
        // outlierLineColor: $.colors("blue-grey", 300),
        // outlierFillColor: false,
        medianColor: '#C83E4F'
          // targetColor: $.colors("green", 500)
      });

      $('.sparklines-bullet').sparkline('html', {
        type: 'bullet',
        targetColor: '#212121',
        targetWidth: '2',
        performanceColor: '#212121',
        rangeColors: ['#2E9BDA', '#005B9F',
          '#222D33'
        ]
      });

      $('.sparklines-inline-range').sparkline('html', {
        fillColor: false,
        lineColor: '#5C5C5C',
        spotColor: 'white',
        minSpotColor: '#CA3E4C',
        maxSpotColor: '#88B152',
        normalRangeColor: '#2D2D2D',
        normalRangeMin: -1,
        normalRangeMax: 8
      });