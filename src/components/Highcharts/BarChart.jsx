import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

// Load the exporting module for exporting charts
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

const LoanChart = () => {
    useEffect(() => {
        // Radialize the colors
        Highcharts.setOptions({
            colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: {
                        cx: 0.5,
                        cy: 0.3,
                        r: 0.7
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
                    ]
                };
            })
        });

        // Build the chart
        Highcharts.chart('loan-chart-container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: "60%"
            },
            title: {
                text: 'Loan Breakdown',
                align: 'left'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<span style="font-size: 1.2em"><b>{point.name}</b></span><br>' +
                            '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
                        connectorColor: 'rgba(128,128,128,0.5)'
                    }
                }
            },
            series: [{
                name: 'Share',
                data: [
                    { name: 'Principal Loan Amount', y: 70000 },
                    { name: 'Total Interest', y: 30000 }
                ]
            }]
        });
    }, []);

    return <div id="loan-chart-container" />;
};

export default LoanChart;
