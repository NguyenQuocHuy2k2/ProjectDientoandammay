import React, { Component, Fragment } from 'react';
import Sinhvien from './Sinhvien';
import axios from "axios";
const config = require('../config.json');

export default class AdminSinhVien extends Component {

  state = {
    newsinhvien: { 
      "sinhvienname": "", 
      "sinhviendate": "",
      "sinhviensex": "",
      "sinhvienaddress": "",
      "sinhvienphone": "",
      "sinhvienmajors": "",
      "sinhviengroup": "",
      "sinhvienethnic": "",
      "mssv": ""
    },
    sinhviens: []
  }
// add call to AWS API Gateway add
  handleAddSinhvien = async (mssv, event) => {
    event.preventDefault();
    
    try {
      const params = {
        "mssv": mssv,
        "sinhvienname": this.state.newsinhvien.sinhvienname,
        "sinhviendate": this.state.newsinhvien.sinhviendate,
        "sinhviensex": this.state.newsinhvien.sinhviensex,
        "sinhvienaddress": this.state.newsinhvien.sinhvienaddress,
        "sinhvienphone": this.state.newsinhvien.sinhvienphone,
        "sinhvienmajors": this.state.newsinhvien.sinhvienmajors,
        "sinhviengroup": this.state.newsinhvien.sinhviengroup,
        "sinhvienethnic": this.state.newsinhvien.sinhvienethnic
      };
      await axios.post(`${config.api.invokeUrl}/sinhvien/${mssv}`, params);
      this.setState({ sinhviens: [...this.state.sinhviens, this.state.newsinhvien] })
      this.setState({ newsinhvien: { 
        "mssv": "",
        "sinhvienname": "",
        "sinhviendate": "",
        "sinhviensex": "" ,
        "sinhvienaddress": "",
        "sinhvienphone": "",
        "sinhvienmajors":"",
        "sinhviengroup": "", 
        "sinhvienethnic":""
        
      }});
    } catch (err) {
      console.log(`An error has occurred: ${err}`)
    }

    
  }

  handleUpdateSinhvien = async (mssv, name, date, sex, address, phone, majors, group, ethnic) => {
    // add call to AWS API Gateway update

    try {
      const params = {
        "mssv": mssv,
        "sinhvienname": name,
        "sinhviendate": date,
        "sinhviensex": sex,
        "sinhvienaddress": address,
        "sinhvienphone": phone,
        "sinhvienmajors": majors,
        "sinhviengroup": group,
        "sinhvienethnic": ethnic
      };
      await axios.patch(`${config.api.invokeUrl}/sinhvien/${mssv}`, params);

      const sinhvienToUpdate = [...this.state.sinhviens].find(sinhvien => sinhvien.mssv === mssv);
      const updatedSinhviens = [...this.state.sinhviens].filter(sinhvien => sinhvien.mssv !== mssv);
      sinhvienToUpdate.sinhvienname = name;
      sinhvienToUpdate.sinhviendate = date;
      sinhvienToUpdate.sinhviensex = sex;
      sinhvienToUpdate.sinhvienaddress = address;
      sinhvienToUpdate.sinhvienphone = phone;
      sinhvienToUpdate.sinhvienmajors = majors;
      sinhvienToUpdate.sinhviengroup = group;
      sinhvienToUpdate.sinhvienethnic = ethnic;
      updatedSinhviens.push(sinhvienToUpdate);
      this.setState({sinhviens: updatedSinhviens});
    } catch (err) {
      console.log(`Error updating products: ${err}`);
    }
  }

  handleDeleteSinhvien = async(mssv, event) => {
    event.preventDefault();
    // add call to AWS API Gateway delete

    try {
      await axios.delete(`${config.api.invokeUrl}/sinhvien/${mssv}`);

      const updatedSinhviens = [...this.state.sinhviens].filter(sinhvien => sinhvien.mssv !== mssv);
      this.setState({sinhviens: updatedSinhviens});
    } catch (err) {
      console.log(`An error has occurred: ${err}`)
    }
  }

