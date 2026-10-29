const status = (label, tone) => ({ label, tone })

export const serviceRecords = {
  outpatient: {
    title: 'Unit census',
    columns: [
      { key: 'unit', label: 'Unit' },
      { key: 'open', label: 'Open cases' },
      { key: 'waiting', label: 'Waiting' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'op-1', unit: 'Emergency Department', href: '/user/outpatient/emergency', open: '18', waiting: '6', status: status('Busy', 'alert') },
      { id: 'op-2', unit: 'Specialty Clinics', href: '/user/outpatient/specialty-clinics', open: '24', waiting: '4', status: status('On schedule', 'ok') },
      { id: 'op-3', unit: 'Dental Clinic', href: '/user/outpatient/dental', open: '9', waiting: '2', status: status('On schedule', 'ok') },
      { id: 'op-4', unit: 'Ambulatory Services', href: '/user/outpatient/ambulatory', open: '11', waiting: '1', status: status('Open', 'ok') },
    ],
  },
  emergency: {
    title: 'Patients in the department',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'complaint', label: 'Complaint' },
      { key: 'acuity', label: 'Acuity' },
      { key: 'arrived', label: 'Arrived' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'er-1', patient: 'Mina Cruz', complaint: 'Chest pain', acuity: 'ESI 2', arrived: '08:14', status: status('In bay', 'alert') },
      { id: 'er-2', patient: 'Omar Haddad', complaint: 'Laceration, hand', acuity: 'ESI 4', arrived: '08:41', status: status('Waiting', 'ok') },
      { id: 'er-3', patient: 'Lila Chen', complaint: 'Shortness of breath', acuity: 'ESI 2', arrived: '09:02', status: status('In bay', 'alert') },
      { id: 'er-4', patient: 'Noah Brooks', complaint: 'Ankle injury', acuity: 'ESI 4', arrived: '09:18', status: status('Triage', 'ok') },
      { id: 'er-5', patient: 'Ava Santos', complaint: 'Fever, child', acuity: 'ESI 3', arrived: '09:27', status: status('Waiting', 'ok') },
    ],
  },
  specialty: {
    title: 'Clinic board',
    columns: [
      { key: 'clinic', label: 'Clinic' },
      { key: 'booked', label: 'Booked today' },
      { key: 'seen', label: 'Seen' },
      { key: 'next', label: 'Next slot' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'sp-1', clinic: 'Pediatrics', href: '/user/outpatient/specialty-clinics/pediatrics', booked: '14', seen: '6', next: '10:20', status: status('In session', 'ok') },
      { id: 'sp-2', clinic: 'Cardiology', href: '/user/outpatient/specialty-clinics/cardiology', booked: '11', seen: '4', next: '10:40', status: status('In session', 'ok') },
      { id: 'sp-3', clinic: 'Dermatology', href: '/user/outpatient/specialty-clinics/dermatology', booked: '9', seen: '3', next: '11:00', status: status('In session', 'ok') },
    ],
  },
  pediatrics: {
    title: 'Today’s visits',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'age', label: 'Age' },
      { key: 'visit', label: 'Visit' },
      { key: 'time', label: 'Time' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'ped-1', patient: 'Ava Santos', age: '4 y', visit: 'Fever', time: '09:30', status: status('Arrived', 'ok') },
      { id: 'ped-2', patient: 'Eli Navarro', age: '11 mo', visit: 'Well child', time: '10:20', status: status('Booked', 'ok') },
      { id: 'ped-3', patient: 'Sophie Rahman', age: '8 y', visit: 'Asthma follow-up', time: '11:00', status: status('Booked', 'ok') },
      { id: 'ped-4', patient: 'Jonah Park', age: '15 y', visit: 'Sports physical', time: '13:10', status: status('Booked', 'ok') },
    ],
  },
  cardiology: {
    title: 'Today’s visits',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'reason', label: 'Reason' },
      { key: 'time', label: 'Time' },
      { key: 'room', label: 'Room' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'card-1', patient: 'Helen Ortiz', reason: 'Blood pressure review', time: '09:00', room: '240A', status: status('Seen', 'ok') },
      { id: 'card-2', patient: 'Marcus Hale', reason: 'Post-discharge ECG', time: '10:40', room: '240B', status: status('Waiting', 'ok') },
      { id: 'card-3', patient: 'Priya Shah', reason: 'Chest tightness', time: '11:20', room: '240A', status: status('Booked', 'ok') },
      { id: 'card-4', patient: 'Owen Blake', reason: 'Rhythm follow-up', time: '14:00', room: '240B', status: status('Booked', 'ok') },
    ],
  },
  dermatology: {
    title: 'Today’s visits',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'concern', label: 'Concern' },
      { key: 'time', label: 'Time' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'derm-1', patient: 'Grace Kim', concern: 'Rash, arms', time: '09:15', status: status('Seen', 'ok') },
      { id: 'derm-2', patient: 'Luis Ortega', concern: 'Mole check', time: '11:00', status: status('Waiting', 'ok') },
      { id: 'derm-3', patient: 'Nina Volkov', concern: 'Acne follow-up', time: '13:30', status: status('Booked', 'ok') },
      { id: 'derm-4', patient: 'Chris Adeyemi', concern: 'Wound review', time: '15:00', status: status('Booked', 'ok') },
    ],
  },
  dental: {
    title: 'Chair list',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'procedure', label: 'Procedure' },
      { key: 'time', label: 'Time' },
      { key: 'chair', label: 'Chair' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'den-1', patient: 'Rosa Nguyen', procedure: 'Cleaning', time: '08:30', chair: '1', status: status('Done', 'ok') },
      { id: 'den-2', patient: 'Ben Carter', procedure: 'Filling', time: '10:00', chair: '2', status: status('In chair', 'alert') },
      { id: 'den-3', patient: 'Imani Cole', procedure: 'Exam', time: '11:15', chair: '1', status: status('Booked', 'ok') },
      { id: 'den-4', patient: 'Theo Marsh', procedure: 'Tooth pain', time: '13:45', chair: '3', status: status('Booked', 'ok') },
    ],
  },
  ambulatory: {
    title: 'Same-day list',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'service', label: 'Service' },
      { key: 'time', label: 'Time' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'amb-1', patient: 'Claire Dubois', service: 'Infusion', time: '07:30', status: status('In progress', 'alert') },
      { id: 'amb-2', patient: 'Samir Iqbal', service: 'Minor procedure', time: '09:45', status: status('Prepped', 'ok') },
      { id: 'amb-3', patient: 'Holly Grant', service: 'Observation', time: '11:30', status: status('Waiting', 'ok') },
      { id: 'amb-4', patient: 'Peter Lang', service: 'Wound care', time: '14:15', status: status('Booked', 'ok') },
    ],
  },
  inpatient: {
    title: 'Bed census',
    columns: [
      { key: 'unit', label: 'Unit' },
      { key: 'occupied', label: 'Occupied' },
      { key: 'capacity', label: 'Capacity' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'ip-1', unit: 'Admission and Discharge', href: '/user/inpatient/admission-discharge', occupied: '7 waiting', capacity: 'Desk', status: status('Open', 'ok') },
      { id: 'ip-2', unit: 'General Wards', href: '/user/inpatient/general-wards', occupied: '42', capacity: '48', status: status('Open', 'ok') },
      { id: 'ip-3', unit: 'ICU', href: '/user/inpatient/icu', occupied: '10', capacity: '12', status: status('Limited', 'alert') },
      { id: 'ip-4', unit: 'Operating Room', href: '/user/inpatient/operating-room', occupied: '3 running', capacity: '6 theatres', status: status('In session', 'ok') },
      { id: 'ip-5', unit: 'Recovery Room', href: '/user/inpatient/recovery-room', occupied: '4', capacity: '8 bays', status: status('Open', 'ok') },
    ],
  },
  admission: {
    title: 'Movements today',
    columns: [
      { key: 'patient', label: 'Patient' },
      { key: 'action', label: 'Action' },
      { key: 'unit', label: 'Unit' },
      { key: 'time', label: 'Time' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'adm-1', patient: 'Mina Cruz', action: 'Admit', unit: 'ICU', time: '08:40', status: status('In progress', 'alert') },
      { id: 'adm-2', patient: 'George Ellis', action: 'Admit', unit: 'General ward', time: '09:05', status: status('Bed assigned', 'ok') },
      { id: 'adm-3', patient: 'Fatima Noor', action: 'Discharge', unit: 'Surgical ward', time: '10:15', status: status('Teaching', 'ok') },
      { id: 'adm-4', patient: 'Leo Martin', action: 'Discharge', unit: 'Medical ward', time: '11:00', status: status('Ready', 'ok') },
    ],
  },
  wards: {
    title: 'Ward board',
    columns: [
      { key: 'bed', label: 'Bed' },
      { key: 'patient', label: 'Patient' },
      { key: 'ward', label: 'Ward' },
      { key: 'nurse', label: 'Nurse' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'wd-1', bed: '3-12', patient: 'George Ellis', ward: 'Medical', nurse: 'R. Santos', status: status('Admitted', 'ok') },
      { id: 'wd-2', bed: '3-18', patient: 'Helen Cho', ward: 'Medical', nurse: 'R. Santos', status: status('Stable', 'ok') },
      { id: 'wd-3', bed: '4-04', patient: 'Fatima Noor', ward: 'Surgical', nurse: 'J. Alvarez', status: status('Discharge today', 'ok') },
      { id: 'wd-4', bed: '4-09', patient: 'Ivan Petrov', ward: 'Surgical', nurse: 'J. Alvarez', status: status('Post-op day 1', 'alert') },
      { id: 'wd-5', bed: '3-02', patient: 'Empty', ward: 'Medical', nurse: '—', status: status('Open bed', 'ok') },
    ],
  },
  icu: {
    title: 'Intensive care board',
    columns: [
      { key: 'bed', label: 'Bed' },
      { key: 'patient', label: 'Patient' },
      { key: 'support', label: 'Support' },
      { key: 'nurse', label: 'Nurse' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'icu-1', bed: 'ICU-1', patient: 'Mina Cruz', support: 'Monitor', nurse: 'A. Reyes', status: status('New admit', 'alert') },
      { id: 'icu-2', bed: 'ICU-3', patient: 'Daniel Okonkwo', support: 'Ventilator', nurse: 'A. Reyes', status: status('Critical', 'alert') },
      { id: 'icu-3', bed: 'ICU-6', patient: 'Marisol Vega', support: 'Drip', nurse: 'K. Bennett', status: status('Stable', 'ok') },
      { id: 'icu-4', bed: 'ICU-8', patient: 'Empty', support: '—', nurse: '—', status: status('Open bed', 'ok') },
    ],
  },
  'operating-room': {
    title: 'Theatre list',
    columns: [
      { key: 'time', label: 'Time' },
      { key: 'patient', label: 'Patient' },
      { key: 'procedure', label: 'Procedure' },
      { key: 'theatre', label: 'Theatre' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'or-1', time: '07:30', patient: 'Ivan Petrov', procedure: 'Appendectomy', theatre: 'OR 2', status: status('In theatre', 'alert') },
      { id: 'or-2', time: '09:45', patient: 'Nadia Farouk', procedure: 'Knee arthroscopy', theatre: 'OR 1', status: status('Holding', 'ok') },
      { id: 'or-3', time: '12:15', patient: 'Chris Adeyemi', procedure: 'Skin excision', theatre: 'OR 4', status: status('Scheduled', 'ok') },
      { id: 'or-4', time: '14:30', patient: 'Open slot', procedure: '—', theatre: 'OR 3', status: status('Open', 'ok') },
    ],
  },
  recovery: {
    title: 'Recovery bays',
    columns: [
      { key: 'bay', label: 'Bay' },
      { key: 'patient', label: 'Patient' },
      { key: 'procedure', label: 'Procedure' },
      { key: 'minutes', label: 'Minutes' },
      { key: 'status', label: 'Status' },
    ],
    rows: [
      { id: 'rr-1', bay: 'PACU-2', patient: 'Ivan Petrov', procedure: 'Appendectomy', minutes: '12', status: status('Awake', 'alert') },
      { id: 'rr-2', bay: 'PACU-3', patient: 'Elena Rossi', procedure: 'Laparoscopy', minutes: '38', status: status('Ready for ward', 'ok') },
      { id: 'rr-3', bay: 'PACU-5', patient: 'Empty', procedure: '—', minutes: '—', status: status('Open bay', 'ok') },
      { id: 'rr-4', bay: 'PACU-6', patient: 'Empty', procedure: '—', minutes: '—', status: status('Open bay', 'ok') },
    ],
  },
}

export const workspaceCensus = [
  { id: 'c-1', module: 'Outpatient', unit: 'Emergency', cases: '18', note: '6 waiting', href: '/user/outpatient/emergency', linkKey: 'unit' },
  { id: 'c-2', module: 'Outpatient', unit: 'Pediatrics', cases: '14', note: 'Next 10:20', href: '/user/outpatient/specialty-clinics/pediatrics', linkKey: 'unit' },
  { id: 'c-3', module: 'Outpatient', unit: 'Dental', cases: '9', note: 'Chair 2 in use', href: '/user/outpatient/dental', linkKey: 'unit' },
  { id: 'c-4', module: 'Inpatient', unit: 'General wards', cases: '42', note: '48 beds', href: '/user/inpatient/general-wards', linkKey: 'unit' },
  { id: 'c-5', module: 'Inpatient', unit: 'ICU', cases: '10', note: '2 open beds', href: '/user/inpatient/icu', linkKey: 'unit' },
  { id: 'c-6', module: 'Inpatient', unit: 'Operating room', cases: '3', note: '1 in theatre', href: '/user/inpatient/operating-room', linkKey: 'unit' },
]
