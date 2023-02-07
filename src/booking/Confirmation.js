import React from "react";

function Confirmation() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div className="col-lg-3"></div>
        <div class="col-lg-6">
          <div class="card mb-4 py-3 border-bottom-warning border-left-warning">
            <div class="card-body">.border-bottom-warning</div>
            <div className="col-lg-6">
              <button type="button" class="btn btn-warning">
                Send Email Confirmation
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default Confirmation;
