import React from 'react';

const Maintenance = () => (
  <div className="app autolikes-themes flex-row align-items-center">
    <div className="container">
      <div className="text-center">
        <i
          className="display-3 icon-wrench"
          style={{ borderRadius: '100px', border: '1px solid', padding: '30px', margin: '20px auto 50px' }}
        />
        <h4 className="pt-3 text-uppercase">{"Sorry, we're down for maintenance."}</h4>
        <p className="text-muted">
          {"We'll be back shortly."}
        </p>
      </div>
    </div>
  </div>
);

export default Maintenance;
