import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../actions/index'

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id : this.props.itemEditing.id,
                name : this.props.itemEditing.name,
                status : this.props.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id : nextProps.itemEditing.id,
                name : nextProps.itemEditing.name,
                status : nextProps.itemEditing.status
            });
        }else{
            this.onClear();
        }
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }
    
    onHandleSubmit = (event) => {
        event.preventDefault();
        // this.props.onSave(this.state);
        this.props.onAddTask(this.state)
        this.onClear();
        this.onExitForm();
    }

    onClear = () => {
        this.setState({
            id : '',
            name : '',
            status : false
        });
    }

    onExitForm = () => {
        this.props.onCloseForm();
    }

    render() {
        console.log("task: ",this.props.itemEditing.name)
        if(!this.props.isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        { !this.props.itemEditing.id ? 'Thêm Công Việc' : 'Cập Nhật Công Việc' }
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onExitForm}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onHandleSubmit} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.props.itemEditing.name}
                                onChange={ this.onHandleChange }
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            value={this.props.itemEditing.status}
                            onChange={this.onHandleChange}
                            name="status"
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu Lại
                            </button>&nbsp;
                            <button type="button" onClick={ this.onClear } className="btn btn-danger">
                                <span className="fa fa-close mr-5"></span>Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isDisplayForm:state.isDisplayForm,
        itemEditing:state.itemEditing
    }
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        onAddTask: (task)=>{
            dispatch(actions.addTask(task))
        },
        onCloseForm : ()=>{
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
