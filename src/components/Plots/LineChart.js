import React,{Fragment} from 'react';
import PropTypes from 'prop-types'
import Plot from 'react-plotly.js';

const LineChart = ({financialItem,financialItemName,color}) => {
    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: financialItem.financialChartXValues,
                        y: financialItem.financialChartCloseValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: color},
                    }
                ]}
                layout={
                    {
                        width: 720, 
                        height: 440, 
                        title: {
                          text: financialItemName,
                          font: {
                            color: '#28EBCF'
                          }
                        },
                        plot_bgcolor:"black",
                        paper_bgcolor:"black",
                        xaxis: {
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
                    }
                }
                options ={ {displaylogo: 'false'} }
            />
        </Fragment>
    );
};

LineChart.propTypes = {
    financialItem: PropTypes.object.isRequired,
    financialItemName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default LineChart;