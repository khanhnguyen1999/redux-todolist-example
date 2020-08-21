import * as types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : [];

var s4 = ()=> {
    return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var guid= ()=> {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){
            result = index;
        }
    });
    return result;
}
var myReducer = (state = initialState,action)=>{
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            console.log(action)
            var newTask = {
                id:guid(),
                name:action.task.name,
                status:action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state];
        case types.UPDATE_STATUS:
            console.log(action)
            var id = action.id;
            var index = findIndex(state,id);
            // state[index].status = !state[index].status
            var cloneTask = {...state[index]}
            cloneTask.status  = !cloneTask.status;
            //cach 1
            // state.splice(index,1);
            // state.push(cloneTask)
            //cach 2
            // state[index]=cloneTask;
            //cach 3
            state[index] = {
                ...state[index],
                status:!state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]
        default: return state;
    }
};
export default myReducer