import { Resource, Program, SupportedLanguage } from '@/lib/types';

export const VERIFIED_RESOURCES: Resource[] = [
  {
    id: 'res-nv-energy-reach',
    name: 'NV Energy — Project REACH Assistance',
    category: 'utility_assistance',
    description:
      'Emergency energy bill payment assistance administered in partnership with local human services to prevent electric service disconnection for vulnerable low-income families and individuals in North Las Vegas.',
    address: '6226 W Sahara Ave',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.1444,
    longitude: -115.2289,
    phone: '(702) 402-5555',
    website: 'https://www.nvenergy.com/account-services/assistance-programs/project-reach',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    languages: ['en', 'es'],
    source_url: 'https://www.nvenergy.com/account-services/assistance-programs/project-reach',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-25T00:00:00Z',
  },
  {
    id: 'res-state-dwss-liheap',
    name: 'Nevada DWSS — Energy Assistance Program (LIHEAP)',
    category: 'utility_assistance',
    description:
      'State of Nevada annual energy grants helping eligible low-income households pay electric and natural gas utility bills, plus emergency fast-track crisis grants for households facing imminent shutoff.',
    address: '700 Belrose St',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89032',
    latitude: 36.1798,
    longitude: -115.1764,
    phone: '(702) 486-1404',
    website: 'https://dwss.nv.gov/Energy/1_Energy_Assistance/',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    languages: ['en', 'es', 'tl'],
    source_url: 'https://dwss.nv.gov/Energy/1_Energy_Assistance/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-23T00:00:00Z',
  },
  {
    id: 'res-three-square',
    name: 'Three Square Food Bank — North Las Vegas Campus',
    category: 'food_assistance',
    description:
      'Southern Nevada’s largest food bank. Operates warehouse grocery distribution, mobile pantries, childhood nutrition meal packs, and on-site bilingual SNAP/Food Stamps application counselors.',
    address: '4190 N Pecos Rd',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.2361,
    longitude: -115.0978,
    phone: '(702) 644-3663',
    website: 'https://www.threesquare.org/',
    hours: 'Mon - Fri: 8:30 AM - 4:30 PM',
    languages: ['en', 'es', 'tl'],
    source_url: 'https://www.threesquare.org/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-26T00:00:00Z',
  },
  {
    id: 'res-just-one-project',
    name: 'The Just One Project — Community Food Market',
    category: 'food_assistance',
    description:
      'Community-centered food pantry offering dignified grocery shopping, fresh organic produce, pantry staples, and direct assistance for families with school-aged children and senior citizens.',
    address: '4001 E Craig Rd',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.2396,
    longitude: -115.0894,
    phone: '(702) 462-2253',
    website: 'https://thejustoneproject.org/',
    hours: 'Tue, Thu, Sat: 9:00 AM - 1:00 PM',
    languages: ['en', 'es'],
    source_url: 'https://thejustoneproject.org/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-21T00:00:00Z',
  },
  {
    id: 'res-nlv-neighborhood-services',
    name: 'City of North Las Vegas — Neighborhood & Housing Services',
    category: 'housing',
    description:
      'Municipal department offering emergency eviction diversion, rental relief grants, tenant rights counseling, and down-payment assistance programs for North Las Vegas residents.',
    address: '2250 Las Vegas Blvd N',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.2001,
    longitude: -115.1228,
    phone: '(702) 633-1532',
    website: 'https://www.cityofnorthlasvegas.com/departments/neighborhood_services',
    hours: 'Mon - Thu: 8:00 AM - 5:45 PM (Closed Fri)',
    languages: ['en', 'es'],
    source_url: 'https://www.cityofnorthlasvegas.com/departments/neighborhood_services',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-22T00:00:00Z',
  },
  {
    id: 'res-snhd-nlv-clinic',
    name: 'Southern Nevada Health District — North Las Vegas Clinic',
    category: 'healthcare',
    description:
      'Public community health center providing family primary care, immunizations, maternal-child health, WIC nutritional vouchers, and sliding-fee medical care regardless of insurance status.',
    address: '2845 Holbrook Dr',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.2112,
    longitude: -115.1265,
    phone: '(702) 759-1000',
    website: 'https://www.southernnevadahealthdistrict.org/',
    hours: 'Mon - Thu: 7:00 AM - 5:30 PM',
    languages: ['en', 'es', 'tl'],
    source_url: 'https://www.southernnevadahealthdistrict.org/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-24T00:00:00Z',
  },
  {
    id: 'res-nv-jobconnect-nlv',
    name: 'Nevada JobConnect — North Las Vegas Career Center',
    category: 'jobs',
    description:
      'Official Nevada Department of Employment center providing free employment placement, bilingual resume assistance, vocational training vouchers, and unemployment insurance navigation.',
    address: '2827 Las Vegas Blvd N',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.2105,
    longitude: -115.1252,
    phone: '(702) 486-0100',
    website: 'https://nevadajobconnect.com/',
    hours: 'Mon - Fri: 8:00 AM - 5:00 PM',
    languages: ['en', 'es'],
    source_url: 'https://nevadajobconnect.com/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-20T00:00:00Z',
  },
  {
    id: 'res-rtc-transit-nlv',
    name: 'RTC Southern Nevada — Reduced Transit Fare & Paratransit',
    category: 'transportation',
    description:
      'Regional Transportation Commission transit passes and discounted ride programs for income-qualified riders, seniors, students, and persons with disabilities throughout North Las Vegas routes.',
    address: '600 S Grand Central Pkwy',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89106',
    latitude: 36.1661,
    longitude: -115.1539,
    phone: '(702) 228-7433',
    website: 'https://www.rtcsnv.com/',
    hours: 'Mon - Sun: 6:00 AM - 10:00 PM',
    languages: ['en', 'es'],
    source_url: 'https://www.rtcsnv.com/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-18T00:00:00Z',
  },
  {
    id: 'res-acelero-head-start',
    name: 'Acelero Learning — North Las Vegas Head Start Center',
    category: 'childcare',
    description:
      'Free federally funded Early Head Start and Head Start preschool education, developmental screenings, daily nutritious meals, and family support for children ages 0 to 5 in North Las Vegas.',
    address: '2707 Belmont St',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.2084,
    longitude: -115.1302,
    phone: '(702) 399-5558',
    website: 'https://clarkcounty.acelero.net/',
    hours: 'Mon - Fri: 7:30 AM - 5:30 PM',
    languages: ['en', 'es'],
    source_url: 'https://clarkcounty.acelero.net/',
    verification_status: 'VERIFIED',
    last_verified_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: '2026-01-15T00:00:00Z',
    updated_at: '2026-09-23T00:00:00Z',
  },
  {
    id: 'res-stale-example',
    name: 'North Las Vegas Community Relief Partnership (Demo Stale)',
    category: 'other',
    description:
      'Community partner listing flagged for annual recertification. Used to test the Verification Agent and Admin review workflows.',
    address: '1900 Civic Center Dr',
    city: 'North Las Vegas',
    state: 'NV',
    zip: '89030',
    latitude: 36.1942,
    longitude: -115.1168,
    phone: '(702) 555-0199',
    website: 'https://example-nlv-relief.org',
    hours: 'Hours Pending Review',
    languages: ['en'],
    source_url: 'https://example-nlv-relief.org/notice-2025',
    verification_status: 'NEEDS_REVIEW',
    last_verified_at: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString(), // 65 days ago
    created_at: '2025-11-01T00:00:00Z',
    updated_at: '2026-07-25T00:00:00Z',
  },
];