  fetchSinhviens = async () => {
    try {
      const res = await axios.get(`${config.api.invokeUrl}/sinhvien`);
      const sinhvienss = res.data;
      this.setState({ sinhviens: sinhvienss });
    } catch (error) {
      console.log(`An error has occrurred: ${error}`);
    }
  }

  onAddSinhvienNameChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhvienname": event.target.value} });
  onAddSinhvienDateChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhviendate": event.target.value} });
  onAddSinhvienSexChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhviensex": event.target.value} });
  onAddSinhvienAddressChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhvienaddress": event.target.value} });
  onAddSinhvienPhoneChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhvienphone": event.target.value}});
  onAddSinhvienMajorsChange = event => this.setState({ newsinhvien: {...this.state.newsinhvien, "sinhvienmajors": event.target.value}});
  onAddSinhvienGroupChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhviengroup": event.target.value} });
  onAddSinhvienEthnicChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "sinhvienethnic": event.target.value} });
  onAddMssvChange = event => this.setState({ newsinhvien: { ...this.state.newsinhvien, "mssv": event.target.value } });

  componentDidMount = () => {
    this.fetchSinhviens();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Quản lý thông tin sinh viên</h1>
            <p className="subtitle is-5">Quản lý sinh viên:</p>
            <br />
            <div className="columns">
              <div className="column is-one-third">
                <form onSubmit={event => this.handleAddSinhvien(this.state.newsinhvien.mssv, event)}>
                  <div className="field has-addons">
                    <div className="control">
                    
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Mssv"
                        value={this.state.newsinhvien.mssv}
                        onChange={this.onAddMssvChange}
                      />
                      
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Dân tộc"
                        value={this.state.newsinhvien.sinhvienethnic}
                        onChange={this.onAddSinhvienEthnicChange}
                      />
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Địa chỉ"
                        value={this.state.newsinhvien.sinhvienaddress}
                        onChange={this.onAddSinhvienAddressChange}
                      />
                      
                      <button type="submit" className="button is-primary is-medium">
                        Thêm sinh viên
                      </button>
                      
                    </div>
                    <div className="control">
                        <input 
                            className="input is-medium"
                            type="text" 
                            placeholder="Họ tên"
                           value={this.state.newsinhvien.sinhvienname}
                            onChange={this.onAddSinhvienNameChange}
                        />
                        <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Số điện thoại"
                        value={this.state.newsinhvien.sinhvienphone}
                        onChange={this.onAddSinhvienPhoneChange}
                      />
                    </div>
                    <div className="control">
                    <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Phái"
                        value={this.state.newsinhvien.sinhviensex}
                        onChange={this.onAddSinhvienSexChange}
                      />
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Ngành học"
                        value={this.state.newsinhvien.sinhvienmajors}
                        onChange={this.onAddSinhvienMajorsChange}
                      />
                    </div>
                    <div className="control">
                    <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Ngày sinh"
                        value={this.state.newsinhvien.sinhviendate}
                        onChange={this.onAddSinhvienDateChange}
                      />
                      <input 
                        className="input is-medium"
                        type="text" 
                        placeholder="Lớp học"
                        value={this.state.newsinhvien.sinhviengroup}
                        onChange={this.onAddSinhvienGroupChange}
                      />
                      
                    </div>
                  </div>
                </form>
              </div>
              
            </div>
            <div className="column is-two-thirds">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.sinhviens.map((sinhvien, index) => 
                        <Sinhvien 
                          isAdmin={true}
                          handleUpdateSinhvien={this.handleUpdateSinhvien}
                          handleDeleteSinhvien={this.handleDeleteSinhvien} 
                          name={sinhvien.sinhvienname}
                          date={sinhvien.sinhviendate}
                          sex={sinhvien.sinhviensex}
                          ethnic={sinhvien.sinhvienethnic}
                          address={sinhvien.sinhvienaddress}
                          phone={sinhvien.sinhvienphone}
                          majors={sinhvien.sinhvienmajors}
                          group={sinhvien.sinhviengroup}
                          mssv={sinhvien.mssv}
                          key={sinhvien.mssv}
                        />)
                    }
                  </div>
                </div>
              </div>
          </div>
          
        </section>
      </Fragment>
    )
  }
}
