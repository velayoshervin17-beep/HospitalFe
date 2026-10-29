import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import UserLayout from './layouts/UserLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AppointmentsPage from './pages/AppointmentsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FindDoctorPage from './pages/FindDoctorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AdmissionDischargePage from './pages/inpatient/AdmissionDischargePage.jsx'
import GeneralWardsPage from './pages/inpatient/GeneralWardsPage.jsx'
import IcuPage from './pages/inpatient/IcuPage.jsx'
import InpatientPage from './pages/inpatient/InpatientPage.jsx'
import OperatingRoomPage from './pages/inpatient/OperatingRoomPage.jsx'
import RecoveryRoomPage from './pages/inpatient/RecoveryRoomPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AmbulatoryServicesPage from './pages/outpatient/AmbulatoryServicesPage.jsx'
import CardiologyPage from './pages/outpatient/CardiologyPage.jsx'
import DentalClinicPage from './pages/outpatient/DentalClinicPage.jsx'
import DermatologyPage from './pages/outpatient/DermatologyPage.jsx'
import EmergencyDepartmentPage from './pages/outpatient/EmergencyDepartmentPage.jsx'
import OutpatientPage from './pages/outpatient/OutpatientPage.jsx'
import PediatricsPage from './pages/outpatient/PediatricsPage.jsx'
import SpecialtyClinicsPage from './pages/outpatient/SpecialtyClinicsPage.jsx'
import UserHomePage from './pages/UserHomePage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Navigate to="/user" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="find-a-doctor" element={<FindDoctorPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="user" element={<UserLayout />}>
          <Route index element={<UserHomePage />} />
          <Route path="outpatient" element={<OutpatientPage />} />
          <Route path="outpatient/emergency" element={<EmergencyDepartmentPage />} />
          <Route path="outpatient/specialty-clinics" element={<SpecialtyClinicsPage />} />
          <Route path="outpatient/specialty-clinics/pediatrics" element={<PediatricsPage />} />
          <Route path="outpatient/specialty-clinics/cardiology" element={<CardiologyPage />} />
          <Route path="outpatient/specialty-clinics/dermatology" element={<DermatologyPage />} />
          <Route path="outpatient/dental" element={<DentalClinicPage />} />
          <Route path="outpatient/ambulatory" element={<AmbulatoryServicesPage />} />
          <Route path="inpatient" element={<InpatientPage />} />
          <Route path="inpatient/admission-discharge" element={<AdmissionDischargePage />} />
          <Route path="inpatient/general-wards" element={<GeneralWardsPage />} />
          <Route path="inpatient/icu" element={<IcuPage />} />
          <Route path="inpatient/operating-room" element={<OperatingRoomPage />} />
          <Route path="inpatient/recovery-room" element={<RecoveryRoomPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
