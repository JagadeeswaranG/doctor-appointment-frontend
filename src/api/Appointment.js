import axios from "axios";
import { config } from "../connection/Config";

// User Registration
export async function apply(uId, cred) {
  return await axios.post(`${config.api}/api/patients/apply/${uId}`, cred, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}

// Send Mail
export async function sendMail(pId, uId)  {
    return axios.get(`${config.api}/api/patients/${pId}/${uId}`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }