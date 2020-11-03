import React, {useLayoutEffect, useState} from 'react';

import LineChart from "../Plots/LineChart";
import CandleStickChart from "../Plots/CandleStickChart";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {financialItemStyle} from './financialItemStyle'

import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {getFinancialItem} from "../../actions/financialItem";


const FinancialItem = ({financialItem:{financialItem},getFinancialItem,symbol}) => {
    const classes = financialItemStyle();
    const [typeOfChart,setTypeOfChart] = useState('line');

    useLayoutEffect(() => {
            getFinancialItem(symbol);
    },[getFinancialItem,symbol]);

    const handleChartChange = e => {
        setTypeOfChart(e.target.value);
    };

    const displayTheRightPlot = () => {
          console.log(financialItem)
        switch (typeOfChart) {
            case 'line':
                return (<LineChart
                    color='#28EBCF'
                    financialItem={financialItem}
                    financialItemName={financialItem.symbol}
                />);
            case 'candlestick':
                return (<CandleStickChart
                    financialItem={financialItem}
                    financialItemName={financialItem.symbol}
                />);
            default:
                return (<LineChart
                    color='#28EBCF'
                    financialItem={financialItem}
                    financialItemName={financialItem.symbol}
                />);
        }
    };

    return (
        <div className='financial-item-big-wrapper'>
            {financialItem ? <h1>Stock Chart ({financialItem.symbol})</h1> : null }
                <div>
                    {financialItem ? <p>{financialItem.symbol} ${financialItem.financialChartCloseValues[0]} ({financialItem.financialChartXValues[0]})</p> : null }
                    <Button variant="contained" color="primary" style={{marginRight: "10px", backgroundColor: 'green', borderColor: 'green'}}>
                        Buy
                    </Button>
                    <Button variant="contained" color="secondary">
                        Sell
                    </Button>
                </div>
            <div>
                {financialItem ? displayTheRightPlot() : null }
            </div>
            <div>
                {
                    financialItem ?
                        <FormControl className={classes.formControl} id='stock-type-of-chart-form-control'>
                            <InputLabel style={{color: 'white'}} shrink id="type-of-chart-select-label">
                                Type of Chart
                            </InputLabel>
                            <Select
                                labelId="type-of-chart-select-label"
                                id="type-of-chart-select"
                                value={typeOfChart}
                                onChange={handleChartChange}
                                displayEmpty
                                style={{color: 'white'}}
                            >
                                <MenuItem value={'line'}><em>Line</em></MenuItem>
                                <MenuItem value={'candlestick'}>CandleStick</MenuItem>
                            </Select>
                        </FormControl> : null
                }
            </div>
        </div>
    );
};

FinancialItem.propTypes = {
    financialItem: PropTypes.object.isRequired,
    getFinancialItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    financialItem: state.financialItem
})

export default connect(mapStateToProps,{getFinancialItem})(FinancialItem);