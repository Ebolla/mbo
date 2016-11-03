/* Social Bar Chart */
var chartSocial = new Chartist.Bar('#chart-loyalty-social', {
  labels: ['Facebook', 'Instagram', 'Snapchat'],
  series: [
    {
      className: 'ct-series-f',
      data: 3250
    }, {
      className: 'ct-series-h',
      data: 2554
    }, {
      className: 'ct-series-d',
      data: 3100
    }
  ]
}, {
  distributeSeries: true,
  high: 3500,
  low: 0,
  height:'200px',
  plugins: [
    Chartist.plugins.tooltip({
      tooltipOffset: {
        x: 0,
        y: -50
      },
      anchorToPoint: false
    })
  ]
  // axisX: {
  //   labelInterpolationFnc: function(value) {
  //     return value;
  //   }
  // }
});

chartSocial.on('draw', function(data) {

  if (data.type === 'grid' && data.y1 == data.y2 && data.index === 0) {

    var line = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y1,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(line);

  } else if (data.type === 'grid' && data.x1 == data.x2) {

    data.element.remove();

  } else  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 4px'
    });
    data.group.append(new Chartist.Svg('circle', {
      cx: data.x2,
      cy: data.y2,
      r: [8],
      style: 'fill-opacity: 1; fill: #fff'
    }, 'ct-line'));
  }
});