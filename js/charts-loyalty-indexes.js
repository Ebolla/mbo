/* Soial Bar Chart */
var chartLoyaltyMembership = new Chartist.Bar('#chart-loyalty-membership', {
  labels: ['Basic', 'Bronze', 'Silver', 'Gold', 'Platinum'],
  series: [
    {
      className: 'ct-series-e',
      data: 3450
    }, {
      className: 'ct-series-j',
      data: 1250
    }, {
      className: 'ct-series-k',
      data: 2869
    }, {
      className: 'ct-series-l',
      data: 1300
    }, {
      className: 'ct-series-m',
      data: 2750
    }
  ]
}, {
  distributeSeries: true,
  high: 3500,
  low: 0,
  ticks: [500, 1000, 1500, 2000, 2500, 3000, 3500],
  height:'400px',
  plugins: [
    Chartist.plugins.tooltip({
      tooltipOffset: {
        x: 0,
        y: -50
      },
      anchorToPoint: false
    })
  ]
});

chartLoyaltyMembership.on('draw', function(data) {

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
      r: [10],
      style: 'fill-opacity: 1; fill: #fff'
    }, 'ct-line'));
  }
});