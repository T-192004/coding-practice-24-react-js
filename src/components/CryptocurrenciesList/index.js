// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currenciesList: []}

  componentDidMount = () => {
    this.getCryptoCurrencyList()
  }

  getCryptoCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const dataList = await response.json()
    const updatedList = dataList.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({currenciesList: updatedList, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {currenciesList} = this.state
    return (
      <div className="list-container">
        <h1 className="list-tile">Cryptocurrency Tracker</h1>
        <img
          className="list-bg-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <li className="currencies-list">
          <li className="title-list-item">
            <h1 className="title">Coin Type</h1>
            <div className="title-currency">
              <h1 className="title">USD</h1>
              <h1 className="title">EURO</h1>
            </div>
          </li>
          {currenciesList.map(eachCurrency => (
            <CryptocurrencyItem
              eachCurrency={eachCurrency}
              key={eachCurrency.id}
            />
          ))}
        </li>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="card-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
