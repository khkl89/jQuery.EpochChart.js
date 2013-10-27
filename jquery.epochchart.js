// Generated by CoffeeScript 1.3.3

(function($) {
  return $.fn.epochchart = function(lines, markers, highchartsOpts) {
    var chart, defaultHighchartsOpts, markerData, markerLine;
    if (highchartsOpts == null) {
      highchartsOpts = {};
    }
    if (Object.prototype.toString.call(lines) !== '[object Array]') {
      lines = [lines];
    }
    defaultHighchartsOpts = {
      title: {
        text: null
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%e. %b',
          year: '%b'
        }
      },
      yAxis: {
        title: {
          text: null
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: '#808080'
          }
        ]
      },
      plotOptions: {
        scatter: {
          marker: {
            symbol: "url(/line.png)",
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            enabled: true,
            headerFormat: '',
            pointFormat: '{point.name}'
          }
        },
        spline: {
          marker: {
            enabled: false
          }
        }
      },
      legend: {
        enabled: false
      }
    };
    highchartsOpts = $.extend(true, defaultHighchartsOpts, highchartsOpts);
    markerData = $.map(markers, function(marker) {
      return {
        x: new Date(marker[0] * 1000),
        y: 500,
        name: marker[1]
      };
    });
    markerLine = {
      type: 'scatter',
      name: 'Markers',
      data: markerData
    };
    lines = $.map(lines, function(line) {
      var lineData;
      lineData = $.map(line.data, function(data) {
        return {
          x: new Date(data[0] * 1000),
          y: data[1]
        };
      });
      return {
        type: 'spline',
        name: line.name,
        data: lineData
      };
    });
    lines.push(markerLine);
    chart = $.extend(true, highchartsOpts, {
      series: lines
    });
    return $(this).highcharts(chart);
  };
})(jQuery);