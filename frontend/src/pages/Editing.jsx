import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const chartData = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 456 },
  { name: "Mar", uv: 200, pv: 139 },
  { name: "Apr", uv: 278, pv: 390 },
  { name: "May", uv: 189, pv: 480 },
];

const Widget = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "WIDGET",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: "grab" }}>{children}</div>;
};

// Sidebar Preview Component
const WidgetPreview = ({ type }) => {
  switch (type) {
    case "Line Chart":
      return (
        <ResponsiveContainer width="100%" height={50}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="uv" stroke="#28a745" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      );
    case "Bar Chart":
      return (
        <ResponsiveContainer width="100%" height={50}>
          <BarChart data={chartData}>
            <Bar dataKey="pv" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      );
    case "Switch":
      return (
        <div className="form-check form-switch d-flex justify-content-center">
          <input className="form-check-input" type="checkbox" />
        </div>
      );
    case "Slider":
      return <input type="range" className="form-range" min={0} max={100} />;
    default:
      return <div>Unknown</div>;
  }
};

const MainCanvas = () => {
  const [widgets, setWidgets] = useState([]);
  const userId = "66d4a49fbd4f95f7e97a56c3";

  useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/dashboard/${userId}`);
      setWidgets(res.data.widgets || []);
    } catch (err) {
      console.error(err);
    }
  };
  fetchDashboard();
}, []);


  const [{ isOver }, drop] = useDrop(() => ({
    accept: "WIDGET",
    drop: (item) => setWidgets((prev) => [...prev, { type: item.type, id: Date.now() }]),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));

  const handleApply = async () => {
  try {
    await axios.post(
      `http://localhost:5000/api/dashboard/${userId}`,
      { widgets }
    );
    alert("Dashboard saved!");
  } catch (err) {
    console.error("Error saving dashboard:", err);
  }
};


  const renderWidget = (widget) => {
    switch (widget.type) {
      case "Line Chart": return <LineChartWidget />;
      case "Bar Chart": return <BarChartWidget />;
      case "Switch": return <SwitchWidget />;
      case "Slider": return <SliderWidget />;
      default: return <div>Unknown Widget</div>;
    }
  };

  return (
    <div ref={drop} style={{ flex: 1, minHeight: "80vh", marginLeft: "20px", padding: "20px", backgroundColor: isOver ? "#e0f7fa" : "#f4f5f8", borderRadius: "8px" }}>
      <div className="d-flex justify-content-between align-items-center m-2">
        <h5>New Dashboard</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={handleApply}>Apply Changes</button>
          <button className="btn btn-light" onClick={() => setWidgets([])}>Clear</button>
        </div>
      </div>

      {widgets.map((w) => (
        <div key={w.id} style={{ marginBottom: "15px", backgroundColor: "white", padding: "15px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          {renderWidget(w)}
        </div>
      ))}
    </div>
  );
};

// Individual Widget Components
const LineChartWidget = () => (
  <div style={{ width: "100%", height: 250 }}>
    <ResponsiveContainer>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#28a745" strokeWidth={2} />
        <Line type="monotone" dataKey="pv" stroke="#007bff" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const BarChartWidget = () => (
  <div style={{ width: "100%", height: 250 }}>
    <ResponsiveContainer>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="#28a745" />
        <Bar dataKey="pv" fill="#007bff" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const SwitchWidget = () => (
  <div>
    <label className="form-check-label mb-2 d-block">Toggle Switch</label>
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" />
    </div>
  </div>
);

const SliderWidget = () => (
  <div>
    <label className="form-label mb-2">Slider</label>
    <input type="range" className="form-range" min={0} max={100} />
  </div>
);

const EditingDashboard = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="d-flex p-4">
      {/* Sidebar */}
      <div style={{ width: "250px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <Widget type="Line Chart">
          <div className="btn btn-outline-primary w-100 p-2"><WidgetPreview type="Line Chart" /></div>
        </Widget>
        <Widget type="Bar Chart">
          <div className="btn btn-outline-success w-100 p-2"><WidgetPreview type="Bar Chart" /></div>
        </Widget>
        <Widget type="Switch">
          <div className="btn btn-outline-warning w-100 p-2 d-flex justify-content-center"><WidgetPreview type="Switch" /></div>
        </Widget>
        <Widget type="Slider">
          <div className="btn btn-outline-dark w-100 p-2"><WidgetPreview type="Slider" /></div>
        </Widget>
      </div>

      {/* Canvas */}
      <MainCanvas />
    </div>
  </DndProvider>
);

export default EditingDashboard;
