import React from "react";

function Resetpassword() {
  return (
    <main>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
              <div class="card-header" style={{ backgroundColor: "orange" }}>
                <h3 class="text-center font-weight-light my-4">
                  Reset Password
                </h3>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Password"
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputPassword"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <label for="inputPassword">Confirm Password</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a class="btn btn-primary" >
                      Submit
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resetpassword;