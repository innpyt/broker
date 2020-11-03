import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const CandleStickChart = ({financialItem,financialItemName}) => {
    console.log(financialItem)
    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: financialItem.financialChartXValues,
                        close: financialItem.financialChartCloseValues,
                        decreasing: {line: {color: 'red'}},
                        high: financialItem.financialChartHighValues,
                        increasing: {line: {color: 'green'}},
                        line: {color: 'rgba(31,119,180,1)'},
                        low: financialItem.financialChartLowValues,
                        open: financialItem.financialChartOpenValues,
                        type: 'candlestick',
                    }
                ]}
                layout={{
                        width: 720,
                        height: 440,
                        title: {
                            text: financialItemName,
                            font: {
                                color: '#28EBCF'
                            }
                        },
                        dragmode: 'zoom',
                        showlegend: false,
                        plot_bgcolor:"black",
                        paper_bgcolor:"black",
                        xaxis: {
                            rangeslider: {
                                visible: false
                            },
                            title: {
                                font: {
                                    color: '#28EBCF'
                                }
                            },
                            tickfont: {
                                color: '#28EBCF'
                            }
                        },
                        yaxis: {
                            autorange: true,
                            gridcolor: "#2e2e2e",
                            title: {
                                font: {
                                    color: '#28EBCF'
                                }
                            },
                            tickfont: {
                                color: '#28EBCF'
                            }
                        }
                }}
                options ={ {displaylogo: 'false'} }
            />
        </Fragment>
    );
};

CandleStickChart.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,
}

export default CandleStickChart;