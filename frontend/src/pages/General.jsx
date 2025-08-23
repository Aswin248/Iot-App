import { useState } from "react";

const General = () => {

  return (
    <>
    <h5 className="fw-semibold m-1">General</h5>
    <h6 className="m-2">Organization Name</h6>
    <input type="text" placeholder="My Organization Kumar" style={{width:"500px"}}></input>
    <h6 className="m-2">Description (optional)</h6>
    <input className="m-2" type="text" placeholder="Add Some Description" style={{width:"500px",height:"220px"}}></input>
    <p className="m-2">Phone Number</p>
    <input className="m-2" type="text" placeholder="+1678987897978" style={{width:"470px"}}></input>
    <p className="m-2">By entering my phone number, I consent to receive text updates from Blynk.Console regarding my devices. Data rates may apply. See our Privacy Policy and Terms and Conditions.</p>
    <p className="m-2">Timezone</p>
    <input className="m-2" type="text" placeholder=""></input>
    </>
  );
};

export default General;
