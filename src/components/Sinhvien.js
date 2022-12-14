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
              <p>Ch???nh s???a th??ng tin sinh vi??n</p>
              <p>Mssv:</p>
              <p className="input is-medium">{ this.props.mssv }</p>
              <p>H??? t??n:</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="H??? t??n"
                value={this.state.updatedsinhvienname}
                onChange={this.onAddSinhvienNameChange}
              />
              <p>Ng??y sinh:</p>
              <input 
                className="input is-medium"
                type="text" 
                placeholder="Ng??y sinh"
                value={this.state.updatedsinhviendate}
                onChange={this.onAddSinhvienDateChange}
              />
              <p>Ph??i:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Ph??i"
                value={this.state.updatedsinhviensex}
                onChange={this.onAddSinhvienSexChange}
              />
              <p>D??n t???c:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="D??n t???c"
                value={this.state.updatedsinhvienethnic}
                onChange={this.onAddSinhvienEthnicChange}
              />
              <p>?????a ch???:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="?????a ch???"
                value={this.state.updatedsinhvienaddress}
                onChange={this.onAddSinhvienAddressChange}
              />
              <p>S??? ??i???n tho???i:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="S??? ??i???n tho???i"
                value={this.state.updatedsinhvienphone}
                onChange={this.onAddSinhvienPhoneChange}
              />
              <p>Ng??nh h???c:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="Ng??nh h???c"
                value={this.state.updatedsinhvienmajors}
                onChange={this.onAddSinhvienMajorsChange}
              />
              <p>L???p h???c:</p>
              <input
                className="input is-medium"
                type="text" 
                placeholder="L???p h???c"
                value={this.state.updatedsinhviengroup}
                onChange={this.onAddSinhvienGroupChange}
              />
              <p>
              <button type="submit" 
                className="button is-info is-small"
                onClick={ this.handleEditSave }
              >L??u l???i</button>
              </p>
            </div>
          : <div>
              <p className="sinhvien-title">Mssv: { this.props.mssv }</p>
              <p className="sinhvien-title">H??? t??n: { this.props.name }</p>
              <p className="sinhvien-title">Ng??y sinh: { this.props.date }</p>
              <p className="sinhvien-title">Ph??i: { this.props.sex }</p>
              <p className="sinhvien-title">D??n t???c: { this.props.ethnic}</p>
              <p className="sinhvien-title">?????a ch???: { this.props.address }</p>
              <p className="sinhvien-title">S??? ??i???n tho???i: { this.props.phone}</p>
              <p className="sinhvien-title">Ng??nh h???c: { this.props.majors}</p>
              <p className="sinhvien-title">L???p h???c: { this.props.group}</p>
            </div>
        }
      </div>
    )
  }
}