export const VERIFIED_PROGRAMS: Program[] = [
  {
    id: 'prog-reach-emergency',
    resource_id: 'res-nv-energy-reach',
    name: 'Project REACH Emergency Energy Payment Assistance',
    category: 'utility_assistance',
    description:
      'Provides up to $500 per year directly credited to an NV Energy electric account to resolve past-due balances and stop shutoff disconnection.',
    eligibility_rules: [
      {
        criterion: 'Income',
        requirement: 'Household income at or below 200% of Federal Poverty Level',
        mandatory: true,
      },
      {
        criterion: 'Residency',
        requirement: 'Current North Las Vegas / Southern Nevada residential address',
        mandatory: true,
      },
      {
        criterion: 'Utility Account',
        requirement: 'Active NV Energy electric account with past-due or shut-off notice',
        mandatory: true,
      },
    ],
    required_documents: [
      'Current NV Energy bill with disconnection notice or past-due balance',
      'Proof of household income for last 30 days (pay stub, benefit letter, or tax return)',
      'Government-issued photo identification for primary account holder',
    ],
    application_url: 'https://www.nvenergy.com/account-services/assistance-programs/project-reach',
    application_phone: '(702) 402-5555',
    status: 'active',
    source_url: 'https://www.nvenergy.com/account-services/assistance-programs/project-reach',
    last_verified_at: '2026-09-25T00:00:00Z',
    created_at: '2026-01-15T00:00:00Z',
  },
  {
    id: 'prog-liheap-eap',
    resource_id: 'res-state-dwss-liheap',
    name: 'Nevada State Energy Assistance Program (EAP)',
    category: 'utility_assistance',
    description:
      'State-administered financial benefit paid directly to utility providers to help eligible households pay ongoing heating/cooling bills, plus expedited crisis benefits.',
    eligibility_rules: [
      {
        criterion: 'Income',
        requirement: 'Gross household income cannot exceed 150% of the Federal Poverty Guidelines',
        mandatory: true,
      },
      {
        criterion: 'Residency',
        requirement: 'Nevada resident living in an eligible dwelling',
        mandatory: true,
      },
      {
        criterion: 'Utility Responsibility',
        requirement: 'Must be directly responsible for heating and/or cooling costs',
        mandatory: true,
      },
    ],
    required_documents: [
      'Completed State DWSS EAP application',
      'Most recent electric and heating utility statements',
      'Proof of gross monthly income for all adult household members (past 30 days)',
      'Social Security numbers for all household members (or proof of application)',
    ],
    application_url: 'https://dwss.nv.gov/Energy/1_Energy_Assistance/',
    application_phone: '(702) 486-1404',
    status: 'active',
    source_url: 'https://dwss.nv.gov/Energy/1_Energy_Assistance/',
    last_verified_at: '2026-09-23T00:00:00Z',
    created_at: '2026-01-15T00:00:00Z',
  },
  {
    id: 'prog-three-square-pantry',
    resource_id: 'res-three-square',
    name: 'Three Square Emergency Food Distribution & Kids Nutrition',
    category: 'food_assistance',
    description:
      'Immediate emergency food boxes, fresh produce baskets, and after-school kids weekend meal packs (BackPack program) distributed without complex barriers.',
    eligibility_rules: [
      {
        criterion: 'Self-Attestation of Need',
        requirement: 'Self-declaration of food hardship or low income in Clark County',
        mandatory: true,
      },
    ],
    required_documents: ['Photo ID or mail confirming residence in Clark County / North Las Vegas'],
    application_url: 'https://www.threesquare.org/get-help',
    application_phone: '(702) 644-3663',
    status: 'active',
    source_url: 'https://www.threesquare.org/',
    last_verified_at: '2026-09-26T00:00:00Z',
    created_at: '2026-01-15T00:00:00Z',
  },
];

