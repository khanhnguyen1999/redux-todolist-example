import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm'
import valueKeyword from './valueKeyword'
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    valueKeyword
})
export default myReducer