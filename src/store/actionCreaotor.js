import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

export const getInputChangeAction = value => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}

// 增加item
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

// 删除item
export const getDelItemAction = id => {
    console.log("1211")
    return {
        type: DEL_TODO_ITEM,
        id
    }
}