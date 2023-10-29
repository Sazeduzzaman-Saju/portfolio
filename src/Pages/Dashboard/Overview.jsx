import React from "react";

const Overview = () => {
  return (
    <div className="container relative">
      <div className="row">
        <div className="col-md-12 text-center wow fadeInUp">
          <h2>Dashboard</h2>
          <div className="space-border" />
        </div>
        <div className="col-md-12 wow fadeInUp">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Total Project</div>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Total Blogs</div>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Total Contact</div>
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
