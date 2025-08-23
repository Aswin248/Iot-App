const InAppMessaging = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Center box horizontally
        alignItems: 'center',     
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent:'center', 
          gap: '12px',
          fontSize: '0.85rem',
          width: '310px',    
          height: '350px',   
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: '#fff',
        }}
      >
        <h4 className="fw-semibold">In-App Messaging</h4>
        <p>
          Engage users with in-app messaging and push notifications, enabling
          real-time communication, seamless updates, and built-in marketing
          opportunities—all within your app.
        </p>
        <p>This feature is available with the Blynk Enterprise plan.</p>
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
  );
};

export default InAppMessaging;
