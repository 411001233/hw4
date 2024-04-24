// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '全球氣候最高氣溫'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '加德滿都',
        marker: {
            symbol: 'square'
        },
        data: [18, 20.2, 24.3, 27.4, 28.2, 28.3, 27.7, 28, 27.2, 25.8, 22.7, 19.4]
    }, {
        name: '多倫多',
        marker: {
            symbol: 'diamond'
        },
        data: [-1.1, -0.2, 4.6, 11.3, 18.5, 23.5, 26.4, 25.3
            , 20.7, 13.8, 7.4, 1.8]
    }, {
        name: '奧斯陸',
        marker: {
            symbol: 'circle'
        },
        data: [-1.8, -0.9, 3.5, 9.1, 15.8, 20.4, 21.5, 20.1, 15.1, 9.3, 3.2, -0.5]
    }
    ]
});
