import React, { Component, Fragment }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AdminSinhvien extends Component {

  state = {
    isEditMode: false,
    updatedsinhvienname: this.props.name,
    updatedsinhviendate: this.props.date,
    updatedsinhviensex: this.props.sex,
    updatedsinhvienaddress: this.props.address,
    updatedsinhvienphone: this.props.phone,
    updatedsinhvienmajors: this.props.majors,
    updatedsinhviengroup: this.props.group,
    updatedsinhvienethnic: this.props.ethnic
  }

  handleSinhvienEdit = event => {
    event.preventDefault();
    this.setState({ isEditMode: true });
  }

  handleEditSave = event => {
    event.preventDefault();
    this.setState({ isEditMode: false });
    this.props.handleUpdateSinhvien(this.props.mssv, this.state.updatedsinhvienname, 
      this.state.updatedsinhviendate, 
      this.state.updatedsinhviensex, this.state.updatedsinhvienaddress, 
      this.state.updatedsinhvienphone, this.state.updatedsinhvienmajors,
      this.state.updatedsinhviengroup,this.state.updatedsinhvienethnic);
  }

  onAddSinhvienNameChange = event => this.setState({ "updatedsinhvienname": event.target.value });
  onAddSinhvienDateChange = event => this.setState({ "updatedsinhviendate": event.target.value });
  onAddSinhvienSexChange = event => this.setState({ "updatedsinhviensex": event.target.value });
  onAddSinhvienAddressChange = event => this.setState({ "updatedsinhvienaddress": event.target.value });
  onAddSinhvienPhoneChange = event => this.setState({ "updatedsinhvienphone": event.target.value });
  onAddSinhvienMajorsChange = event => this.setState({ "updatedsinhvienmajors": event.target.value });
  onAddSinhvienGroupChange = event => this.setState({ "updatedsinhviengroup": event.target.value });
  onAddSinhvienEthnicChange = event => this.setState({ "updatedsinhvienethnic": event.target.value });
  

  render() {
    return (
      <div className="tile is-child box notification is-success">
        {
          this.props.isAdmin && 
          <Fragment>
            <a href="/" onClick={this.handleSinhvienEdit} className="sinhvien-edit-icon">
              <FontAwesomeIcon icon="edit" />
            </a>
            <button onClick={event => this.props.handleDeleteSinhvien(this.props.mssv, event)} className="delete"></button>
          </Fragment>
        }
        {
          this.state.isEditMode 
          ? <div>
              <p>Chỉnh sửa thông tin sinh viên</p>
              <p>Mssv:</p>
              <p className="input is-medium">{ this.props.mssv }</p>
              <p>Họ tên:</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Họ tên"
                value={this.state.updatedsinhvienname}
                onChange={this.onAddSinhvienNameChange}
              />
              <p>Ngày sinh:</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Ngày sinh"
                value={this.state.updatedsinhviendate}
                onChange={this.onAddSinhvienDateChange}
              />
              <p>Phái:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Phái"
                value={this.state.updatedsinhviensex}
                onChange={this.onAddSinhvienSexChange}
              />
              <p>Dân tộc:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Dân tộc"
                value={this.state.updatedsinhvienethnic}
                onChange={this.onAddSinhvienEthnicChange}
              />
              <p>Địa chỉ:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Địa chỉ"
                value={this.state.updatedsinhvienaddress}
                onChange={this.onAddSinhvienAddressChange}
              />
              <p>Số điện thoại:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Số điện thoại"
                value={this.state.updatedsinhvienphone}
                onChange={this.onAddSinhvienPhoneChange}
              />
              <p>Ngành học:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Ngành học"
                value={this.state.updatedsinhvienmajors}
                onChange={this.onAddSinhvienMajorsChange}
              />
              <p>Lớp học:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Lớp học"
                value={this.state.updatedsinhviengroup}
                onChange={this.onAddSinhvienGroupChange}
              />
              <p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >Lưu lại</button>
              </p>
            </div>
          : <div>
              <p className="sinhvien-title">Mssv: { this.props.mssv }</p>
              <p className="sinhvien-title">Họ tên: { this.props.name }</p>
              <p className="sinhvien-title">Ngày sinh: { this.props.date }</p>
              <p className="sinhvien-title">Phái: { this.props.sex }</p>
              <p className="sinhvien-title">Dân tộc: { this.props.ethnic}</p>
              <p className="sinhvien-title">Địa chỉ: { this.props.address }</p>
              <p className="sinhvien-title">Số điện thoại: { this.props.phone}</p>
              <p className="sinhvien-title">Ngành học: { this.props.majors}</p>
              <p className="sinhvien-title">Lớp học: { this.props.group}</p>
            </div>
        }
      </div>
    )
  }
}
