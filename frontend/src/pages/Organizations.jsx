import SideBar from '../Components/SideBar';

const Organizations = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',     
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          width: '280px', 
          height: '320px', 
          fontSize: '0.9rem',
          textAlign: 'center',
        }}
      >
        <h4 className='fw-semibold'>Organizations</h4>
        <p>
          Manage your clients, regional offices and partners using a
          multi-level organization structure with editable roles and access
          permissions.
        </p>
      </div>
    </div>
  );
};

export default Organizations;
