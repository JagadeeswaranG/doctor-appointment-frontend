import React from "react";
import { useParams } from "react-router-dom";
import { sendMail } from "../api/Appointment";

// Confirmation Email Send
function Confirmation() {
  const params = useParams();

  let handleMail = async () => {
    try {
      let mail = await sendMail(params.pId, params.uId);
      alert("Email confirmation has been sent, Thank you !");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div className="col-lg-3"></div>
        <div class="col-lg-6">
          <div class="card mb-4 py-3 border-bottom-warning border-left-warning">
            <div class="card-body">{`Your Appointment is Confirmed. Your AppointmentID : ${params.pId}`}</div>
            <div className="col-lg-6">
              <button onClick={handleMail} type="button" class="btn btn-warning">
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
