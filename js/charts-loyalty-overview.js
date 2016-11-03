/* Loyalty User Actions Line Chart */
var chartLoyaltyActions = new Chartist.Line('#chart-loyalty-actions', {
  labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
  series: [{
    className: 'ct-series-e',
    name: 'series-1',
    data: [1000, 1500, 6000, 2500, 3000, 3000, 1500, 3750, 3250, 2000, 4200, 4500]
  }, {
    className: 'ct-series-j',
    name: 'series-2',
    data: [2000, 3000, 3250, 4500, 5000, 4050, 6000, 6500, 5000, 4750, 5000, 5500]
  }, {
    className: 'ct-series-k',
    name: 'series-3',
    data: [5000, 4500, 1050, 6500, 6000, 5050, 5000, 5500, 6000, 6250, 6500, 6500]
  }, {
    className: 'ct-series-l',
    name: 'series-4',
    data: [8000, 7500, 7000, 1500, 4000, 6050, 8000, 7500, 7750, 8000, 8250, 8500]
  }, {
    className: 'ct-series-m',
    name: 'series-5',
    data: [9500, 9000, 8050, 7500, 7750, 8000, 9050, 9000, 9000, 9500, 9000, 9750]
  }]
}, {
  low: 0,
  ticks: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000 ],
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
    },
    'series-4': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    },
    'series-5': {
      lineSmooth: Chartist.Interpolation.none({
        fillHoles: false
      })
    }
  },
  plugins: [
    Chartist.plugins.legend({
      removeAll: true,
      position: 'bottom',
      classNames: ['ct-series-e', 'ct-series-j', 'ct-series-k', 'ct-series-l', 'ct-series-m'],
      legendNames: ['Basic', 'Bronze', 'Silver', 'Gold', 'Platinum']
    })
  ]
});

chartLoyaltyActions.on('draw', function (data) {
  if (data.type === 'point') {

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

/* Loyalty User Actions Line Chart */
var chartLoyaltyDynamic = new Chartist.Line('#chart-loyalty-dynamic', {
  labels: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
  series: [{
    className: 'ct-series-e',
    name: 'series-1',
    data: [1000, 1500, 3500, 2500, 3000, 3000, 1500, 3750, 3250, 2000, 4200, 4500]
  }, {
    className: 'ct-series-a',
    name: 'series-2',
    data: [8000, 7500, 8500, 7500, 8000, 7050, 9000, 9500, 8000, 7750, 8000, 8500]
  }, {
    className: 'ct-series-l',
    name: 'series-3',
    data: [6000, 6500, 2050, 9500, 9000, 8050, 8000, 8500, 9000, 9250, 9500, 9500]
  }]
}, {
  low: 0,
  ticks: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000 ],
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
  },
  plugins: [
    Chartist.plugins.legend({
      removeAll: true,
      position: 'bottom',
      classNames: ['ct-series-e', 'ct-series-a', 'ct-series-l'],
      legendNames: ['Like', 'Repost', 'Comment']
    })
  ]
});

chartLoyaltyDynamic.on('draw', function (data) {
  if (data.type === 'point') {

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