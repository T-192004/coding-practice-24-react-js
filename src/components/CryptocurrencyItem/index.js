// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = eachCurrency
  return (
    <li className="list-item">
      <div className="list-box">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="value">{currencyName}</p>
      </div>
      <div className="currency-box">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
