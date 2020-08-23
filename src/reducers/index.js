import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm'
import valueKeyword from './valueKeyword'
import itemEditing from './itemEditing'
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    valueKeyword,
    itemEditing
})
export default myReducer