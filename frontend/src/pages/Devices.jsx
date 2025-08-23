import SideBar from '../Components/SideBar';
import { useNavigate } from "react-router-dom";

const Devices = () => {
  const navigate = useNavigate();

const deviceCreates = () => {
  navigate("/DeviceNew");
}
  return (
    <>
      <SideBar />
      <div
        className="containerDevices"
        style={{
          display: 'flex',
          justifyContent: 'center', // Horizontal center
          alignItems: 'center',     // Vertical center
          height: '100vh',          // Full screen height
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <div
          className="boxes"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center text & button
            gap: '10px',
          }}
        >
          <h5 className='fw-semibold'>Create Your First Device</h5>
          <p style={{fontSize: '0.84rem',}}>We'll help you get your first device online</p>
          <button onClick = {deviceCreates} type="button" className="btn btn-success" 
          style={{width: '117px',
            height: '27px',
            fontSize: '0.84rem',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            padding: '5px 10px',}}>
            <i className="bi bi-plus me-2"></i> New Device
          </button>
        </div>
      </div>
    </>
  );
};

export default Devices;
