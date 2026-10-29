export const serviceTree = [
  {
    id: 'outpatient',
    navLabel: 'Outpatient & Clinical',
    title: 'Outpatient and Clinical Services',
    to: '/user/outpatient',
    summary: 'Clinics and same-day care for patients who are not staying overnight.',
    lede: 'Outpatient and clinical services cover the emergency department, specialty clinics, dental care, and same-day treatment.',
    hours: 'Monday–Saturday, 7:00 a.m.–7:00 p.m. Emergency care is 24 hours.',
    location: 'Outpatient Pavilion',
    children: [
      {
        id: 'emergency',
        code: 'ER',
        navLabel: 'Emergency Department (ER)',
        title: 'Emergency Department',
        to: '/user/outpatient/emergency',
        summary: '24-hour care for urgent and life-threatening conditions.',
        lede: 'The emergency department is open every hour for injuries, sudden illness, and other emergencies. Use the north entrance. Call ahead only when it is safe to do so.',
        hours: 'Open 24 hours, every day',
        location: 'North emergency entrance',
        highlights: [
          'Triage as soon as you arrive',
          'Stabilization and emergency treatment',
          'Admission to ICU, the operating room, or a ward when a stay is required',
        ],
      },
      {
        id: 'specialty',
        navLabel: 'Specialty Clinics',
        title: 'Specialty Clinics',
        to: '/user/outpatient/specialty-clinics',
        summary: 'Scheduled clinics for pediatrics, cardiology, and dermatology.',
        lede: 'Specialty clinics see patients by appointment for focused outpatient care. Pediatrics, cardiology, and dermatology each have a clinic inside this service.',
        hours: 'Monday–Friday, 8:00 a.m.–5:00 p.m.',
        location: 'Outpatient Pavilion, Level 2',
        children: [
          {
            id: 'pediatrics',
            navLabel: 'Pediatrics',
            title: 'Pediatrics',
            to: '/user/outpatient/specialty-clinics/pediatrics',
            summary: 'Outpatient care for infants, children, and adolescents.',
            lede: 'The pediatrics clinic provides checkups, sick visits, and follow-up for children and teens.',
            hours: 'Monday–Friday, 8:00 a.m.–5:00 p.m.',
            location: 'Specialty Clinics, Suite 210',
            highlights: [
              'Well-child and sick visits',
              'Coordination with the inpatient wards when a stay is needed',
              'Guidance for parents and guardians at the end of the visit',
            ],
          },
          {
            id: 'cardiology',
            navLabel: 'Cardiology',
            title: 'Cardiology',
            to: '/user/outpatient/specialty-clinics/cardiology',
            summary: 'Heart and circulation visits, tests, and follow-up.',
            lede: 'Cardiology sees patients for chest symptoms, heart rhythm concerns, blood pressure, and follow-up after a hospital stay.',
            hours: 'Monday–Friday, 8:00 a.m.–5:00 p.m.',
            location: 'Specialty Clinics, Suite 240',
            highlights: [
              'Outpatient consultations',
              'ECG and heart-monitoring referrals',
              'Follow-up after inpatient cardiac care',
            ],
          },
          {
            id: 'dermatology',
            navLabel: 'Dermatology',
            title: 'Dermatology',
            to: '/user/outpatient/specialty-clinics/dermatology',
            summary: 'Care for skin, hair, and nail conditions.',
            lede: 'Dermatology evaluates rashes, skin infections, moles, and chronic skin conditions. Procedures that need a recovery stay are arranged with inpatient services.',
            hours: 'Tuesday–Saturday, 8:00 a.m.–4:00 p.m.',
            location: 'Specialty Clinics, Suite 260',
            highlights: [
              'Medical dermatology visits',
              'Skin checks',
              'Referral to the operating room when a procedure cannot be done in clinic',
            ],
          },
        ],
      },
      {
        id: 'dental',
        navLabel: 'Dental Clinic',
        title: 'Dental Clinic',
        to: '/user/outpatient/dental',
        summary: 'Preventive and restorative dental visits.',
        lede: 'The dental clinic provides exams, cleanings, fillings, and visits for dental pain during clinic hours. After-hours dental emergencies are directed to the emergency department.',
        hours: 'Monday–Friday, 8:00 a.m.–4:30 p.m.',
        location: 'Outpatient Pavilion, Level 1, east corridor',
        highlights: [
          'Exams and preventive care',
          'Restorative treatment',
          'Urgent dental pain during clinic hours',
        ],
      },
      {
        id: 'ambulatory',
        navLabel: 'Ambulatory Services',
        title: 'Ambulatory Services',
        to: '/user/outpatient/ambulatory',
        summary: 'Same-day treatment and procedures without an overnight stay.',
        lede: 'Ambulatory services cover infusions, minor procedures, and other care that is finished the same day. Patients go home with written instructions after a short observation period.',
        hours: 'Monday–Saturday, 6:30 a.m.–6:00 p.m.',
        location: 'Ambulatory Care Unit, Level 1',
        highlights: [
          'Same-day procedures',
          'Short observation after treatment',
          'Discharge on the day of the visit',
        ],
      },
    ],
  },
  {
    id: 'inpatient',
    navLabel: 'Inpatient & Nursing',
    title: 'Inpatient and Nursing Services',
    to: '/user/inpatient',
    summary: 'Admission, wards, critical care, surgery, and recovery.',
    lede: 'Inpatient and nursing services care for patients who stay in the hospital. This module covers admission and discharge, the general wards, ICU, the operating room, and the recovery room.',
    hours: 'Nursing coverage is continuous.',
    location: 'Inpatient tower',
    children: [
      {
        id: 'admission',
        navLabel: 'Admission and Discharge',
        title: 'Admission and Discharge',
        to: '/user/inpatient/admission-discharge',
        summary: 'Arrival, bed assignment, and the steps to go home.',
        lede: 'Admission and discharge coordinates how patients enter a bed and how they leave. The desk confirms identity, the reason for the stay, and the unit that will receive the patient.',
        hours: 'Desk open 24 hours',
        location: 'Inpatient tower, main lobby',
        highlights: [
          'Registration and bed assignment',
          'Consent paperwork and belongings check',
          'Discharge teaching and follow-up instructions',
        ],
      },
      {
        id: 'wards',
        navLabel: 'General Wards',
        title: 'General Wards',
        to: '/user/inpatient/general-wards',
        summary: 'Medical and surgical inpatient rooms.',
        lede: 'General wards are the inpatient rooms for patients who need nursing care without intensive monitoring. Medical and surgical teams round here each day.',
        hours: 'Nursing care 24 hours. Visiting 10:00 a.m.–8:00 p.m.',
        location: 'Inpatient tower, Levels 3 and 4',
        highlights: [
          'Medical ward',
          'Surgical ward',
          'Bedside nursing and daily rounds',
        ],
      },
      {
        id: 'icu',
        code: 'ICU',
        navLabel: 'ICU',
        title: 'Intensive Care Unit',
        to: '/user/inpatient/icu',
        summary: 'Continuous monitoring for critically ill patients.',
        lede: 'The intensive care unit cares for patients who need close monitoring, advanced nursing, and a rapid response when their condition changes.',
        hours: 'Staffed 24 hours. Visiting is limited.',
        location: 'Inpatient tower, Level 5',
        highlights: [
          'Continuous vital-sign monitoring',
          'One-to-one or one-to-two nursing',
          'Handoffs with the emergency department and operating room',
        ],
      },
      {
        id: 'operating-room',
        code: 'OR',
        navLabel: 'Operating Room (OR)',
        title: 'Operating Room',
        to: '/user/inpatient/operating-room',
        summary: 'Scheduled and emergency surgery.',
        lede: 'The operating room is where surgical teams perform scheduled operations and emergency procedures. Families wait in the surgical lounge and receive updates from staff.',
        hours: 'Scheduled cases Monday–Saturday. Emergency surgery 24 hours.',
        location: 'Surgical suite, Level 2',
        highlights: [
          'Pre-operative holding',
          'Sterile operating theatres',
          'Handoff to the recovery room',
        ],
      },
      {
        id: 'recovery',
        navLabel: 'Recovery Room',
        title: 'Recovery Room',
        to: '/user/inpatient/recovery-room',
        summary: 'Post-anesthesia care immediately after surgery.',
        lede: 'The recovery room, also called the post-anesthesia care unit, watches patients as they wake from anesthesia before they move to a ward or go home.',
        hours: 'Staffed whenever the operating room is running',
        location: 'Beside the operating room, Level 2',
        highlights: [
          'Airway and pain checks after anesthesia',
          'Clearance to a ward, ICU, or home',
          'First update for the family after surgery',
        ],
      },
    ],
  },
]

const serviceMap = new Map()

function indexServices(nodes, parentId = null) {
  nodes.forEach((node) => {
    serviceMap.set(node.id, { ...node, parentId })
    if (node.children) indexServices(node.children, node.id)
  })
}

indexServices(serviceTree)

export function getService(id) {
  return serviceMap.get(id) ?? null
}

export function getBreadcrumbs(id) {
  const crumbs = []
  let current = getService(id)

  while (current) {
    crumbs.unshift({ label: current.title, to: current.to })
    current = current.parentId ? getService(current.parentId) : null
  }

  return [{ label: 'Home', to: '/' }, ...crumbs]
}

export function getSiblings(id) {
  const service = getService(id)
  if (!service?.parentId) return []
  const parent = getService(service.parentId)
  return (parent?.children ?? []).filter((child) => child.id !== id)
}

export function collectLeaves(nodes) {
  const leaves = []

  const walk = (list) => {
    list.forEach((node) => {
      if (node.children?.length) walk(node.children)
      else leaves.push(node)
    })
  }

  walk(nodes)
  return leaves
}