export const RESOURCE_TRANSLATIONS: Record<
  string,
  Record<SupportedLanguage, { description: string; whyThisResource?: string }>
> = {
  'res-nv-energy-reach': {
    en: {
      description:
        'Emergency energy bill payment assistance administered in partnership with local human services to prevent electric service disconnection for vulnerable low-income families and individuals in North Las Vegas.',
      whyThisResource: 'Direct match for utility assistance in North Las Vegas.',
    },
    es: {
      description:
        'Asistencia de emergencia para el pago de facturas de energía, administrada en colaboración con servicios humanos locales para prevenir la desconexión del servicio eléctrico para familias e individuos de bajos ingresos en North Las Vegas.',
      whyThisResource: 'Ayuda directa para facturas de electricidad en North Las Vegas.',
    },
    tl: {
      description:
        'Pang-emerhensiyang tulong sa pagbabayad ng kuryente sa pakikipagtulungan sa mga lokal na serbisyo upang maiwasan ang pagkaputol ng kuryente para sa mga pamilya sa North Las Vegas.',
      whyThisResource: 'Direktang tulong para sa bayarin sa kuryente sa North Las Vegas.',
    },
  },
  'res-state-dwss-liheap': {
    en: {
      description:
        'State of Nevada annual energy grants helping eligible low-income households pay electric and natural gas utility bills, plus emergency fast-track crisis grants for households facing imminent shutoff.',
      whyThisResource: 'State energy grant program offering crisis assistance.',
    },
    es: {
      description:
        'Subsidios anuales de energía del Estado de Nevada que ayudan a los hogares de bajos ingresos a pagar las facturas de electricidad y gas natural, además de subsidios de crisis de emergencia para hogares que enfrentan un corte inminente.',
      whyThisResource: 'Programa estatal de energía que ofrece subsidios de crisis.',
    },
    tl: {
      description:
        'Taunang tulong pinansyal sa enerhiya mula sa Estado ng Nevada upang tulungan ang mga kwalipikadong pamilya sa bayarin sa kuryente at gas, pati na ang emergency crisis grant kung mapuputulan na.',
      whyThisResource: 'Programa ng estado para sa tulong sa kuryente at gas.',
    },
  },
  'res-three-square': {
    en: {
      description:
        'Southern Nevada’s largest food bank. Operates warehouse grocery distribution, mobile pantries, childhood nutrition meal packs, and on-site bilingual SNAP/Food Stamps application counselors.',
      whyThisResource: 'Direct food assistance with fresh produce and groceries.',
    },
    es: {
      description:
        'El banco de alimentos más grande del sur de Nevada. Opera distribución de comestibles, despensas móviles, paquetes de nutrición infantil y consejeros bilingües de SNAP/estampillas de comida.',
      whyThisResource: 'Asistencia directa de alimentos con productos frescos y despensa.',
    },
    tl: {
      description:
        'Ang pinakamalaking food bank sa Southern Nevada. Namamahagi ng libreng grocery, mga pagkain para sa mga bata, at may tagapayo para sa SNAP/Food Stamps.',
      whyThisResource: 'Direktang tulong sa pagkain at sariwang ani.',
    },
  },
  'res-just-one-project': {
    en: {
      description:
        'Community-centered food pantry offering dignified grocery shopping, fresh organic produce, pantry staples, and direct assistance for families with school-aged children and senior citizens.',
      whyThisResource: 'Free fresh produce and groceries for local families.',
    },
    es: {
      description:
        'Despensa de alimentos comunitaria que ofrece compras dignas de comestibles, productos frescos, alimentos básicos y asistencia directa para familias con niños en edad escolar y adultos mayores.',
      whyThisResource: 'Alimentos y productos frescos gratuitos para familias locales.',
    },
    tl: {
      description:
        'Pampamayanang pamilihan ng pagkain na nag-aalok ng sariwang gulay, prutas, at mga pangunahing pagkain para sa mga pamilya at senior citizens.',
      whyThisResource: 'Libreng sariwang pagkain para sa mga pamilya.',
    },
  },
  'res-nlv-neighborhood-services': {
    en: {
      description:
        'Municipal department offering emergency eviction diversion, rental relief grants, tenant rights counseling, and down-payment assistance programs for North Las Vegas residents.',
      whyThisResource: 'Direct eviction prevention and emergency rental assistance.',
    },
    es: {
      description:
        'Departamento municipal que ofrece prevención de desalojos de emergencia, subsidios de alivio de alquiler, asesoría de derechos de inquilinos y programas de asistencia para residentes de North Las Vegas.',
      whyThisResource: 'Prevención directa de desalojos y asistencia de alquiler.',
    },
    tl: {
      description:
        'Departamento ng lungsod na nag-aalok ng tulong upang maiwasan ang pagpapaalis sa bahay, pambayad sa upa, at payo sa karapatan ng nangungupahan sa North Las Vegas.',
      whyThisResource: 'Direktang tulong sa pag-iwas sa pagpapaalis at pambayad sa upa.',
    },
  },
  'res-clark-county-social-services': {
    en: {
      description:
        'County financial assistance for low-income residents, emergency short-term housing, long-term case management, and burial assistance.',
      whyThisResource: 'Comprehensive emergency housing, utility, and basic needs support.',
    },
    es: {
      description:
        'Asistencia financiera del condado para residentes de bajos ingresos, vivienda de emergencia a corto plazo, gestión de casos a largo plazo y asistencia funeraria.',
      whyThisResource: 'Apoyo integral de vivienda de emergencia y necesidades básicas.',
    },
    tl: {
      description:
        'Tulong pinansyal mula sa county para sa pansamantalang tirahan, pamamahala ng kaso, at tulong sa mga pangunahing pangangailangan.',
      whyThisResource: 'Komprehensibong tulong sa emergency housing at bayarin.',
    },
  },
  'res-snhd-east-las-vegas': {
    en: {
      description:
        'Public community clinic providing low-cost or sliding-scale primary medical checkups, immunizations, family planning, tuberculosis screening, and health card exams.',
      whyThisResource: 'Low-cost healthcare clinic with sliding scale fees.',
    },
    es: {
      description:
        'Clínica comunitaria pública que ofrece chequeos médicos primarios de bajo costo o a escala variable según ingresos, vacunas, planificación familiar y exámenes de salud.',
      whyThisResource: 'Clínica de salud de bajo costo con tarifas según ingresos.',
    },
    tl: {
      description:
        'Pampublikong klinika na nagbibigay ng abot-kayang checkup, bakuna, pagpaplano ng pamilya, at serbisyong medikal batay sa kakayahang magbayad.',
      whyThisResource: 'Mababang bayad sa klinika batay sa kita ng pamilya.',
    },
  },
  'res-nevada-jobconnect-nlv': {
    en: {
      description:
        'State-run workforce development center offering free bilingual job matching, resume writing clinics, vocational retraining tuition grants, and veteran employment specialists.',
      whyThisResource: 'Free job search assistance, resume help, and vocational training grants.',
    },
    es: {
      description:
        'Centro estatal de desarrollo laboral que ofrece búsqueda de empleo bilingüe gratuita, talleres de redacción de currículum, subsidios de capacitación vocacional y especialistas para veteranos.',
      whyThisResource: 'Asistencia gratuita para encontrar trabajo y capacitación laboral.',
    },
    tl: {
      description:
        'Sentro ng trabaho ng estado na nagbibigay ng libreng tulong sa paghahanap ng trabaho, paggawa ng resume, at tulong sa pagsasanay bokasyonal.',
      whyThisResource: 'Libreng tulong sa paghahanap ng trabaho at pagsasanay.',
    },
  },
  'res-rtc-transit-nlv': {
    en: {
      description:
        'Public transportation agency providing reduced-fare bus passes for low-income seniors, students, and persons with disabilities, along with specialized door-to-door paratransit.',
      whyThisResource: 'Discounted bus transit passes and paratransit mobility support.',
    },
    es: {
      description:
        'Agencia de transporte público que proporciona pases de autobús con tarifa reducida para personas de la tercera edad de bajos ingresos, estudiantes y personas con discapacidades, además de paratránsito.',
      whyThisResource: 'Pases de autobús con descuento y apoyo de transporte.',
    },
    tl: {
      description:
        'Ahensya ng pampublikong transportasyon na nagbibigay ng murang pasahe sa bus para sa mga senior, estudyante, at may kapansanan.',
      whyThisResource: 'May diskwentong bus pass at tulong sa transportasyon.',
    },
  },
  'res-acelero-head-start': {
    en: {
      description:
        'Federally funded free early childhood education, preschool, nutrition programs, and family support services for children aged 0–5 from low-income families.',
      whyThisResource: 'Free early childhood education, preschool, and nutritional meals.',
    },
    es: {
      description:
        'Educación temprana y preescolar gratuita financiada por el gobierno federal, programas de nutrición y servicios de apoyo familiar para niños de 0 a 5 años de familias de bajos ingresos.',
      whyThisResource: 'Educación preescolar gratuita y comidas nutritivas para niños pequeños.',
    },
    tl: {
      description:
        'Libreng edukasyon sa maagang pagkabata, preschool, programa sa nutrisyon, at suporta sa pamilya para sa mga batang 0-5 taong gulang.',
      whyThisResource: 'Libreng preschool at masustansyang pagkain para sa mga bata.',
    },
  },
};

export function getLocalizedResource(res: Resource, lang: SupportedLanguage): Resource {
  const trans = RESOURCE_TRANSLATIONS[res.id]?.[lang];
  if (!trans) return res;
  return {
    ...res,
    description: trans.description || res.description,
    whyThisResource: trans.whyThisResource || res.whyThisResource,
  };
}
