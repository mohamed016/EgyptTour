import React from "react";
import imgSales from "../assets/sales.jpg";
function SalesShow() {
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-12">
          <div>
            <img src={imgSales} alt="img-sales" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesShow;
