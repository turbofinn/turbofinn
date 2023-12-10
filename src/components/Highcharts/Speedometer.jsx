import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Initialize the Highcharts More module
require('highcharts/highcharts-more')(Highcharts);

Highcharts.setOptions({
    credits: {
        enabled: false, // Disable the credits (watermark)
    }
});

const CibilScoreChart = () => {
    useEffect(() => {
        // Add some life
        const intervalId = setInterval(() => {
            const chart = Highcharts.charts[0];
            if (chart && chart.series && chart.series[0] && chart.series[0].points) {
                const point = chart.series[0].points[0];
                if (point) {
                    const inc = Math.round((Math.random() - 0.5) * 80);

                    let newVal = point.y + inc;
                    if (newVal < 300 || newVal > 900) {
                        newVal = point.y - inc;
                    }

                    point.update(newVal);
                }
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    const options = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '80%',
        },
        title: {
            text: 'Check free CIBIL Score',
        },
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%',
        },
        yAxis: {
            min: 300,
            max: 900,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px',
                },
            },
            lineWidth: 0,
            plotBands: [
                {
                    from: 300,
                    to: 500,
                    color: '#DF5353', // Red
                    thickness: 20,
                },
                {
                    from: 500,
                    to: 700,
                    color: '#DDDF0D', // Yellow
                    thickness: 20,
                },
                {
                    from: 700,
                    to: 900,
                    color: '#55BF3B', // Green
                    thickness: 20,
                },
            ],
        },
        series: [
            {
                name: 'Score',
                data: [650], // Default CIBIL score
                tooltip: {
                    valueSuffix: ' CIBIL Score',
                },
                dataLabels: {
                    format: '{y} CIBIL Score',
                    borderWidth: 0,
                    color:
                        (Highcharts.defaultOptions.title &&
                            Highcharts.defaultOptions.title.style &&
                            Highcharts.defaultOptions.title.style.color) ||
                        '#333333',
                    style: {
                        fontSize: '16px',
                    },
                },
                dial: {
                    radius: '80%',
                    backgroundColor: 'gray',
                    baseWidth: 12,
                    baseLength: '0%',
                    rearLength: '0%',
                },
                pivot: {
                    backgroundColor: 'gray',
                    radius: 6,
                },
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CibilScoreChart;
