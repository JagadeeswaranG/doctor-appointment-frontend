import React from "react";

function Appointment() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        {/* <span class="border border-2 border-warning mb-5"> */}
        <div className="col-lg-8 border border-2 border-warning mb-5">
          <h3 className="sub-head text-center">Book Appointment</h3>
          <div className="row">
            <h5 className="sub-head text-left mt-2 mb-2">Patient Details</h5>
            <div className="col-lg-12">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Patient Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Patient Name"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@gmail.com"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Age <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Location <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Mobile No. <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>

            <h5 className="sub-head text-left mt-2 mb-2">
              Appointment Details
            </h5>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  Department/Speciality{" "}
                </label>
                <span style={{ color: "red" }}>*</span>
                <select
                  name="solution.medium"
                  // onChange={formik.handleChange}
                  // value={formik.values.solution.medium}
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option>Choose...</option>
                  <option>Dental</option>
                  <option>ENT</option>
                  <option>GeneralMedicine</option>
                  <option>Eye</option>
                  <option>Ortho</option>
                  <option>Paediatrics</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Visiting As </label>
                <span style={{ color: "red" }}>*</span>
                <select
                  name="solution.medium"
                  // onChange={formik.handleChange}
                  // value={formik.values.solution.medium}
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option>Choose...</option>
                  <option>New Patient</option>
                  <option>Old Patient</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Preferred Date <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
          </div>
          <div className="row text-center m-2">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
              <button type="button" class="btn btn-warning">
                Submit
              </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        {/* </span> */}
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default Appointment;
