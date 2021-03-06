import { ID, GraphQlResponse, Payment } from '../types'

export type CancelWithdrawalFieldsInterface = Payment

export type CancelWithdrawalFields = Partial<
  keyof CancelWithdrawalFieldsInterface
>

export type CancelWithdrawalResponse = {
  data: {
    cancelWithdrawal: Payment
  }
} & GraphQlResponse

export interface CancelWithdrawalVariables {
  root: {
    payment?: ID
  }
}
