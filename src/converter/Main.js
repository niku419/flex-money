import React, {useState, useEffect } from 'react';
import Converter from './Converter'
import { countries, conversionRates } from './conversionRates';

function Main() {
  const [currencyOptions, setCurrencyOptions] = useState(countries)
  const [fromCurrency, setFromCurrency] = useState("YEN")
  const [toCurrency, setToCurrency] = useState("USD")
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  useEffect(() => {
    console.log(fromCurrency)
    let s = fromCurrency + "to" + toCurrency;
    setExchangeRate(conversionRates[s])
    console.log(s);
  }, [fromCurrency, toCurrency])

  return (
    <div style={{height: "100vh", display: 'flex', justifyContent: "center", alignItems: 'center'}} >
      <Converter
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <Converter
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
}

export default Main;