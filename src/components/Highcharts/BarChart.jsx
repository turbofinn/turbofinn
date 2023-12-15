import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

// Load the exporting module for exporting charts
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

const LoanChart = (props) => {
    useEffect(() => {
        // Build the chart
        Highcharts.chart('loan-chart-container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height: '60%',
            },
            title: {
                text: 'Loan Breakdown',
                align: 'left',
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
            },
            accessibility: {
                point: {
                    valueSuffix: '%',
                },
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format:
                            '<span style="font-size: 1.2em"><b>{point.name}</b></span><br>' +
                            '<span style="opacity: 0.6">{point.percentage:.1f} %</span>',
                        connectorColor: 'rgba(128,128,128,0.5)',
                    },
                },
            },
            series: [
                {
                    name: 'Share',
                    data: [
                        { name: 'Principal Loan Amount', y: props && props.totalPrincipal ? parseInt(props.totalPrincipal, 10) : 0 },
                        { name: 'Total Interest', y: props && props.totalInterest ? parseInt(props.totalInterest, 10) : 0 },
                    ],
                },
            ],
        });
    }, [props.totalPrincipal, props.totalInterest]);

    return <div id="loan-chart-container" />;
};

export default LoanChart;
