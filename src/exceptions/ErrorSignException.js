/* eslint-disable no-useless-constructor */
import ExtendableErrorException from './ExtendableErrorException'

class ErrorSignException extends ExtendableErrorException {
  constructor(message) {
    super(message)
  }
}

export default ErrorSignException
