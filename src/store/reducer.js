import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '',
    list: []
}
    
// reducer 必须是一个纯函数,指的是给定固定的输入,就一个会有固定的输出, => 在一个函数里面存在setTimeout()、ajax请求(异步)或者与日期相关的内容的时候, 它都不再是一个纯函数了
// reducer 不会有任何的副作用 => 即对输入的参数进行修改, 比如存在 state.inputValue = action.value,对输入参数state进行修改

// reducer 可以接收state ,但是绝不能修改state. 只能通过深拷贝的方式  => 即只有store才能改变自己的内容(要好好理解这句话)
export default (state = defaultState, action) => {
    // console.log(state,action)
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            {
                const newState = JSON.parse(JSON.stringify(state))
                newState.inputValue = action.value
                return newState
            }
        case ADD_TODO_ITEM:
            {
                const newState = JSON.parse(JSON.stringify(state))
                console.log(newState)
                newState.list = [...newState.list, newState.inputValue]
                newState.inputValue = ''
                return newState
            }
        case DEL_TODO_ITEM:
            {
                const newState = JSON.parse(JSON.stringify(state))
                console.log(action.id)
                newState.list.splice(action.id, 1)
                return newState
            }

    }
    return state
}