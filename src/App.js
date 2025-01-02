import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
   const [fromCurrency, setFromCurrency] = React.useState('PLN')
   const [toCurrency, setToCurrency] = React.useState('USD')

   const [fromPrice, setFromPrice] = React.useState(0);
   const [toPrice, setToPrice] = React.useState(1);

   // const [rates, setRates] = React.useState({});
   const ratesRef = React.useRef({})

   React.useEffect(() => {
     fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
      .then((response) => response.json())
      .then((data) => {
         ratesRef.current = data.usd
         onChangeToPrice(1)
      })
      .catch((error) => {
         console.error('Error:', error)
         alert('Failed to fetch data');
      })
      .finally(() => console.log('Fetch completed'));
   }, []);

   const onChangeFromPrice = (value) => {
      const price = value / ratesRef.current[fromCurrency.toLowerCase()];
      const result = price * ratesRef.current[toCurrency.toLowerCase()]
      setFromPrice(value);
      setToPrice(result.toFixed(3));
   }

   const onChangeToPrice = (value) => {
      const result = (ratesRef.current[fromCurrency.toLowerCase()] / ratesRef.current[toCurrency.toLowerCase()]) * value;
      setFromPrice(result.toFixed(3));
      setToPrice(value);
   }

   React.useEffect(() => {
      onChangeFromPrice(fromPrice)
   }, [fromCurrency])

   React.useEffect(() => {
      onChangeToPrice(toPrice)
   }, [toCurrency])

  return (
    <div className="App">
      <Block value={fromPrice} currency={fromCurrency} onChangeValue={onChangeFromPrice} onChangeCurrency={setFromCurrency} />
      <Block value={toPrice} currency={toCurrency} onChangeValue={onChangeToPrice} onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default App;