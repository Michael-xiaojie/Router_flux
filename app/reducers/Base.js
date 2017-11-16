
import { TEST } from '../constants'

export default (state = {total:0}, action) => {
    const { type, payload } = action
    switch (type) {
        case TEST:
            return {
                ...state,
                ...payload,
            }
            break
        default:
            return state
  	}

}
