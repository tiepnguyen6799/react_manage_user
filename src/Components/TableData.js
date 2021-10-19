import React, { Component } from 'react'
import TableDataRow from './TableDataRow'

export default class TableData extends Component {

    deleteButtonClick = (idUser) =>{
        // console.log(idUser);
        this.props.deleteUser(idUser)
    }

    mappingDataUser = () =>
        this.props.dataUserProps.map((value,key) => (
            <TableDataRow 
            deleteButtonClick = {(idUser)=> this.deleteButtonClick(idUser)}

            changeEditUserStatus = {()=> this.props.changeEditUserStatus()}
            editFunClick = {(user)=>this.props.editFun(value)}
            name={value.name} 
            key={key} stt={key} 
            tel={value.tel} 
            permission={value.Permission}
            id={value.id}
            ></TableDataRow>
        ))
    

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover ">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.mappingDataUser()}
                    </tbody>
                </table>
                </div>
        )
    }
}
