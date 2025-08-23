import SideBar from '../Components/SideBar';

const Automations = () => {
  return (
    <>
      <SideBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',  // Align content left
          textAlign: 'center',
          padding: '20px',
          width: '700px',
          margin: '0 auto',
        }}
      >
        <h5 className="fs-6 fw-semibold"style={{width: '100%', textAlign: 'left' }}>Create automations</h5>
        <p className="fs-7" style={{ width: '100%', textAlign: 'left' }}>
          Automations let you set up actions that start when a certain trigger happens
        </p>
        <p className="fs-7" style={{width: '100%', textAlign: 'left' }}>Choose Condition</p>

        <div className="row row-cols-2 g-4" style={{ width: '100%' }}>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-start">
                <h6 className="card-title fs-6 fw-semibold">Schedule</h6>
                <p className="card-text fs-7">
                  Automation will start at a specific time of day
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body text-start">
                <h6 className="card-title fs-6 fw-semibold">Device State</h6>
                <p className="card-text fs-7">
                  Trigger automation by a certain state of the device
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body text-start">
                <h6 className="card-title fs-6 fw-semibold">Sunset/Sunrise</h6>
                <p className="card-text fs-7">
                  Automation will start based on the sun
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body text-start">
                <h6 className="card-title fs-6 fw-semibold">Event</h6>
                <p className="card-text fs-7">
                  Trigger automation when a certain event logged on selected devices
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body text-start">
                <h6 className="card-title fs-6 fw-semibold">Scene</h6>
                <p className="card-text fs-7">
                  Trigger automation manually
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Automations;
