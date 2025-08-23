import SideBar from '../Components/SideBar';

const FleetManagement = () => {
  return (
    <>
      <SideBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          width: '100%', 
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:"center",
            fontSize: '0.9rem',
            width:"300px",
            height:"467px",
            padding: '20px',
          }}
        >
          <h5 style={{ fontWeight: 600 }}>Fleet Management</h5>
          <p style={{ textAlign: 'center' }}>
            Monitor fleets of moving assets with automated task management, 
            route optimization, and real-time tracking for efficient operations.
          </p>
          <p style={{ textAlign: 'center' }}>
            This feature is available with the Blynk Enterprise plan.
          </p>
          <button 
          type="button"
          className="btn btn-success"
          style={{
            width: '140px',
            height: '27px',
            fontSize: '0.84rem',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            padding: '5px 10px',
          }}
        >
         <i class="bi bi-chat me-2"></i> Contact Sales
        </button>
        </div>
      </div>
    </>
  );
};

export default FleetManagement;
