const Webhookst = () => {
  const handleCreateWebhook = () => {
    console.log("Create New Webhook clicked");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "100vh", padding: "20px" }}
    >
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h6 className="fw-semibold mb-3">Webhooks</h6>
        <p className="mb-4" style={{ fontSize: "0.88rem" }}>
          Webhooks let you connect Blynk events to other services on the Internet. 
          Start by creating your first one. Full documentation can be found here.
        </p>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-success btn-sm d-flex align-items-center justify-content-center"
            style={{ fontSize: "0.72rem", width: "140px", height: "36px" }}
            onClick={handleCreateWebhook}
          >
            <i className="bi bi-plus me-1"></i> Create Webhook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Webhookst;
