import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clientStore from "./redux/store";
import { Provider } from "react-redux";
import SignupPage from "./pages/SignupPage";
import DoctorDashboardPage from "./pages/doctorDashboard";
import TreatmentDetails from "./pages/doctorDashboard/treatments/TreatmentDetails";
import PatientManagement from "./pages/doctorDashboard/patients";
import TreatmentManagement from "./pages/doctorDashboard/treatments";
import PatientDetails from "./pages/doctorDashboard/patients/PatientDetails";
import Schedules from "./pages/doctorDashboard/schedules";
import Profile from "./pages/patientDashboard/profile/Profile";
import ReportManagement from "./pages/doctorDashboard/reports";
import PatientReportManagement from "./pages/patientDashboard/reports";
import ReportDetails from "./pages/doctorDashboard/reports/ReportDetails";
import PatientAccount from "./pages/patientDashboard/profile";
import DoctorAccount from "./pages/doctorDashboard/profile";
import PatientDashboardPage from "./pages/patientDashboard/index";
import TrackingManagement from "./pages/patientDashboard/tracking";
import TrackingDetails from "./pages/patientDashboard/tracking/TrackingDetails";
import PaymentManagement from "./pages/patientDashboard/payment";
import PaymentDetails from "./pages/patientDashboard/payment/PaymentDetails";
import PatientTreatmentManagement from "./pages/patientDashboard/treatments";
import PatientTreatmentDetails from "./pages/patientDashboard/treatments/TreatmentDetails";
import AdminPatientManagement from "./pages/adminDashboard.jsx/patients";
import AdminLabManagement from "./pages/adminDashboard.jsx/lab";
import AdminSpecimenManagement from "./pages/adminDashboard.jsx/specimen";
import SampleDetails from "./pages/adminDashboard.jsx/lab/SampleDetails";
import SpecimenDetails from "./pages/adminDashboard.jsx/specimen/SpecimenDetails";
import AdminDashboardPage from "./pages/adminDashboard.jsx";

function App() {

  return (
    <main>
    <Provider store={clientStore}>
    <BrowserRouter>
    <ToastContainer />
        <Routes>
         <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          {/* doctor routes */}
          <Route exact path="/dashboard/doctor/home" element={<DoctorDashboardPage />} />
          <Route exact path="/dashboard/doctor/profile" element={<DoctorAccount />} />
          <Route exact path="/dashboard/doctor/patients" element={<PatientManagement />} />
          <Route exact path="/dashboard/doctor/treatments" element={<TreatmentManagement />} />
          <Route exact path="/dashboard/doctor/schedules" element={<Schedules />} />
          <Route exact path="/dashboard/doctor/reports" element={<ReportManagement />} />
          <Route exact path="/dashboard/doctor/reports/detail" element={<ReportDetails />} />
          <Route exact path="/dashboard/doctor/patients/detail" element={<PatientDetails />} />
          <Route exact path="/dashboard/doctor/treatments/detail" element={<TreatmentDetails />} />

           {/* patient routes */}
           <Route exact path="/dashboard/patient/home" element={<PatientDashboardPage />} />
          <Route exact path="/dashboard/patient/profile" element={<PatientAccount />} />
          <Route exact path="/dashboard/patient/treatments" element={<PatientTreatmentManagement />} />
          <Route exact path="/dashboard/patient/treatments/detail" element={<PatientTreatmentDetails />} />
          <Route exact path="/dashboard/patient/schedules" element={<Schedules />} />
          <Route exact path="/dashboard/patient/payments" element={<PaymentManagement/>} />
          <Route exact path="/dashboard/patient/payments/detail" element={<PaymentDetails/>} />
          <Route exact path="/dashboard/patient/tracking" element={<TrackingManagement />} />
          <Route exact path="/dashboard/patient/tracking/detail" element={<TrackingDetails />} />
          <Route exact path="/dashboard/patient/reports" element={<PatientReportManagement />} />
          <Route exact path="/dashboard/patient/reports/detail" element={<ReportDetails />} />
          <Route exact path="/dashboard/patients/detail" element={<PatientDetails />} />
          <Route exact path="/dashboard/treatments/detail" element={<TreatmentDetails />} />


           {/* admin routes */}
           <Route exact path="/dashboard/admin/home" element={<AdminDashboardPage />} />
          <Route exact path="/dashboard/admin/profile" element={<PatientAccount />} />
          <Route exact path="/dashboard/admin/patients" element={<AdminPatientManagement />} />
          <Route exact path="/dashboard/admin/management/lab" element={<AdminLabManagement />} />
          <Route exact path="/dashboard/admin/management/lab/detail" element={<SampleDetails />} />
          <Route exact path="/dashboard/admin/management/specimen" element={<AdminSpecimenManagement />} />
          <Route exact path="/dashboard/admin/management/specimen/detail" element={<SpecimenDetails />} />

        
        </Routes>
    </BrowserRouter>
    </Provider>
    </main>
  )
}

export default App
