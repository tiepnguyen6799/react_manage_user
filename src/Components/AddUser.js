import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
        
    }
    

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });

        // pakege to item
        // var item ={};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tell = this.state.tell;
        // item.Permission = this.state.Permission;
        // console.log(item);
    }

    kiemTraTrangThai = () =>{
        if(this.props.hienThiFrom === true){
            return (
                <div className="col">
                <form>
                <div className="card text-white bg-secondary mb-3 mt-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Thêm mới Use vào hệ thống</div>
                    <div className="card-body">
                        <div className="form-group">
                        <input type="text" name="name" onChange = {(event)=> this.isChange(event)} className="form-control"  placeholder="Tên Use" />
                        </div>
                        <div className="form-group">
                        <input type="text" name="tel" onChange = {(event)=> this.isChange(event)} className="form-control"  placeholder="Điện Thoại" />
                        </div>
                        <div className="form-group">
                        <select className="custom-select custom-select-lg mb-3" name="Permission" onChange = {(event)=> this.isChange(event)}>
                            <option selected>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, Permission)=>this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Thêm mới"/>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            )
        }
    }

    render() {
        // console.log(this.state);
        // console.log(this.props.hienThiFrom);
        return (
            
                <div className>

                    {/* {this.hienThiNut()} */}

                    {this.kiemTraTrangThai()}
                </div>
                

        )
    }
}
