
import {curry,compose,reduce,keys,sortBy,map,mapValues} from 'lodash'
import { MAX_ITEM } from '../constants'

export function _sortBy(list,val,type) {
	return sortBy(map(list,(item)=>{return mapValues(item, (n)=>{ return isNaN(n*1)?n:n*1})}), (item)=> {return type=='ASC'?item[val]:-item[val]})
}

export function _sliceAry(list,page) {
    return list.slice((page-1)*MAX_ITEM,(page-1)*MAX_ITEM+MAX_ITEM)
}
