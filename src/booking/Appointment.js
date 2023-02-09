import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apply } from "../api/Appointment";

// Patient appointment booking
function Appointment() {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      pname: "",
      age: "",
      location: "",
      contact: "",
      email: "",
      dept: "",
      visitingAs: "",
      preferredDate: "",
    },
    validate: (values) => {
      let error = {};
      if (!values.pname) {
        error.pname = "*Please Enter Patient Name";
      }
      if (
        values.pname &&
        (values.pname.length < 3 || values.pname.length > 15)
      ) {
        error.pname = "Patient Name must be 3 to 15 characters";
      }
      if (!values.age) {
        error.age = "*Please Enter Patient Age";
      }
      if (!values.location) {
        error.location = "*Please Enter Patient Location";
      }
      if (!values.contact) {
        error.contact = "*Patient Mobile No. Required";
      }
      if (values.contact && values.contact.toString().length !== 10) {
        error.contact = "Please enter valid phone number";
      }
      if (!values.email) {
        error.email = "*Email Id is Required";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Please Enter valid email address";
      }
      if (!values.dept) {
        error.dept = "*Select Dept for consultation/Treatment";
      }
      if (!values.visitingAs) {
        error.visitingAs = "*Required";
      }
      if (!values.preferredDate) {
        error.preferredDate = "*Choose patient preferred Date";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        let applyData = await apply(params.uId, values);
        // alert(`Your Appointment is Confirmed. Your AppointmentID : ${applyData.data.message}`);
        navigate(`/portal/confirm/${applyData.data.message}/${params.uId}`);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2"></div>
        {/* <span class="border border-2 border-warning mb-5"> */}
        <div className="col-lg-8 border border-2 border-warning mb-5">
          <h3 className="sub-head text-center">Book Appointment</h3>
          <h6 className="sub-field text-right">
            <span style={{ color: "red" }}>*</span>Mandatory fields
          </h6>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <h5 className="sub-head text-left mt-2 mb-2">Patient Details</h5>
              <div className="col-lg-12">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Patient Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="pname"
                    onChange={formik.handleChange}
                    value={formik.values.pname}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Patient Name"
                  />
                  {formik.touched.pname && formik.errors.pname ? (
                    <span style={{ color: "red" }}>{formik.errors.pname}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-12">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@gmail.com"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-3">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Age <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                  {formik.touched.age && formik.errors.age ? (
                    <span style={{ color: "red" }}>{formik.errors.age}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-3">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Location <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                  {formik.touched.location && formik.errors.location ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.location}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Mobile No. <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="contact"
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                  {formik.touched.contact && formik.errors.contact ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.contact}
                    </span>
                  ) : null}
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
                    name="dept"
                    onChange={formik.handleChange}
                    value={formik.values.dept}
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
                  {formik.touched.dept && formik.errors.dept ? (
                    <span style={{ color: "red" }}>{formik.errors.dept}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Visiting As </label>
                  <span style={{ color: "red" }}>*</span>
                  <select
                    name="visitingAs"
                    onChange={formik.handleChange}
                    value={formik.values.visitingAs}
                    class="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Choose...</option>
                    <option>New Patient</option>
                    <option>Old Patient</option>
                  </select>
                  {formik.touched.visitingAs && formik.errors.visitingAs ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.visitingAs}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Preferred Date <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    onChange={formik.handleChange}
                    value={formik.values.preferredDate}
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                  {formik.touched.preferredDate &&
                  formik.errors.preferredDate ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.preferredDate}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row text-center m-2">
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <button type="submit" class="btn btn-warning">
                  Submit
                </button>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </form>
        </div>
        {/* </span> */}
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default Appointment;
