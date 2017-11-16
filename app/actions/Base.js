
import { Actions } from 'react-native-router-flux'
import { get,post } from '../components/Common/AJAX'
import { TEST } from '../constants'
import { PREFIX } from '../constants'

// export const GoTest2 = ()=> dispatch => {
//   Actions.test2()
// }
export const test = val => dispatch => {
  	get(
  		{
  			url:'`${PREFIX}/api/app/agent/login`',
  		 	data:{
                ...val,
                key:'5276995-c7c1cf675c10b30e58c79a2d7',
                image_type:'photo',
                lang:'zh'
            },
  		},
  	 	(result)=>{
  	 		dispatch({
  	 			type: "TEST",
  		  	  	payload: {
                    total:result.total
  		  	  	}
  	 		})
  	 	},
  	 	(info)=>{
  	 		console.log(info)
  	 	}
  	)
}
