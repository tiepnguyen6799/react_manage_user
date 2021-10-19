import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue:'',
            userObj:{}
        }
        
    }

    getUserEditInfo = (info) =>{
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditFrom = () =>{
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo = {(info)=> this.getUserEditInfo(info)}
            userEditObject = {this.props.userEditObject}
            changeEditUserStatus = {()=> this.props.changeEditUserStatus()} ></EditUser>
        }
    }
    

    isChange = (event) =>{
        console.log(event.target.value)
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () =>{
        if(this.props.hienThiFrom === true){
            return  <div className="btn btn-block btn-outline-secondary" onClick ={()=> this.props.ketNoi()} > Đóng lại </div>

        }
        else{
            return  <div className="btn btn-block btn-outline-info" onClick ={()=> this.props.ketNoi()} > Thêm mới </div>

        }
    }

    render() {
        return (
            <div className="col-12">
                {this.isShowEditFrom()}
                <div className="form-group">
                <div className="btn-group btn-block">
                    <input type="text" className="form-control"  onChange = {(event) => this.isChange(event)} placeholder="Nhập tên cần tìm" />
                    <div className="btn btn-info " onClick={(dl)=> this.props.checkConnectProps(this.state.tempValue)}> Tìm</div>
                </div>
                </div>
                    {this.hienThiNut()}
                <hr/>
            </div>
        )
    }
}

