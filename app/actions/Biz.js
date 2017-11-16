import { Actions } from 'react-native-router-flux'
import { get,post } from '../components/Common/AJAX'
import { ADD_ITEM, PREFIX, PAY_PASSWORD} from '../constants'


export function addItem(val) {
    return {
        type: "ADD_ITEM",
        payload: val
    }
}
export function addPassword(val) {
    return {
        type: "PAY_PASSWORD",
        payload: val
    }
}
