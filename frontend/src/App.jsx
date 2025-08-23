import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Started from "./pages/Started";
import DashBoards from "./pages/DashBoards";
import DeveloperZone from "./pages/DeveloperZone";
import Devices from "./pages/Devices";
import Automations from "./pages/Automations";
import Users from "./pages/Users";
import Organizations from "./pages/Organizations";
import Locations from "./pages/Locations";
import FleetManagement from "./pages/FleetManagement";
import InAppMessaging from "./pages/InAppMessaging";
import Login from "./pages/Login";
import AuthLayout from "./pages/AuthLayout";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import MyTemplate from "./pages/MyTemplate";
import BluePrints from "./pages/BluePrints";
import BlynkAir from "./pages/BlynkAir";
import StaticTokens from "./pages/StaticTokens";
import RuleEngine from "./pages/RuleEngine";
import QAuth from "./pages/QAuth";
import Webhooks from "./pages/Webhooks";
import Integrations from "./pages/Integrations";
import General from "./pages/General";
import Usersn from "./pages/Usersn";
import RolesAndPermission from "./pages/RolesAndPermission";
import Billing from "./pages/Billing";
import Tags from "./pages/Tags";
import Webhookn from "./pages/Webhookn";
import UserActionLog from "./pages/UserActionLog";
import DeviceN from "./pages/DeviceNew";
import Editing from "./pages/Editing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h2>Welcome to the Home Page!</h2>} />
          <Route path="started" element={<Started />} />
          <Route path="dashboards" element={<DashBoards />} />
          <Route path="Devices" element={<Devices />} />
          <Route path="Automations" element={<Automations />} />
          <Route path="Users" element={<Users />} />
          <Route path="Organizations" element={<Organizations />} />
          <Route path="Locations" element={<Locations />} />
          <Route path="FleetManagement" element={<FleetManagement />} />
          <Route path="DeviceNew" element={<DeviceN />} />
          <Route path="InAppMessaging" element={<InAppMessaging />} />
          <Route path="Editing" element={<Editing />} />
          
          <Route path="settings" element={<Settings />}>
      <Route path="General" element={<General />} />
      <Route path="Usersn" element={<Usersn />} />
      <Route path="RolesAndPermission" element={<RolesAndPermission />} />
      <Route path="Billing" element={<Billing />} />
      <Route path="Tags" element={<Tags />} />
      <Route path="Webhookn" element={<Webhookn />} />
      <Route path="UserActionLog" element={<UserActionLog />} />
    </Route>


          <Route path="DeveloperZone" element={<DeveloperZone />}>
            <Route path="MyTemplate" element={<MyTemplate />} />
            <Route path="BluePrints" element={<BluePrints />} />
            <Route path="BlynkAir" element={<BlynkAir />} />
            <Route path="StaticTokens" element={<StaticTokens />} />
            <Route path="RuleEngine" element={<RuleEngine />} />
            <Route path="QAuth" element={<QAuth />} />
            <Route path="Webhooks" element={<Webhooks />} />
            <Route path="Integrations" element={<Integrations />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
