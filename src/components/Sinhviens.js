import React, { Component, Fragment } from 'react';
import Sinhvien from './Sinhvien';
import axios from "axios";
const config = require('../config.json');

export default class Sinhviens extends Component {

  state = {
    newsinhvien: null,
    sinhviens: []
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

  componentDidMount = () => {
    this.fetchSinhviens();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Thông tin sinh viên</h1>
            <p className="subtitle is-5">Danh sách sinh viên:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                    this.state.sinhviens && this.state.sinhviens.length > 0
                    ? this.state.sinhviens.map(sinhvien => 
                    <Sinhvien 
                      mssv={sinhvien.mssv}
                      name={sinhvien.sinhvienname}
                      date={sinhvien.sinhviendate}
                      sex={sinhvien.sinhviensex}
                      ethnic={sinhvien.sinhvienethnic}
                      address={sinhvien.sinhvienaddress}
                      phone={sinhvien.sinhvienphone}
                      majors={sinhvien.sinhvienmajors}
                      group={sinhvien.sinhviengroup}
                      key={sinhvien.mssv}
                    />)
                    : <div className="tile notification is-warning">Chưa có danh sách sinh viên</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
