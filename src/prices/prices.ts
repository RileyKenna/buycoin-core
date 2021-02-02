import { Side } from '../types'
import Query from '../base/query'
import request from '../api/request'
import { applyMixins } from '../helpers/apply-mixins'
import {
  FilterableByCryptocurrency,
  FilterableByCryptocurrencyInterface,
} from '../helpers/filterable-by-currency'
import { PricesFields, PricesVariables } from './prices.interface'

interface Prices extends FilterableByCryptocurrencyInterface {}

class Prices extends Query<PricesFields, PricesVariables> {
  public static fields: PricesFields[] = [
    'id',
    'status',
    'maxBuy',
    'minSell',
    'maxSell',
    'expiresAt',
    'minCoinAmount',
    'cryptocurrency',
    'buyPricePerCoin',
    'sellPricePerCoin',
  ]

  constructor(key?: string, secret?: string) {
    super(key, secret)

    super.fields(Prices.fields)
  }

  /**
   * Get the buy price for the selected currencies
   *
   * @returns Prices
   */
  public buy() {
    this.baseOptions.variables.side = Side.buy

    return this
  }

  /**
   *
   * Get the sell price for the selected currencies
   *
   * @returns Prices
   */
  public sell() {
    this.baseOptions.variables.side = Side.sell

    return this
  }

  /**
   *
   * Make the API call to get prices with defined options
   *
   * @returns Prices
   */
  public async get() {
    return request<
      PricesFields,
      PricesVariables,
      {
        data: {
          getPrices: PricesFields[]
        }
      }
    >()
      .fields(this.baseOptions.fields)
      .query('getPrices')
      .variables(this.baseOptions.variables)
      .post()
  }
}

applyMixins(Prices, [FilterableByCryptocurrency])

const prices = (key?: string, secret?: string) => new Prices(key, secret)

export default prices