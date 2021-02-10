import { Currencies, Address } from '../types'

export type CreateAddressFieldsInterface = Address

export type CreateAddressFields = Partial<keyof CreateAddressFieldsInterface>

export interface CreateAddressVariables {
  root: {
    cryptocurrency?: keyof typeof Currencies
  }
}
