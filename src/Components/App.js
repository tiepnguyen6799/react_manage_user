import './../App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

import { v4 as uuidv4 } from 'uuid';

import DataUser from './Data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiFrom: false,
      data: DataUser,
      seachText:"",

      editUserStatus: false,
      userEditObject:{}
    }
  }

  componentWillMount() {
    // kiem tra xem co localStorage
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data:temp
      })
    }
    console.log();
  }
  

  deleteUser = (idUser) =>{

    // var tempData = this.state.data;

    var tempData = this.state.data.filter(item => item.id !== idUser)
    // console.log(tempData);
    // tempData.forEach((value,key) =>{
    //   if(value.id === idUser){
    //     console.log(key);
    //     tempData.delete
    //   }
    // })
    this.setState({
      data: tempData
    })
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  getUserEditInfoApp = (info) =>{
    
    this.state.data.forEach((value,key) =>{
    if(value.id === info.id){
        value.name = info.name
        value.tel = info.tel
        value.Permission = info.Permission
        console.log(value.id);
        console.log(info.id);
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
    // console.log(this.state.data);
  }
  

  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  editUser = (user) =>{
    console.log("đã ket noi");
    this.setState({
      userEditObject: user
    })
  }

  getNewUserData = (name, tel, Permission) =>{
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;


    var items = this.state.data;
    items.push(item);

    this.setState({
      data:items
    });
    localStorage.setItem('userData', JSON.stringify(items));
    // console.log(this.state.data);
  }

  getTextSeach = (dl) =>{
    this.setState({
      seachText:dl
    })
    // console.log("Du lieu nhan duoc la " + this.state.seachText);
  }

  doiTrangThai = () =>{
    this.setState({
      hienThiFrom: !this.state.hienThiFrom
    })
  }
  

  render() {
    // localStorage.setItem('userData', JSON.stringify(DataUser));
    // console.log(DataUser);
    var ketqua = [];
        this.state.data.forEach((item) =>{
            if(item.name.indexOf(this.state.seachText) !== -1){
                ketqua.push(item);
            }
        })
    // console.log(ketqua);

    return (
      <div>
        <Header></Header>
        <div className="searchFrom">
          <div className="container">
            <div className="row">
              <Search 
              getUserEditInfoApp = {(info)=> this.getUserEditInfoApp(info)}
              userEditObject = {this.state.userEditObject}
              checkConnectProps = {(dl)=> this.getTextSeach(dl)}
              ketNoi={() => this.doiTrangThai()} hienThiFrom={this.state.hienThiFrom}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus = {()=> this.changeEditUserStatus()}
              ></Search>
              <TableData
              deleteUser = {(idUser)=> this.deleteUser(idUser)}

              changeEditUserStatus = {()=> this.changeEditUserStatus()}
              editFun = {(user)=>this.editUser(user)}
              dataUserProps={ketqua}></TableData>
              <AddUser 
              add = {(name, tel, Permission)=> this.getNewUserData(name, tel, Permission)}
              hienThiFrom={this.state.hienThiFrom}></AddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
