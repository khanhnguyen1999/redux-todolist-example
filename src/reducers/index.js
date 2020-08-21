import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm'
import onSearch from './valueKeyword'
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    onSearch
})
export default myReducer