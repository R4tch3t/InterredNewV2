import React from "react";

const Server = () => {
  return (

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="col text-center">
              <h5 className="s2">Discover</h5>
              <h2>Server Locations</h2>
              <p className="lead">
                Global reach, local performance: accelerate your website's speed
                and user experience with strategic server locations worldwide.
              </p>
              <div className="spacer-20"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 wow fadeInUp">
            <div className="p-sm-30 pb-sm-0 mb-sm-0">
              <div className="de-map-hotspot">
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "39%", left: "20%" }}
                >
                  <span>United&nbsp;States</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "76%", left: "87%" }}
                >
                  <span>Australia</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "68%", left: "80%" }}
                >
                  <span>Indonesia</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "23%", left: "18%" }}
                >
                  <span>Canada</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "68%", left: "33%" }}
                >
                  <span>Brazil</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "45%", left: "75%" }}
                >
                  <span>China</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "36%", left: "48%" }}
                >
                  <span>France</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "23%", left: "51%" }}
                >
                  <span>Sweden</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <div
                  className="de-spot wow fadeIn"
                  style={{ top: "78%", left: "53%" }}
                >
                  <span>South&nbsp;Africa</span>
                  <div className="de-circle-1"></div>
                  <div className="de-circle-2"></div>
                </div>
                <img src="../images/misc/map.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-double"></div>
      </div>
  );
};

export default Server;
