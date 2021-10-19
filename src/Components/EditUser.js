import React, { Component } from 'react'

export default class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission,

        }
        
    }
    
    saveButton = () =>{
        var info = {}
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;

        this.props.changeEditUserStatus() // an form
        this.props.getUserEditInfo(info)
    }

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                <form>
                <div className="card text-white bg-info mb-3 mt-3">
                    <div className="card-header text-center">Thêm mới Use vào hệ thống</div>
                    <div className="card-body">
                        <div className="form-group">
                        <input 
                        onChange={(event)=> this.isChange(event)} 
                        defaultValue={this.props.userEditObject.name} type="text" name="name"  className="form-control"  placeholder="Tên Use" />
                        </div>
                        <div className="form-group">
                        <input 
                        onChange={(event)=> this.isChange(event)} 
                        defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control"  placeholder="Điện Thoại" />
                        </div>
                        <div className="form-group">
                        <select 
                        onChange={(event)=> this.isChange(event)} 
                        defaultValue={this.props.userEditObject.Permission} className="custom-select custom-select-lg mb-3" name="Permission" >
                            <option selected>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <input type="button" className="btn btn-block btn-danger" value="Lưu"
                            onClick = {()=> this.saveButton()}
                        />
                        </div>
                    </div>
                    </div>
                </form>
                </div>
                </div>
        )
    }
}
