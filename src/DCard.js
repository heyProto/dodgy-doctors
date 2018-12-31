import React, { Component } from 'react';
import { ReactComponent as Doc } from './Doc.svg'
import './App.scss';

class DCard extends Component {

  constructor() {
    super();

    this.state = {
      dataJSON: {
        'name': 'Dr. Harpal Singh',
        'regNo': '44129',
        'regDate': '12.01.1998',
        'qualification': 'M.B.B.S 2005, M.D 2009',
        'city': 'Sri Ganganagar',
        'state': 'Rajasthan'
      }
    }

  }

  render() {
    let data = this.state.dataJSON
    let count = this.props.count
    return (
        <div className="card">
          <div className="content">
            <div className="header">
              <div className="tag">
              Matches found: {count}
              </div>
            </div>
            <div className="drname">
              <div className="drname-text">
                {data.name}
              </div>
            </div>
            <div className="reg">
              <div className="reg-no">
                <div className="label">
                  Registration no.
                </div>
                {data.regNo}
              </div>
              <div className="reg-date">
                <div className="label">
                  Registration date
                </div>
                {data.regDate}
              </div>
            </div>
            <div className="qual">
              <div className="label">Qualification</div>
              {data.qualification}
            </div>
            <div className="location">
              <div className="label">
                City, State
              </div>
              {data.city}, {data.state}
            </div>
          </div>
        </div>
    );
  }
}

export default DCard;
