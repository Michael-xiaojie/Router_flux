
import { ADD_ITEM,PAY_PASSWORD } from '../constants'
import { AsyncStorage } from 'react-native'

async function save(info) {
    try {
        await AsyncStorage.setItem('userId', info.userId);
        await AsyncStorage.setItem('token', info.token);
        await AsyncStorage.setItem('phone', info.phone);
        await AsyncStorage.setItem('hasPwd', info.hasPwd);        
    } catch (error) {

    }
}

export default (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_ITEM:
            save(payload.user)
            return {
                ...state,
                ...payload,
            }
            break
        case PAY_PASSWORD:
                save(payload.password)
                return {
                    ...state,
                    ...payload,
                }
            break
        default:
            return state
  	}

}
