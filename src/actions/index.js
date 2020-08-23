import * as types from './../constants/ActionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}
export const toggleForm = ()=>{
    return {
        type:types.TOGGLE_FORM
    }
}
export const openForm = ()=>{
    return {
        type:types.OPEN_FORM
    }
}
export const closeForm = ()=>{
    return {
        type:types.CLOSE_FORM
    }
}
export const updateStatus = (id)=>{
    return {
        type:types.UPDATE_STATUS,
        id
    }
}
export const deleteItem = (id)=>{
    return {
        type:types.DELETE_ITEM,
        id
    }
}
export const valueKeyword = (keyword)=>{
    return {
        type:types.SEARCH_VALUE,
        keyword
    }
}
export const openSelectedItem = (id)=>{
    return {
        type:types.SELECTED_ITEM,
        id
    }
}
export const editTask = (task)=>{
    return {
        type:types.EDIT_ITEM,
        task
    }
}