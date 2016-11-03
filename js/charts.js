/* Indexes Pie Chart */
var chartIndexes = new Chartist.Pie('#chart-indexes', {
  series: [
    {meta: 'SEI', value: 24},
    {meta: 'PCI', value: 18},
    {meta: 'CDI', value: 16},
    {meta: 'CPI', value: 42}
  ],
  labels: ['SEI', 'PCI', 'CDI', 'CPI']
}, {
  donut: true,
  donutWidth: 70,
  height: '340px',
  width: '340px',
  showLabel: false,
  plugins: [
    Chartist.plugins.tooltip({
      tooltipOffset: {
        x: 50,
        y: 0
      },
      anchorToPoint: false
    })
  ]
});

chartIndexes.on('draw', function(data) {
  if(data.type === 'slice') {
    // Get the total path length in order to use for dash array animation
    var pathLength = data.element._node.getTotalLength();

    // Set a dasharray that matches the path length as prerequisite to animate dashoffset
    data.element.attr({
      'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
    });

    // Create animation definition while also assigning an ID to the animation for later sync usage
    var animationDefinition = {
      'stroke-dashoffset': {
        id: 'anim' + data.index,
        dur: 500,
        from: -pathLength + 'px',
        to:  '0px',
        easing: Chartist.Svg.Easing.easeOutQuint,
        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
        fill: 'freeze'
      }
    };

    // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
    if(data.index !== 0) {
      animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
    }

    // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
    data.element.attr({
      'stroke-dashoffset': -pathLength + 'px'
    });

    // We can't use guided mode as the animations need to rely on setting begin manually
    // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
    data.element.animate(animationDefinition, false);
  }
});

/* Sales Line Chart */
var chartSales = new Chartist.Line('#chart-sales', {
  labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
  series: [{
    name: 'series-1',
    data: [5, 8, 45, 30, 17, 17, 31, 28, 34, 48, 54, 68]
  }, {
    className: 'ct-series-g',
    name: 'series-2',
    data: [45, 55, 98, 80, 60, 65, 45, 72, 68, 74, 73, 88]
  }]
}, {
  low: 0,
  ticks: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 100],
  fullWidth: true,
  height:'380px',
  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    },
    'series-2': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    }
  }
});


chartSales.on('draw', function (data) {
  if (data.type === 'line' || data.type === 'area') {

    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  } else if (data.type === 'point') {

    var circle = new Chartist.Svg('circle', {
      cx: [data.x],
      cy: [data.y],
      r: [8],
      style: 'fill-opacity: 1; fill: #fff'
    }, 'ct-line');
    data.element.replace(circle);

  } else if (data.type === 'grid' && data.y1 == data.y2 && data.index === 0) {

    var line = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y1,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(line);

  } else if (data.type === 'grid' && data.x1 == data.x2) {

    var tick = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y2 - 5,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(tick);

  }
});

/* Campaign Line Chart */
var chartCampaigns = new Chartist.Line('#chart-campaigns', {
  labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  series: [{
    name: 'series-1',
    data: [6000, 3000, 1000, 2000, 3000, 2000, 4000, 5500, 6000, 6500, 7000, 8000]
  }, {
    name: 'series-2',
    data: [2000, 4000, 7000, 5000, 4000, 5000, 6000, 7000, 8500, 8000, 8500, 9000]
  }, {
    className: 'ct-series-d',
    name: 'series-3',
    data: [4000, 7000, 10000, 6000, 8000, 7000, 7000, 8500, 9000, 9000, 10000, 10000]
  }]
}, {
  low: 0,
  fullWidth: true,
  height:'340px',
  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    },
    'series-2': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    },
    'series-3': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    }
  }
});

chartCampaigns.on('draw', function (data) {
  if (data.type === 'point') {

    var circle = new Chartist.Svg('circle', {
      cx: [data.x],
      cy: [data.y],
      r: [6],
      style: 'fill-opacity: 1; fill: #fff'
    }, 'ct-line');
    data.element.replace(circle);

  } else if (data.type === 'grid' && data.y1 == data.y2 && data.index === 0) {

    var line = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y1,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(line);

  } else if (data.type === 'grid' && data.x1 == data.x2) {

    var tick = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y2 - 5,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(tick);

  }
});

var chartActions = new Chartist.Line('#chart-actions', {
  labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  series: [{
    className: 'ct-series-e',
    name: 'series-1',
    data: [15, 20, 30, 40, 35, 20, 30, 35, 40, 45, 50]
  }]
}, {
  low: 0,
  ticks: [5, 50],
  fullWidth: true,
  height:'340px',
  series: {
    'series-1': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    }
  }
});

chartActions.on('draw', function (data) {
  if (data.type === 'point') {

    var circle = new Chartist.Svg('circle', {
      cx: [data.x],
      cy: [data.y],
      r: [6],
      style: 'fill-opacity: 1; fill: #fff'
    }, 'ct-line');
    data.element.replace(circle);

  } else if (data.type === 'grid' && data.y1 == data.y2 && data.index === 0) {

    var line = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y1,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(line);

  } else if (data.type === 'grid' && data.x1 == data.x2) {

    var tick = new Chartist.Svg('line', {
      x1: data.x1,
      x2: data.x2,
      y1: data.y2 - 5,
      y2: data.y2
    }, 'ct-grid ct-vertical ct-solid');
    data.element.replace(tick);

  }
});

/* Social Bar Chart */
var chartSocial = new Chartist.Bar('#chart-social', {
  labels: ['Facebook', 'Instagram', 'Snapchat'],
  series: [
    {
      className: 'ct-series-f',
      data: 3250
    }, {
      className: 'ct-series-h',
      data: 1485
    }, {
      className: 'ct-series-d',
      data: 3100
    }
  ]
}, {
  distributeSeries: true,
  high: 3500,
  low: 0,
  height:'340px',
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