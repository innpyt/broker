import {GET_FINANCIAL_ITEM} from "./types";

export const getFinancialItem = (symbol) => async dispatch => {
    //const API_KEY = 'CU56D1648TDQK4IZ';
    //const API_KEY = 'W0LIHLALWUFJQ6A6';

    let finItemSymbol = symbol;

    let financialChartXValuesFunction = [];
    let financialChartCloseValuesFunction = [];
    let financialChartOpenValuesFunction = [];
    let financialChartHighValuesFunction = [];
    let financialChartLowValuesFunction = [];

    try{
         //await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${finItemSymbol}&outputsize=compact&apikey=${API_KEY}`)
         await fetch (`https://1bb52b88-46ec-419f-a704-04c2e4d24e69.mock.pstmn.io/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${finItemSymbol}&outputsize=compact&apikey=MOCK`)
            .then(
                function(response) {
                    console.log('API REQUEST');
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (let key in data['Time Series (Daily)']) {
                        financialChartXValuesFunction.push(key);
                        financialChartCloseValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
                        financialChartOpenValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                        financialChartHighValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
                        financialChartLowValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
                    }

                })

        const financialItem = {
            symbol: finItemSymbol,
            financialChartXValues: financialChartXValuesFunction,
            financialChartCloseValues: financialChartCloseValuesFunction,
            financialChartOpenValues: financialChartOpenValuesFunction,
            financialChartHighValues: financialChartHighValuesFunction,
            financialChartLowValues: financialChartLowValuesFunction,
        };

        dispatch({
            type: GET_FINANCIAL_ITEM,
            payload: financialItem
        })
    }catch (e) {
         console.log(e)
    }
}