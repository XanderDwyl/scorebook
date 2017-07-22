import React from 'react';
import defaultImage from '../../../assets/img/default-image.png';

const klasSetting = 'progress progress-bar progress-sm progress-gray progress-bar-striped progress-bar-animated';

const defaultDetails = () => (
  <div className="animated fadeIn col-sm-12 mt-1">
    <div className="card">
      <div className="card-block">
        <div className="row">
          <div className="col-sm-12 col-lg-9">
            <img
              src={defaultImage}
              className="img-avatar settings-image"
              alt="default profile"
            />
            <div className="settings-username">
              <span
                className={klasSetting}
                style={{
                  marginLeft: '18px',
                  display: 'inline-block',
                  width: '160px',
                }}
              />
            </div>
            <div className="settings-description">
              <span
                className={klasSetting}
                style={{
                  backgroundColor: '#24b1e6',
                  marginLeft: '8px',
                  maxWidth: '50%',
                }}
              />
            </div>
            <div className="settings-description">
              <span
                className={klasSetting}
                style={{
                  backgroundColor: '#50bfea',
                  marginLeft: '8px',
                  maxWidth: '50%',
                }}
              />
            </div>
            <div className="settings-description">
              <span
                className={klasSetting}
                style={{
                  backgroundColor: '#70c8ea',
                  marginLeft: '8px',
                  maxWidth: '50%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default defaultDetails;
