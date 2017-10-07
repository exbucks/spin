/** START JS SETTINGS "Peity": System from system.html**/

      // Example Peity Primary
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimary").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#4ca8e1',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Primary uses in Graphs Widgets ( graphs-widgets.html)
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimaryStock").peity("line", {
          width: 200,
          fill: 'transparent',
          stroke: 'white',
          height: 66,
          width: null
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Primary uses in Satisfaction Results ( graphs-widgets.html )
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimary-SatisfactionResults").peity("line", {
          width: null,
          fill: '#2a2a2a',
          stroke: '#4ca8e1',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

          // Example Peity Primary2
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimary2").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#4ca8e1',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

       // Example Peity Primary3
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimary3").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#4ca8e1',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

       // Example Peity Primary4
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimary4").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#4ca8e1',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Primary5
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicPrimary5").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#4ca8e1',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

     // Example Peity Success
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicSuccess").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#86b34d',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

     // Example Peity Info
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $(".examplePeityDynamicInfo").peity("line", {
          width: 200,
          fill: '#232D2C',
          stroke: '#3BBDA8',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

     // Example Peity Success2
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicSuccess2").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#86b34d',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

     // Example Peity Success3
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicSuccess3").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#86b34d',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Success4
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicSuccess4").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#86b34d',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

    // Example Peity Success5
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicSuccess5").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#86b34d',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

    // Example Peity Warning
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicWarning").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#e66c40',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

     // Example Peity Warning2
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicWarning2").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#e66c40',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

         // Example Peity Warning3
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicWarning3").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#e66c40',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

         // Example Peity Warning4
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicWarning4").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#e66c40',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

         // Example Peity Warning5
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicWarning5").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#e66c40',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Danger
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicDanger").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#cb3e4b',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Danger2
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicDanger2").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#cb3e4b',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Danger3
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicDanger3").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#cb3e4b',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Danger4
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicDanger4").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#cb3e4b',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

      // Example Peity Danger5
      // ---------------------
      (function() {
        /* dynamic example */
        var dynamicChart = $("#examplePeityDynamicDanger5").peity("line", {
          width: 200,
          fill: '#2a2a2a',
          stroke: '#cb3e4b',
          height: 33
        });

        setInterval(function() {
          var random = Math.round(Math.random() * 10);
          var values = dynamicChart.text().split(",");
          values.shift();
          values.push(random);

          dynamicChart
            .text(values.join(","))
            .change();
        }, 1000);
      })();

/** END JS SETTINGS "Peity": System from system.html **/

/** START JS Init "Peity" Pie (Colors Variations) from peity.html **/
    $("span.pie.peity-pie-primary").peity("pie", {
        fill: ["#2D99DC", "#222D33", ],
    })
    $("span.pie.peity-pie-info").peity("pie", {
        fill: ["#35BDA8", "#243834"],
    })
    $("span.pie.peity-pie-success").peity("pie", {
        fill: ["#86B34D", "#2B2F26"],
    })
    $("span.pie.peity-pie-warning").peity("pie", {
        fill: ["#E66C40", "#342824"],
    })
    $("span.pie.peity-pie-danger").peity("pie", {
        fill: ["#CB3E4B", "#342824"],
    })
/** JS Init "Peity" Pie (Colors Variations) from peity.html **/

/** START JS Init "Peity" Donut (Colors Variations) from peity.html **/

    $(".donut.peity-donut-primary").peity("donut", {
        fill: ["#2D99DC", "#222D33", ],
    })
    $(".donut.peity-donut-info").peity("donut", {
        fill: ["#35BDA8", "#243834"],
    })
    $(".donut.peity-donut-success").peity("donut", {
        fill: ["#86B34D", "#2B2F26"],
    })
    $(".donut.peity-donut-warning").peity("donut", {
        fill: ["#E66C40", "#342824"],
    })
    $(".donut.peity-donut-danger").peity("donut", {
        fill: ["#CB3E4B", "#342824"],
    })
/** END JS Init "Peity" Donut (Colors Variations) from peity.html **/

/** START JS Init "Peity" Line (Colors Variations) from peity.html **/
    $(".line.peity-line-primary").peity("line", {
        fill: ["#222D33"],
         stroke: ["#2D99DC"],
    })

/** START JS Init "Peity" Line (Colors Variations) from overview.html **/
       $(".line.peity-line-primary-overview").peity("line", {
        fill: 'transparent',
         stroke: ["white"],
        width: 73,
    })
      $(".line.peity-line-primary-performance").peity("line", {
        fill: ["transparent"],
         stroke: ["#2D99DC"],
          height: 20,
          width: 130,
    })
    $(".line.peity-line-info").peity("line", {
       fill: ["#243834"],
         stroke: ["#35BDA8"],
    })
    $(".line.peity-line-success").peity("line", {
       fill: ["#2B2F26"],
         stroke: ["#86B34D"],
    })
    $(".line.peity-line-warning").peity("line", {
        fill: ["#342824"],
         stroke: ["#E66C40"],
    })
    $(".line.peity-line-danger").peity("line", {
       fill: ["#342824"],
         stroke: ["#CB3E4B"],
    })
/** END JS Init "Peity" Line (Colors Variations) from peity.html **/

/** START JS Init "Peity" Bar (Colors Variations) from peity.html **/

    $(".bar.peity-bar-primary").peity("bar", {
        fill: ["#2D99DC"],
    })
    $(".bar.peity-bar-info").peity("bar", {
       fill: ["#35BDA8"],
    })
    $(".bar.peity-bar-success").peity("bar", {
       fill: ["#86B34D"],
    })
    $(".bar.peity-bar-warning").peity("bar", {
         fill: ["#E66C40"],
    })
    $(".bar.peity-bar-danger").peity("bar", {
         fill: ["#CB3E4B"],
    })
     $(".bar.peity-bar-gray").peity("bar", {
         fill: ["#2D2D2D"],
          width: 130,
    })
/** END JS Init "Peity" Bar (Colors Variations) from peity.html **/

/** START JS Init "Peity" Bar (Statisticts/Views) from graphs-widgets.html **/
$(".bar.peity-bar-primary-statisticts2-views").peity("bar", {
        fill: ["#2D99DC"],
            height: 45,
             padding: 0.4,
          width: 100,
    })

$(".bar.peity-bar-info-statisticts2-followers").peity("bar", {
        fill: ["#35BDA8"],
            height: 45,
             padding: 0.4,
          width: 100,
    })

$(".bar.peity-bar-success-statisticts2-likes").peity("bar", {
        fill: ["#86B34D"],
            height: 45,
             padding: 0.4,
          width: 100,
    })
