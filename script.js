/* ========================================================
   SNT PROJECTS (PVT) LTD - STANDALONE JAVASCRIPT
   Supervised by Eng. H.K.S. Dahampriya
   Managing Director & Lead Power Systems Engineer
   Pure Vanilla JavaScript with Zero External Dependencies
   ======================================================== */

const DEFAULT_COMPANY_CONFIG = {
  name: "SNT Projects (Pvt) Ltd",
  leadEngineer: "Eng. H.K.S. Dahampriya",
  engineerTitle: "Managing Director & Lead Power Systems Engineer",
  engineerCreds: "B.Sc. Eng (Hons), AMIE-SL, Certified Solar PV Specialist",
  address: "458/A, Kandy Road, Kelaniya, Sri Lanka",
  phone: "+94 77 777 7899",
  cleanPhone: "94777777899",
  email: "info@sntprojects.lk",
  hours: "Monday – Saturday: 8:00 AM – 6:00 PM (24/7 Breakdown Dispatch)",
  sla: "< 2 Hours in Western Province / < 4 Hours Islandwide",
  linkedIn: "https://www.linkedin.com/in/h-k-s-dahampriya-865939249/",
  facebook: "https://web.facebook.com/p/SNT-Projects-Pvt-Ltd-100054399795329/?_rdc=1&_rdr#",
  whatsappUrl: "https://wa.me/94777777899",
  solarRates: {
    domestic: 42.0,
    commercial: 58.0,
    costPerKw: 250000,
    sunHours: 4.4
  },
  hero: {
    kicker: "SNT Projects (Pvt) Ltd · Lead: Eng. H.K.S. Dahampriya · Kelaniya",
    headline: "Uninterrupted Industrial UPS & Advanced Solar Power Systems.",
    description: "We design, install, and maintain mission-critical UPS systems and high-efficiency rooftop solar installations for Sri Lankan manufacturing plants, commercial towers, healthcare facilities, and private residences.",
    guaranteeTitle: "Certified Power Reliability Guarantee",
    guaranteePoints: [
      "0ms UPS Online Double-Conversion",
      "CEB/LECO Net-Metering Handled",
      "24/7 Rapid Emergency Breakdown",
      "Kelaniya Base Station Support"
    ],
    uptimeStat: "99.98%",
    uptimeSubtext: "Contracted AMC System Availability"
  },
  services: [
    {
      id: "ups",
      number: "01",
      title: "High-Reliability UPS & Battery Systems",
      subtitle: "Zero-millisecond switchover protection for servers, medical devices & automated assembly lines",
      description: "True Online Double-Conversion topology (VFI-SS-111 standard) delivering pure, continuous sine-wave power with complete galvanic isolation and zero transfer delay.",
      badge: "Mission Critical (0ms)",
      specs: [
        "1 kVA to 500 kVA Modular Capacity",
        "VFI-SS-111 True Online Architecture",
        "N+1 Parallel Redundancy Available",
        "Hot-Swappable Power Modules"
      ]
    },
    {
      id: "solar",
      number: "02",
      title: "Commercial & Domestic Rooftop Solar PV",
      subtitle: "Turnkey grid-tied, off-grid & hybrid solar installations engineered to eliminate CEB electricity bills",
      description: "Custom-engineered rooftop photovoltaic arrays utilizing Tier-1 N-Type TOPCon bifacial modules and high-efficiency transformerless three-phase grid-tied string inverters.",
      badge: "Tier-1 Photovoltaics",
      specs: [
        "3 kWp to 250 kWp Turnkey Solutions",
        "Net-Metering, Net-Accounting & Net-Plus",
        "Tier-1 N-Type TOPCon Bifacial Modules",
        "Anti-PID & Dual-MPPT Inverters"
      ]
    },
    {
      id: "battery",
      number: "03",
      title: "Battery Bank Diagnostics & Renewal",
      subtitle: "Professional conductance testing, cell impedance balancing & complete battery bank overhauls",
      description: "Comprehensive battery health auditing using calibrated impedance analyzers. We supply, commission, and maintain high-rate discharge AGM VRLA and rack-mounted LiFePO4 battery modules.",
      badge: "Certified Life Extension",
      specs: [
        "Hioki Battery Conductance Testing",
        "High-Rate Discharge 12V AGM VRLA",
        "Smart Lithium LiFePO4 48V/192V/384V",
        "Full String Cell Equalization"
      ]
    },
    {
      id: "amc",
      number: "04",
      title: "24/7 Power Plant Breakdown & AMC",
      subtitle: "Guaranteed SLA emergency response with scheduled preventive thermography & health checks",
      description: "Comprehensive Annual Maintenance Contracts (AMC) supervised directly by Eng. H.K.S. Dahampriya. Guaranteed on-site arrival within 2-4 hours across the Western Province.",
      badge: "24/7 Rapid SLA",
      specs: [
        "< 2 Hour Western Province Dispatch",
        "Quarterly Thermographic FLIR Audits",
        "Genuine OEM Spare Parts in Stock",
        "Complete Power Quality IEEE 519 Logging"
      ]
    }
  ],
  about: {
    badge: "Supervising Engineering Authority",
    headline: "Engineered for Resilience. Led by Sri Lankan Power Systems Expertise.",
    bioParagraph1: "SNT Projects (Pvt) Ltd was founded with a singular commitment: delivering uncompromised power reliability to Sri Lankan enterprises and homeowners navigating demanding grid conditions.",
    bioParagraph2: "Directly guided by Eng. H.K.S. Dahampriya (AMIE(SL), B.Sc. Eng (Hons) Electrical & Information), our Kelaniya headquarters houses full-stack testing instrumentation, genuine spare assemblies, and factory-trained technicians.",
    experienceYears: "12+ Years",
    completedProjects: "250+ Sites",
    amcClientsCount: "65+ Clients"
  }
};

const DEFAULT_INQUIRIES = [
  {
    id: "INQ-94821",
    date: "2026-09-22 10:15 AM",
    name: "Dr. K. Jayasuriya",
    phone: "+94 77 123 4567",
    email: "kjayasuriya@medicare.lk",
    service: "High-Reliability UPS & Battery Systems",
    message: "Requesting quotation for 20 kVA 3-phase online UPS for surgical theater diagnostic equipment.",
    status: "New"
  },
  {
    id: "INQ-94802",
    date: "2026-09-20 03:40 PM",
    name: "Sunil Perera (Managing Director)",
    phone: "+94 71 889 9001",
    email: "sunil@pereraapparel.com",
    service: "Commercial & Domestic Rooftop Solar PV",
    message: "Factory roof in Biyagama. Monthly CEB bill approx Rs. 380,000. Looking for 60 kWp turnkey proposal.",
    status: "Contacted"
  }
];

let siteConfig = JSON.parse(JSON.stringify(DEFAULT_COMPANY_CONFIG));
let currentTariff = 'domestic';
let currentBill = 45000;
let currentFaultFilter = 'all';
let inquiryFilterStatus = 'all';
let inquirySearchQuery = '';

const FAULT_CODES_DB = [
  {
    code: "F09 / E04",
    title: "Inverter Soft Start & Bus Overvoltage Failure",
    category: "inverter",
    severity: "critical",
    cause: "DC bus capacitor pre-charging timeout or DC bus surge caused by lightning/grid phase shift.",
    action: "Disconnect AC & DC isolators for 10 minutes. Inspect DC surge arrestor (SPD) status window. Contact SNT Emergency Dispatch."
  },
  {
    code: "F14 / E18",
    title: "CEB Grid Islanding / Out of Permissible Limits",
    category: "grid",
    severity: "warning",
    cause: "CEB utility grid voltage below 190V or above 253V, or grid frequency outside 49.5Hz - 50.5Hz.",
    action: "Inverter enters safety disconnect (CEB anti-islanding protocol). Verify line voltage at AC breaker with calibrated True-RMS meter."
  },
  {
    code: "ISO Fault / R-ISO Low",
    title: "PV Array Insulation Resistance Degradation",
    category: "solar",
    severity: "critical",
    cause: "Damaged DC cable insulation, rodent chewing, moisture ingress in rooftop MC4 connectors, or water in combiner box.",
    action: "Do not touch exposed metal rails. Measure string insulation resistance (Megger test > 1 MΩ). Clean & re-crimp MC4 connectors."
  },
  {
    code: "Overload 110% - 150%",
    title: "Critical UPS Load Exceeding Rated Capacity",
    category: "inverter",
    severity: "warning",
    cause: "Inductive motor starting surge (compressor, laser printer) or accidental load addition without power audit.",
    action: "UPS auto-transfers to static bypass. Shed non-critical auxiliary loads immediately to prevent thermal breaker trip."
  },
  {
    code: "Batt Disconnected / High-R",
    title: "Battery String Open Circuit or Cell Sulphation",
    category: "battery",
    severity: "critical",
    cause: "Blown DC inline fuse, loose inter-cell torque connection, or severe plate sulphation in AGM VRLA block.",
    action: "Check DC breaker status. Perform impedance / conductance test on individual 12V blocks. Replace degraded cells."
  },
  {
    code: "DC Injection High",
    title: "Excessive DC Current Fed Into CEB Grid",
    category: "grid",
    severity: "critical",
    cause: "Grid-tied inverter H-bridge transformerless DC offset sensor drift exceeding CEB standards (< 0.5% rated current).",
    action: "Firmware sensor re-calibration or power board replacement by Eng. H.K.S. Dahampriya."
  },
  {
    code: "Temp High / Overheat",
    title: "Power Semiconductor Heatsink Over-Temperature",
    category: "inverter",
    severity: "warning",
    cause: "Blocked intake air filters, failed cooling fans, or high ambient temperature in UPS battery room (> 35°C).",
    action: "Clear ventilation grilles, verify fan rotation, and inspect room HVAC cooling unit."
  },
  {
    code: "PV String Voltage Unbalanced",
    title: "Severe String Voltage Mismatch (> 15%)",
    category: "solar",
    severity: "warning",
    cause: "Tree branch or rooftop water tank shading, cracked solar module glass, or blown string bypass diode.",
    action: "Inspect rooftop array for physical shading. Trace string open circuit voltage (Voc) under uniform irradiance."
  }
];

/* ========================================================
   INITIALIZATION
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadStoredConfig();
  hydrateSiteConfig();
  initMobileMenu();
  initSolarCalculator();
  initFaultCodes();
  calculateUpsRuntime();
  calculateSolarLayout();
  simulateGridQuality();
  initAiAssistant();
  updateInquiryCountBadge();

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          const drawer = document.getElementById('mobileDrawer');
          if (drawer) drawer.classList.remove('active');
        }
      }
    });
  });
});

/* ========================================================
   CONFIGURATION & HYDRATION
   ======================================================== */
function loadStoredConfig() {
  try {
    const saved = localStorage.getItem('snt_site_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      siteConfig = {
        ...DEFAULT_COMPANY_CONFIG,
        ...parsed,
        solarRates: { ...DEFAULT_COMPANY_CONFIG.solarRates, ...(parsed.solarRates || {}) },
        hero: { ...DEFAULT_COMPANY_CONFIG.hero, ...(parsed.hero || {}) },
        about: { ...DEFAULT_COMPANY_CONFIG.about, ...(parsed.about || {}) },
        services: parsed.services && parsed.services.length === 4 ? parsed.services : DEFAULT_COMPANY_CONFIG.services
      };
    }

    if (!localStorage.getItem('snt_inquiries')) {
      localStorage.setItem('snt_inquiries', JSON.stringify(DEFAULT_INQUIRIES));
    }
  } catch (e) {
    console.warn("Storage not available, using defaults", e);
  }
}

function saveConfigToStorage() {
  try {
    localStorage.setItem('snt_site_config', JSON.stringify(siteConfig));
  } catch (e) {
    console.warn("Unable to save config", e);
  }
  hydrateSiteConfig();
}

function hydrateSiteConfig() {
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, '');
  const telLink = `tel:${siteConfig.phone.replace(/[\s-]/g, '')}`;
  const waUrl = siteConfig.whatsappUrl || `https://wa.me/${cleanPhone}`;

  // Top Bar
  setText('topAddress', siteConfig.address);
  setText('topEmail', siteConfig.email);
  setText('topLeadEngineer', siteConfig.leadEngineer);
  setText('topPhoneText', siteConfig.phone);
  setHref('topPhoneLink', telLink);
  setHref('topEmailLink', `mailto:${siteConfig.email}`);

  // Navigation
  setText('navPhone', siteConfig.phone);
  setHref('navPhoneLink', telLink);
  setHref('navWhatsAppLink', waUrl);
  setHref('mobilePhoneLink', telLink);
  setHref('mobileWhatsAppLink', waUrl);
  setText('mobileDrawerTitle', siteConfig.name);
  setText('mobileDrawerAddress', siteConfig.address);

  // Hero
  if (siteConfig.hero) {
    setText('heroKicker', siteConfig.hero.kicker);
    setText('heroHeadline', siteConfig.hero.headline);
    setText('heroDesc', siteConfig.hero.description);
    setText('heroGuaranteeTitle', siteConfig.hero.guaranteeTitle);
    setText('heroUptimeStat', siteConfig.hero.uptimeStat);
    setText('heroUptimeSubtext', siteConfig.hero.uptimeSubtext);

    const guaranteeList = document.getElementById('heroGuaranteePoints');
    if (guaranteeList && siteConfig.hero.guaranteePoints) {
      guaranteeList.innerHTML = siteConfig.hero.guaranteePoints.map(pt => `
        <div class="point-item">
          <svg class="icon tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          <span>${escapeHtml(pt)}</span>
        </div>
      `).join('');
    }
  }

  // Services
  if (siteConfig.services && siteConfig.services.length) {
    siteConfig.services.forEach((s, idx) => {
      const i = idx + 1;
      setText(`svcTitle${i}`, s.title);
      setText(`svcSub${i}`, s.subtitle);
      setText(`svcDesc${i}`, s.description);
      setText(`svcBadge${i}`, s.badge);

      const specsList = document.getElementById(`svcSpecs${i}`);
      if (specsList && s.specs) {
        specsList.innerHTML = s.specs.map(spec => `
          <div class="spec-item">
            <svg class="icon tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${escapeHtml(spec)}</span>
          </div>
        `).join('');
      }
    });
  }

  // About
  if (siteConfig.about) {
    setText('aboutBadge', siteConfig.about.badge);
    setText('aboutHeadline', siteConfig.about.headline);
    setText('aboutBio1', siteConfig.about.bioParagraph1);
    setText('aboutBio2', siteConfig.about.bioParagraph2);
    setText('aboutExpYears', siteConfig.about.experienceYears);
  }
  setText('aboutLeadPhone', siteConfig.phone);
  setHref('aboutLeadPhoneLink', telLink);
  setText('aboutLeadAddress', siteConfig.address);

  // Contact
  setText('contactCompanyName', siteConfig.name);
  setText('contactLeadName', siteConfig.leadEngineer);
  setText('contactAddress', siteConfig.address);
  setText('contactPhone', siteConfig.phone);
  setHref('contactPhoneLink', telLink);
  setText('contactEmail', siteConfig.email);
  setHref('contactEmailLink', `mailto:${siteConfig.email}`);
  setText('contactHours', siteConfig.hours);
  setText('contactSla', `24/7 Breakdown Dispatch SLA: ${siteConfig.sla}`);

  // Social
  setHref('contactLinkedInLink', siteConfig.linkedIn);
  setHref('contactFacebookLink', siteConfig.facebook);
  setHref('contactWhatsAppBtn', waUrl);
  setHref('footerLinkedInLink', siteConfig.linkedIn);
  setHref('footerFacebookLink', siteConfig.facebook);
  setHref('footerWhatsAppLink', waUrl);
  setText('footerWhatsAppText', `WhatsApp: ${siteConfig.phone}`);
  setText('footerLeadEngineer', siteConfig.leadEngineer);
  setText('footerEngineerCreds', siteConfig.engineerCreds);
  setText('footerAddress', siteConfig.address);
  setText('footerCompanyName', siteConfig.name);

  // Floating
  const floatWa = `${waUrl}?text=${encodeURIComponent("Hello Eng. H.K.S. Dahampriya, I would like to inquire about SNT Projects services.")}`;
  setHref('floatingWhatsAppLink', floatWa);
  setText('floatingWhatsAppLabel', `Chat: ${siteConfig.phone}`);

  syncCmsInputs();
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

function setHref(id, url) {
  const el = document.getElementById(id);
  if (el && url) el.setAttribute('href', url);
}

function syncCmsInputs() {
  setVal('editCompanyName', siteConfig.name);
  setVal('editLeadEngineer', siteConfig.leadEngineer);
  setVal('editEngineerTitle', siteConfig.engineerTitle);
  setVal('editEngineerCreds', siteConfig.engineerCreds);
  setVal('editPhone', siteConfig.phone);
  setVal('editEmail', siteConfig.email);
  setVal('editAddress', siteConfig.address);
  setVal('editHours', siteConfig.hours);
  setVal('editSla', siteConfig.sla);
  setVal('editLinkedIn', siteConfig.linkedIn);
  setVal('editFacebook', siteConfig.facebook);
  setVal('editWhatsAppUrl', siteConfig.whatsappUrl);

  if (siteConfig.hero) {
    setVal('editHeroKicker', siteConfig.hero.kicker);
    setVal('editHeroHeadline', siteConfig.hero.headline);
    setVal('editHeroDesc', siteConfig.hero.description);
    setVal('editHeroGuaranteeTitle', siteConfig.hero.guaranteeTitle);
    if (siteConfig.hero.guaranteePoints) {
      setVal('editHeroPoint1', siteConfig.hero.guaranteePoints[0] || '');
      setVal('editHeroPoint2', siteConfig.hero.guaranteePoints[1] || '');
      setVal('editHeroPoint3', siteConfig.hero.guaranteePoints[2] || '');
      setVal('editHeroPoint4', siteConfig.hero.guaranteePoints[3] || '');
    }
    setVal('editHeroUptimeStat', siteConfig.hero.uptimeStat);
    setVal('editHeroUptimeSubtext', siteConfig.hero.uptimeSubtext);
  }

  if (siteConfig.services) {
    siteConfig.services.forEach((s, idx) => {
      const i = idx + 1;
      setVal(`editSvcTitle${i}`, s.title);
      setVal(`editSvcSub${i}`, s.subtitle);
      setVal(`editSvcDesc${i}`, s.description);
      setVal(`editSvcBadge${i}`, s.badge);
      setVal(`editSvcSpecs${i}`, s.specs ? s.specs.join('\n') : '');
    });
  }

  setVal('editDomesticRate', siteConfig.solarRates.domestic);
  setVal('editCommercialRate', siteConfig.solarRates.commercial);
  setVal('editCostPerKw', siteConfig.solarRates.costPerKw);
  setVal('editSunHours', siteConfig.solarRates.sunHours);

  if (siteConfig.about) {
    setVal('editAboutBadge', siteConfig.about.badge);
    setVal('editAboutHeadline', siteConfig.about.headline);
    setVal('editAboutBio1', siteConfig.about.bioParagraph1);
    setVal('editAboutBio2', siteConfig.about.bioParagraph2);
    setVal('editAboutExp', siteConfig.about.experienceYears);
    setVal('editAboutProjects', siteConfig.about.completedProjects);
    setVal('editAboutClients', siteConfig.about.amcClientsCount);
  }
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.value = val;
}

/* ========================================================
   MOBILE NAVIGATION
   ======================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');
  if (menuToggle && drawer) {
    menuToggle.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });
  }
}

/* ========================================================
   SOLAR ROI CALCULATOR
   ======================================================== */
function initSolarCalculator() {
  const billSlider = document.getElementById('billSlider');
  if (billSlider) {
    billSlider.addEventListener('input', (e) => {
      currentBill = parseInt(e.target.value, 10);
      updateCalculatorResults();
    });
  }
  updateCalculatorResults();
}

function setTariff(type) {
  currentTariff = type;
  const domBtn = document.getElementById('tariffDomestic');
  const comBtn = document.getElementById('tariffCommercial');
  if (domBtn && comBtn) {
    if (type === 'domestic') {
      domBtn.classList.add('active');
      comBtn.classList.remove('active');
    } else {
      domBtn.classList.remove('active');
      comBtn.classList.add('active');
    }
  }
  updateCalculatorResults();
}

function setBillValue(val) {
  currentBill = val;
  const billSlider = document.getElementById('billSlider');
  if (billSlider) billSlider.value = val;

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.includes(Math.round(val / 1000) + 'k')) {
      btn.classList.add('active');
    }
  });

  updateCalculatorResults();
}

function updateCalculatorResults() {
  const billDisplay = document.getElementById('billDisplay');
  if (billDisplay) {
    billDisplay.textContent = 'Rs. ' + currentBill.toLocaleString();
  }

  const ratePerKwh = currentTariff === 'domestic'
    ? siteConfig.solarRates.domestic
    : siteConfig.solarRates.commercial;

  const monthlyUnits = currentBill / ratePerKwh;
  const dailyKwh = monthlyUnits / 30;
  const perfRatio = 0.82;
  const recommendedKw = Math.max(1.5, parseFloat((dailyKwh / (siteConfig.solarRates.sunHours * perfRatio)).toFixed(1)));
  const monthlyGen = Math.round(recommendedKw * siteConfig.solarRates.sunHours * 30 * perfRatio);
  const monthlySavings = Math.round(Math.min(currentBill * 0.95, monthlyGen * ratePerKwh));
  const totalCostLkr = Math.round(recommendedKw * siteConfig.solarRates.costPerKw);
  const costInLakhs = (totalCostLkr / 100000).toFixed(1);
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? (totalCostLkr / annualSavings).toFixed(1) : "4.0";
  const annualKwh = monthlyGen * 12;
  const co2Tons = ((annualKwh * 0.8) / 1000).toFixed(1);
  const trees = Math.round(annualKwh * 0.015);
  const savings25YrMillions = ((annualSavings * 25) / 1000000).toFixed(1);

  setText('resCapacity', recommendedKw);
  setText('resGeneration', monthlyGen.toLocaleString());
  setText('resSavings', 'Rs. ' + monthlySavings.toLocaleString());
  setText('resCost', 'Rs. ' + costInLakhs + ' L');
  const elPayback = document.getElementById('resPayback');
  if (elPayback) elPayback.innerHTML = paybackYears + ' <small>Years</small>';
  setText('resCo2', co2Tons + ' Tons of CO₂');
  setText('resTrees', trees);
  setText('res25Year', 'Rs. ' + savings25YrMillions + ' Million');
}

function applyCalculatorQuote() {
  const cap = document.getElementById('resCapacity') ? document.getElementById('resCapacity').textContent : '8.1';

  const serviceSelect = document.getElementById('inqService');
  if (serviceSelect) {
    serviceSelect.value = "Rooftop Solar PV Installation";
  }

  const messageBox = document.getElementById('inqMessage');
  if (messageBox) {
    messageBox.value = `I am inquiring about a ${cap} kWp Rooftop Solar PV System for my premises. Current monthly CEB bill is Rs. ${currentBill.toLocaleString()}. Please provide a site inspection and detailed formal quote.`;
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function prefillInquiry(serviceName) {
  const serviceSelect = document.getElementById('inqService');
  if (serviceSelect) {
    if (serviceName.includes('UPS')) {
      serviceSelect.value = "Industrial UPS System Installation";
    } else if (serviceName.includes('Solar')) {
      serviceSelect.value = "Rooftop Solar PV Installation";
    } else if (serviceName.includes('Battery')) {
      serviceSelect.value = "UPS Battery Bank Replacement";
    } else if (serviceName.includes('Breakdown') || serviceName.includes('AMC') || serviceName.includes('Maintenance')) {
      serviceSelect.value = "Routine Solar & UPS Maintenance (AMC)";
    }
  }

  const messageBox = document.getElementById('inqMessage');
  if (messageBox) {
    messageBox.value = `Hello Eng. H.K.S. Dahampriya, I would like to request an engineering assessment and quotation regarding ${serviceName}.`;
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

/* ========================================================
   ENGINEERING DIAGNOSTIC TOOLS
   ======================================================== */
function switchToolTab(tabId) {
  const tabs = ['faults', 'runtime', 'layout', 'grid'];
  tabs.forEach(t => {
    const pane = document.getElementById('pane' + t.charAt(0).toUpperCase() + t.slice(1));
    const btn = document.getElementById('tabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    if (pane) pane.classList.remove('active');
    if (btn) btn.classList.remove('active');
  });

  const activePane = document.getElementById('pane' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
  const activeBtn = document.getElementById('tabBtn' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
  if (activePane) activePane.classList.add('active');
  if (activeBtn) activeBtn.classList.add('active');
}

function initFaultCodes() {
  renderFaultCodes(FAULT_CODES_DB);
}

function renderFaultCodes(list) {
  const container = document.getElementById('faultCodesContainer');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; padding: 30px; text-align: center; color: #94a3b8;">No matching fault code found. Call Eng. H.K.S. Dahampriya at ${escapeHtml(siteConfig.phone)} for direct diagnostic assistance.</div>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="fault-card">
      <div class="fault-head">
        <span class="fault-code-badge">${escapeHtml(item.code)}</span>
        <span class="fault-severity ${item.severity}">${item.severity}</span>
      </div>
      <div class="fault-title">${escapeHtml(item.title)}</div>
      <div class="fault-cause"><strong>Root Cause:</strong> ${escapeHtml(item.cause)}</div>
      <div class="fault-action-box">
        <strong>Certified Engineering Protocol:</strong>
        ${escapeHtml(item.action)}
      </div>
    </div>
  `).join('');
}

function setFaultFilter(cat) {
  currentFaultFilter = cat;
  document.querySelectorAll('.cat-pill').forEach(pill => pill.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  filterFaultCodes();
}

function filterFaultCodes() {
  const search = (document.getElementById('faultSearchInput')?.value || '').toLowerCase().trim();
  const filtered = FAULT_CODES_DB.filter(item => {
    const matchesCat = currentFaultFilter === 'all' || item.category === currentFaultFilter;
    const matchesText = item.code.toLowerCase().includes(search) ||
                        item.title.toLowerCase().includes(search) ||
                        item.cause.toLowerCase().includes(search);
    return matchesCat && matchesText;
  });
  renderFaultCodes(filtered);
}

function calculateUpsRuntime() {
  const loadKw = parseFloat(document.getElementById('runtimeLoad')?.value || '5');
  const batteryAh = parseFloat(document.getElementById('runtimeAh')?.value || '100');
  const busVoltage = parseFloat(document.getElementById('runtimeVoltage')?.value || '192');
  const chem = document.getElementById('runtimeChemistry')?.value || 'vrla';

  setText('runtimeLoadVal', loadKw + ' kW');
  setText('runtimeAhVal', batteryAh + ' Ah');

  const totalKwh = (batteryAh * busVoltage) / 1000;
  const inverterEfficiency = 0.92;
  const usableDod = chem === 'lifepo4' ? 0.90 : 0.70;
  const usableKwh = totalKwh * usableDod;
  const hours = (usableKwh * inverterEfficiency) / loadKw;
  const minutes = Math.round(hours * 60);
  const dischargeCurrent = (loadKw * 1000) / (busVoltage * inverterEfficiency);
  const cRate = (dischargeCurrent / batteryAh).toFixed(2);

  setText('resRuntimeMinutes', minutes);
  setText('resRuntimeHours', (minutes / 60).toFixed(1));
  setText('resBatteryKwh', totalKwh.toFixed(1) + ' kWh');
  setText('resDischargeCurrent', dischargeCurrent.toFixed(1) + ' A');
  setText('resCRate', `${cRate} C (${cRate < 0.5 ? 'Safe / High Longevity' : 'High Discharge'})`);
}

function calculateSolarLayout() {
  const length = parseFloat(document.getElementById('roofLength')?.value || '12');
  const width = parseFloat(document.getElementById('roofWidth')?.value || '8');
  const panelWatt = parseFloat(document.getElementById('panelWattage')?.value || '600');
  const usableRatio = parseFloat(document.getElementById('usableRatio')?.value || '0.70');

  const grossArea = length * width;
  const grossSqft = Math.round(grossArea * 10.764);
  const usableArea = grossArea * usableRatio;
  const panelArea = panelWatt === 600 ? 2.75 : 2.58;
  const maxPanels = Math.floor(usableArea / panelArea);
  const arrayKwp = ((maxPanels * panelWatt) / 1000).toFixed(1);
  const dailyYield = (arrayKwp * 4.4 * 0.82).toFixed(1);

  setText('resMaxPanels', maxPanels);
  setText('resArrayKwp', arrayKwp + ' kWp');
  setText('resGrossArea', `${grossArea} m² (${grossSqft.toLocaleString()} sqft)`);
  setText('resUsableArea', `${usableArea.toFixed(1)} m²`);
  setText('resDailyYield', `~${dailyYield} kWh / day`);
}

function simulateGridQuality() {
  const scenario = document.getElementById('gridScenario')?.value || 'normal';

  const elV = document.getElementById('dispVoltage');
  const elF = document.getElementById('dispFrequency');
  const elThd = document.getElementById('dispThd');
  const elPf = document.getElementById('dispPf');
  const elStatus = document.getElementById('dispGridStatus');
  const elDesc = document.getElementById('dispGridDesc');
  const elAction = document.getElementById('dispGridAction');
  const elUpsMode = document.getElementById('dispUpsMode');

  if (scenario === 'normal') {
    if (elV) elV.textContent = "230.4 V";
    if (elF) elF.textContent = "50.02 Hz";
    if (elThd) elThd.textContent = "2.4%";
    if (elPf) elPf.textContent = "0.98";
    if (elStatus) {
      elStatus.className = "grid-status-badge good";
      elStatus.textContent = "IEEE 519 Compliant · Safe for UPS & Solar";
    }
    if (elDesc) elDesc.textContent = "Voltage is well within CEB permissible range (230V ± 6%). Harmonic distortion is low, preventing transformer overheating.";
    if (elAction) elAction.textContent = "Standard Surge Protection (SPD Type II)";
    if (elUpsMode) elUpsMode.textContent = "Online Normal (Utility Fed)";
  } else if (scenario === 'sag') {
    if (elV) elV.textContent = "186.2 V (Severe Sag)";
    if (elF) elF.textContent = "49.65 Hz";
    if (elThd) elThd.textContent = "4.8%";
    if (elPf) elPf.textContent = "0.85";
    if (elStatus) {
      elStatus.className = "grid-status-badge warning";
      elStatus.textContent = "Low Line Brownout · UPS Battery Supporting";
    }
    if (elDesc) elDesc.textContent = "Utility line voltage dropped below 190V. Online UPS seamlessly maintains clean 230V output with zero transfer time.";
    if (elAction) elAction.textContent = "Check tap changer or install Auto Voltage Regulator";
    if (elUpsMode) elUpsMode.textContent = "Battery Mode / Booster Active";
  } else if (scenario === 'surge') {
    if (elV) elV.textContent = "258.9 V (High Voltage)";
    if (elF) elF.textContent = "50.32 Hz";
    if (elThd) elThd.textContent = "3.2%";
    if (elPf) elPf.textContent = "0.91";
    if (elStatus) {
      elStatus.className = "grid-status-badge danger";
      elStatus.textContent = "Overvoltage Hazard · Solar Inverter Disconnect Risk";
    }
    if (elDesc) elDesc.textContent = "Line voltage exceeds CEB 253V upper statutory threshold. Grid-tied inverters may enter safety trip (F14 Overvoltage).";
    if (elAction) elAction.textContent = "Report to CEB Area Engineer; inspect neutral-earth bond";
    if (elUpsMode) elUpsMode.textContent = "Online Buck Mode (Regulating 230V)";
  } else if (scenario === 'harmonics') {
    if (elV) elV.textContent = "228.1 V";
    if (elF) elF.textContent = "50.08 Hz";
    if (elThd) elThd.textContent = "9.8% (Non-Compliant)";
    if (elPf) elPf.textContent = "0.74";
    if (elStatus) {
      elStatus.className = "grid-status-badge danger";
      elStatus.textContent = "IEEE 519 Violation · High Harmonic Distortion";
    }
    if (elDesc) elDesc.textContent = "Total Harmonic Distortion (THD) exceeds the 5% IEEE limit. High risk of motor overheating and neutral conductor overloading.";
    if (elAction) elAction.textContent = "Install Active Harmonic Filter (AHF) or 12-Pulse UPS";
    if (elUpsMode) elUpsMode.textContent = "IGBT Active Filtering Active";
  }
}

/* ========================================================
   PUBLIC INQUIRY SUBMISSION
   ======================================================== */
function handleInquirySubmit(e) {
  e.preventDefault();

  const name = document.getElementById('inqName')?.value.trim();
  const phone = document.getElementById('inqPhone')?.value.trim();
  const email = document.getElementById('inqEmail')?.value.trim() || 'N/A';
  const service = document.getElementById('inqService')?.value;
  const message = document.getElementById('inqMessage')?.value.trim() || 'No additional note provided.';

  if (!name || !phone) {
    alert("Please enter your name and contact phone number.");
    return;
  }

  const newInquiry = {
    id: 'INQ-' + Date.now().toString().slice(-5),
    date: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
    name,
    phone,
    email,
    service,
    message,
    status: 'New'
  };

  try {
    const existing = JSON.parse(localStorage.getItem('snt_inquiries') || '[]');
    existing.unshift(newInquiry);
    localStorage.setItem('snt_inquiries', JSON.stringify(existing));
  } catch (err) {
    console.warn("Storage error", err);
  }

  const form = document.getElementById('publicInquiryForm');
  if (form) form.style.display = 'none';

  const successBox = document.getElementById('inquirySuccessBox');
  if (successBox) {
    successBox.style.display = 'block';
    setText('successName', name);
    setText('successService', service);
    setText('successPhone', phone);

    const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, '');
    const waText = encodeURIComponent(
      `Hello Eng. H.K.S. Dahampriya,\n\nI have just submitted a quotation request on your website.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n*Details:* ${message}`
    );
    const waBtn = document.getElementById('successWhatsAppBtn');
    if (waBtn) waBtn.href = `https://wa.me/${cleanPhone}?text=${waText}`;
  }

  updateInquiryCountBadge();
}

function resetInquiryForm() {
  const form = document.getElementById('publicInquiryForm');
  if (form) {
    form.reset();
    form.style.display = 'block';
  }
  const successBox = document.getElementById('inquirySuccessBox');
  if (successBox) successBox.style.display = 'none';
}

function updateInquiryCountBadge() {
  try {
    const list = JSON.parse(localStorage.getItem('snt_inquiries') || '[]');
    setText('inquiryCountBadge', list.length);
  } catch (e) {}
}

/* ========================================================
   ADMIN CMS
   ======================================================== */
function openAdminModal() {
  const backdrop = document.getElementById('adminModalBackdrop');
  if (backdrop) {
    backdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    const isAuthed = sessionStorage.getItem('snt_admin_auth') === 'true';
    if (isAuthed) {
      showCmsView();
    } else {
      showLoginView();
    }
  }
}

function closeAdminModal() {
  const backdrop = document.getElementById('adminModalBackdrop');
  if (backdrop) backdrop.style.display = 'none';
  document.body.style.overflow = '';
}

function showLoginView() {
  const login = document.getElementById('adminLoginState');
  const cms = document.getElementById('adminCmsState');
  if (login) login.style.display = 'block';
  if (cms) cms.style.display = 'none';
  const input = document.getElementById('adminPasswordInput');
  if (input) {
    input.value = '';
    input.focus();
  }
  const err = document.getElementById('adminLoginError');
  if (err) err.style.display = 'none';
}

function showCmsView() {
  const login = document.getElementById('adminLoginState');
  const cms = document.getElementById('adminCmsState');
  if (login) login.style.display = 'none';
  if (cms) cms.style.display = 'block';
  renderInquiriesInCms();
  syncCmsInputs();
}

function handleAdminLogin(e) {
  e.preventDefault();
  const input = document.getElementById('adminPasswordInput')?.value.trim();
  const err = document.getElementById('adminLoginError');
  const validPass = localStorage.getItem('snt_admin_password') || 'admin123';

  if (input === validPass) {
    sessionStorage.setItem('snt_admin_auth', 'true');
    if (err) err.style.display = 'none';
    showCmsView();
  } else {
    if (err) err.style.display = 'block';
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem('snt_admin_auth');
  showLoginView();
}

function switchCmsTab(tabId) {
  const tabs = ['company', 'hero', 'services', 'solar', 'about', 'inquiries', 'security'];
  tabs.forEach(t => {
    const pane = document.getElementById('cmsPane' + t.charAt(0).toUpperCase() + t.slice(1));
    const btn = document.getElementById('cmsTabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    if (pane) pane.classList.remove('active');
    if (btn) btn.classList.remove('active');
  });

  const activePane = document.getElementById('cmsPane' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
  const activeBtn = document.getElementById('cmsTabBtn' + tabId.charAt(0).toUpperCase() + tabId.slice(1));
  if (activePane) activePane.classList.add('active');
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'inquiries') {
    renderInquiriesInCms();
  }
}

function saveCompanySettings(e) {
  e.preventDefault();
  siteConfig.name = document.getElementById('editCompanyName').value.trim();
  siteConfig.leadEngineer = document.getElementById('editLeadEngineer').value.trim();
  siteConfig.engineerTitle = document.getElementById('editEngineerTitle').value.trim();
  siteConfig.engineerCreds = document.getElementById('editEngineerCreds').value.trim();
  siteConfig.phone = document.getElementById('editPhone').value.trim();
  siteConfig.email = document.getElementById('editEmail').value.trim();
  siteConfig.address = document.getElementById('editAddress').value.trim();
  siteConfig.hours = document.getElementById('editHours').value.trim();
  siteConfig.sla = document.getElementById('editSla').value.trim();
  siteConfig.linkedIn = document.getElementById('editLinkedIn').value.trim();
  siteConfig.facebook = document.getElementById('editFacebook').value.trim();
  siteConfig.whatsappUrl = document.getElementById('editWhatsAppUrl').value.trim();

  saveConfigToStorage();
  showSaveToast("Company profile, telephone, email, and social media links updated successfully!");
}

function saveHeroSettings(e) {
  e.preventDefault();
  siteConfig.hero = siteConfig.hero || {};
  siteConfig.hero.kicker = document.getElementById('editHeroKicker').value.trim();
  siteConfig.hero.headline = document.getElementById('editHeroHeadline').value.trim();
  siteConfig.hero.description = document.getElementById('editHeroDesc').value.trim();
  siteConfig.hero.guaranteeTitle = document.getElementById('editHeroGuaranteeTitle').value.trim();
  siteConfig.hero.guaranteePoints = [
    document.getElementById('editHeroPoint1').value.trim(),
    document.getElementById('editHeroPoint2').value.trim(),
    document.getElementById('editHeroPoint3').value.trim(),
    document.getElementById('editHeroPoint4').value.trim()
  ].filter(p => p.length > 0);
  siteConfig.hero.uptimeStat = document.getElementById('editHeroUptimeStat').value.trim();
  siteConfig.hero.uptimeSubtext = document.getElementById('editHeroUptimeSubtext').value.trim();

  saveConfigToStorage();
  showSaveToast("Hero section and guarantee credentials updated!");
}

function saveServicesSettings(e) {
  e.preventDefault();
  siteConfig.services = siteConfig.services || [];
  [1, 2, 3, 4].forEach(i => {
    const idx = i - 1;
    if (!siteConfig.services[idx]) siteConfig.services[idx] = {};
    siteConfig.services[idx].title = document.getElementById(`editSvcTitle${i}`).value.trim();
    siteConfig.services[idx].subtitle = document.getElementById(`editSvcSub${i}`).value.trim();
    siteConfig.services[idx].description = document.getElementById(`editSvcDesc${i}`).value.trim();
    siteConfig.services[idx].badge = document.getElementById(`editSvcBadge${i}`).value.trim();
    const specsRaw = document.getElementById(`editSvcSpecs${i}`).value.trim();
    siteConfig.services[idx].specs = specsRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  });

  saveConfigToStorage();
  showSaveToast("All 4 Core Services successfully updated!");
}

function saveSolarRates(e) {
  e.preventDefault();
  siteConfig.solarRates.domestic = parseFloat(document.getElementById('editDomesticRate').value);
  siteConfig.solarRates.commercial = parseFloat(document.getElementById('editCommercialRate').value);
  siteConfig.solarRates.costPerKw = parseFloat(document.getElementById('editCostPerKw').value);
  siteConfig.solarRates.sunHours = parseFloat(document.getElementById('editSunHours').value);

  saveConfigToStorage();
  updateCalculatorResults();
  showSaveToast("Solar tariff rates and calculation constants updated!");
}

function saveAboutSettings(e) {
  e.preventDefault();
  siteConfig.about = siteConfig.about || {};
  siteConfig.about.badge = document.getElementById('editAboutBadge').value.trim();
  siteConfig.about.headline = document.getElementById('editAboutHeadline').value.trim();
  siteConfig.about.bioParagraph1 = document.getElementById('editAboutBio1').value.trim();
  siteConfig.about.bioParagraph2 = document.getElementById('editAboutBio2').value.trim();
  siteConfig.about.experienceYears = document.getElementById('editAboutExp').value.trim();
  siteConfig.about.completedProjects = document.getElementById('editAboutProjects').value.trim();
  siteConfig.about.amcClientsCount = document.getElementById('editAboutClients').value.trim();

  saveConfigToStorage();
  showSaveToast("About SNT & Leadership biography updated!");
}

function toggleManualInquiryForm() {
  const el = document.getElementById('cmsManualInquiryBox');
  if (el) {
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }
}

function handleManualInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('manualInqName')?.value.trim();
  const phone = document.getElementById('manualInqPhone')?.value.trim();
  const email = document.getElementById('manualInqEmail')?.value.trim() || 'N/A';
  const service = document.getElementById('manualInqService')?.value;
  const location = document.getElementById('manualInqLocation')?.value.trim() || '';
  const notes = document.getElementById('manualInqNotes')?.value.trim() || 'Logged manually by staff.';

  if (!name || !phone) {
    alert("Name and phone are required.");
    return;
  }

  const combinedMessage = location ? `Location: ${location}\n${notes}` : notes;

  const newInq = {
    id: 'INQ-' + Date.now().toString().slice(-5),
    date: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
    name,
    phone,
    email,
    service,
    message: combinedMessage,
    status: 'New'
  };

  try {
    const list = JSON.parse(localStorage.getItem('snt_inquiries') || '[]');
    list.unshift(newInq);
    localStorage.setItem('snt_inquiries', JSON.stringify(list));
  } catch (err) {}

  e.target.reset();
  toggleManualInquiryForm();
  renderInquiriesInCms();
  updateInquiryCountBadge();
  showSaveToast("New customer inquiry successfully recorded!");
}

function handleInquirySearch(val) {
  inquirySearchQuery = (val || '').toLowerCase().trim();
  renderInquiriesInCms();
}

function filterInquiries(status) {
  inquiryFilterStatus = status;
  ['All', 'New', 'Contacted', 'Closed'].forEach(s => {
    const btn = document.getElementById('filterBtn' + s);
    if (btn) btn.classList.remove('active');
  });
  const active = document.getElementById('filterBtn' + (status === 'all' ? 'All' : status));
  if (active) active.classList.add('active');
  renderInquiriesInCms();
}

function renderInquiriesInCms() {
  const container = document.getElementById('cmsInquiriesList');
  if (!container) return;

  let list = [];
  try {
    list = JSON.parse(localStorage.getItem('snt_inquiries') || '[]');
  } catch (e) { list = []; }

  const filtered = list.filter(item => {
    const matchesStatus = inquiryFilterStatus === 'all' || (item.status || 'New') === inquiryFilterStatus;
    const matchesSearch = !inquirySearchQuery ||
      item.name.toLowerCase().includes(inquirySearchQuery) ||
      item.phone.toLowerCase().includes(inquirySearchQuery) ||
      (item.service && item.service.toLowerCase().includes(inquirySearchQuery)) ||
      (item.message && item.message.toLowerCase().includes(inquirySearchQuery));
    return matchesStatus && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="padding: 30px; text-align: center; color: #94a3b8; font-size: 0.85rem;">No customer inquiries found matching filter criteria.</div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const cleanNum = item.phone.replace(/[^0-9]/g, '');
    const waText = encodeURIComponent(`Hello ${item.name}, thank you for contacting SNT Projects regarding ${item.service}. Eng. H.K.S. Dahampriya and our power systems engineering team are reviewing your request.`);
    const status = item.status || 'New';
    const statusClass = status === 'New' ? 'badge-new' : (status === 'Contacted' ? 'badge-contacted' : 'badge-closed');

    return `
      <div class="inquiry-record-card">
        <div class="rec-head">
          <div class="rec-title-wrap">
            <span class="rec-name">${escapeHtml(item.name)}</span>
            <span class="inq-status-badge ${statusClass}">${status}</span>
          </div>
          <span class="rec-date">${escapeHtml(item.date)}</span>
        </div>
        <div class="rec-details">
          <div><strong>Phone:</strong> <a href="tel:${escapeHtml(item.phone)}" style="color: #38bdf8;">${escapeHtml(item.phone)}</a> | <strong>Email:</strong> ${escapeHtml(item.email || 'N/A')}</div>
          <div><strong>Requested Service:</strong> ${escapeHtml(item.service)}</div>
          <div class="rec-msg-box"><strong>Message:</strong> ${escapeHtml(item.message)}</div>
        </div>
        <div class="rec-actions">
          <select onchange="updateInquiryStatus('${item.id}', this.value)" class="inq-status-select">
            <option value="New" ${status === 'New' ? 'selected' : ''}>Status: New</option>
            <option value="Contacted" ${status === 'Contacted' ? 'selected' : ''}>Status: Contacted</option>
            <option value="Closed" ${status === 'Closed' ? 'selected' : ''}>Status: Closed</option>
          </select>
          <a href="https://wa.me/${cleanNum}?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-outline-small" style="color: #34d399;">WhatsApp Client</a>
          <a href="tel:${escapeHtml(item.phone)}" class="btn-outline-small">Call Client</a>
          <button class="btn-outline-small" onclick="deleteInquiry('${item.id}')" style="color: #f87171;">Delete</button>
        </div>
      </div>
    `;
  }).join('');
}

function updateInquiryStatus(id, newStatus) {
  try {
    let list = JSON.parse(localStorage.getItem('snt_inquiries') || '[]');
    list = list.map(item => item.id === id ? { ...item, status: newStatus } : item);
    localStorage.setItem('snt_inquiries', JSON.stringify(list));
    renderInquiriesInCms();
  } catch (e) {}
}

function deleteInquiry(id) {
  if (!confirm("Are you sure you want to delete this inquiry record?")) return;
  try {
    let list = JSON.parse(localStorage.getItem('snt_inquiries') || '[]');
    list = list.filter(item => item.id !== id);
    localStorage.setItem('snt_inquiries', JSON.stringify(list));
    renderInquiriesInCms();
    updateInquiryCountBadge();
  } catch (e) {}
}

function clearAllInquiries() {
  if (!confirm("Clear all received customer inquiries history?")) return;
  try {
    localStorage.setItem('snt_inquiries', JSON.stringify([]));
    renderInquiriesInCms();
    updateInquiryCountBadge();
  } catch (e) {}
}

function handlePasscodeChange(e) {
  e.preventDefault();
  const current = document.getElementById('editCurrentPasscode')?.value.trim();
  const newPass = document.getElementById('editNewPasscode')?.value.trim();
  const confirmPass = document.getElementById('editConfirmPasscode')?.value.trim();
  const errBox = document.getElementById('passcodeChangeError');
  const validCurrent = localStorage.getItem('snt_admin_password') || 'admin123';

  if (current !== validCurrent) {
    if (errBox) {
      errBox.textContent = "Current passcode is incorrect.";
      errBox.style.display = 'block';
    }
    return;
  }

  if (newPass.length < 4) {
    if (errBox) {
      errBox.textContent = "New passcode must be at least 4 characters.";
      errBox.style.display = 'block';
    }
    return;
  }

  if (newPass !== confirmPass) {
    if (errBox) {
      errBox.textContent = "New passcodes do not match.";
      errBox.style.display = 'block';
    }
    return;
  }

  try {
    localStorage.setItem('snt_admin_password', newPass);
  } catch (e) {}

  if (errBox) errBox.style.display = 'none';
  e.target.reset();
  showSaveToast("Admin security passcode changed successfully!");
}

function exportSiteDataBackup() {
  const backup = {
    siteConfig,
    inquiries: (() => {
      try { return JSON.parse(localStorage.getItem('snt_inquiries') || '[]'); } catch (e) { return []; }
    })(),
    exportedAt: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `snt-projects-backup-${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showSaveToast("Site data backup JSON exported successfully!");
}

function importSiteDataBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      if (data.siteConfig) {
        siteConfig = { ...DEFAULT_COMPANY_CONFIG, ...data.siteConfig };
        saveConfigToStorage();
      }
      if (data.inquiries && Array.isArray(data.inquiries)) {
        localStorage.setItem('snt_inquiries', JSON.stringify(data.inquiries));
      }
      syncCmsInputs();
      renderInquiriesInCms();
      updateInquiryCountBadge();
      showSaveToast("Site data successfully restored from backup!");
    } catch (err) {
      alert("Invalid backup JSON file.");
    }
  };
  reader.readAsText(file);
}

function resetToFactoryDefaults() {
  if (!confirm("Are you sure you want to reset all content and rates back to official defaults?")) {
    return;
  }
  siteConfig = JSON.parse(JSON.stringify(DEFAULT_COMPANY_CONFIG));
  saveConfigToStorage();
  syncCmsInputs();
  updateCalculatorResults();
  showSaveToast("Website reset to official engineering defaults!");
}

function showSaveToast(msg) {
  let toast = document.getElementById('cmsToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cmsToast';
    toast.className = 'cms-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* ========================================================
   FLOATING AI ASSISTANT
   ======================================================== */
function initAiAssistant() {
  const container = document.getElementById('chatMessagesContainer');
  if (container && container.children.length === 0) {
    appendBotMessage(
      `Hello! I am the **SNT Power & Solar Engineering Assistant**, supervised directly by **${siteConfig.leadEngineer}** (${siteConfig.engineerCreds}).\n\nHow can I help you today? You can ask about:\n- Sizing a rooftop solar system for your CEB bill\n- Selecting a 3-phase industrial UPS for data centers\n- Troubleshooting inverter fault codes (F09, E04, ISO Fault)\n- Booking an on-site power quality inspection in Kelaniya or Western Province.`
    );
  }
}

function toggleAiAssistant() {
  const win = document.getElementById('aiChatWindow');
  if (!win) return;
  if (win.style.display === 'none' || win.style.display === '') {
    win.style.display = 'flex';
    const input = document.getElementById('aiChatInput');
    if (input) input.focus();
  } else {
    win.style.display = 'none';
  }
}

function resetAiChat() {
  const container = document.getElementById('chatMessagesContainer');
  if (container) {
    container.innerHTML = '';
    initAiAssistant();
  }
}

function askAiQuestion(question) {
  const input = document.getElementById('aiChatInput');
  if (input) input.value = question;
  sendAiMessage();
}

function sendAiMessage() {
  const input = document.getElementById('aiChatInput');
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;

  appendUserMessage(q);
  input.value = '';

  setTimeout(() => {
    const response = generateAiEngineeringResponse(q);
    appendBotMessage(response);
  }, 350);
}

function appendUserMessage(text) {
  const container = document.getElementById('chatMessagesContainer');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `<div>${escapeHtml(text)}</div><span class="chat-msg-time">${getCurrentTimeString()}</span>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendBotMessage(markdown) {
  const container = document.getElementById('chatMessagesContainer');
  if (!container) return;
  const div = document.createElement('div');
  div.className = 'chat-msg bot';
  div.innerHTML = `<div>${parseSimpleMarkdown(markdown)}</div><span class="chat-msg-time">${getCurrentTimeString()}</span>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function getCurrentTimeString() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(str) {
  return (str || '').toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function parseSimpleMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n- /g, '<br>&bull; ')
    .replace(/\n/g, '<br>');
}

function generateAiEngineeringResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('engineer') || q.includes('dahampriya') || q.includes('contact') || q.includes('phone') || q.includes('address') || q.includes('kelaniya') || q.includes('call') || q.includes('email') || q.includes('location')) {
    return `**Supervising Lead Engineer:**\n${siteConfig.leadEngineer} (${siteConfig.engineerCreds}).\n\n**Operations Headquarters:**\n${siteConfig.address}.\n\n**Direct Telephone Hotline:**\n📞 **${siteConfig.phone}**\n\n**Official Email:**\n✉️ ${siteConfig.email}\n\n**WhatsApp Support:**\nYou can reach out directly via WhatsApp at ${siteConfig.phone} for rapid response.`;
  }

  if (q.includes('solar') || q.includes('bill') || q.includes('ceb') || q.includes('leco') || q.includes('panel') || q.includes('roi') || q.includes('kw') || q.includes('capacity')) {
    return `**Solar Power Sizing Principles:**\n\nUnder Sri Lanka solar irradiance (average 4.4 Peak Sun Hours/day in Kelaniya and Western Province):\n- **Rs. 25,000 bill:** Needs approx **4 - 5 kWp** rooftop solar system.\n- **Rs. 45,000 bill:** Needs approx **8 - 10 kWp** rooftop solar system.\n- **Rs. 100,000+ bill:** Needs **18 - 25 kWp** commercial rooftop solar system.\n\nWe provide complete CEB / LECO Net-Metering, Net-Accounting, and Net-Plus approvals, Tier-1 Bifacial panels with 25-Year warranties, and anodized aluminium wind-load mounting.\n\n👉 *Use our interactive Solar ROI Calculator on the page to customize your exact bill savings.*`;
  }

  if (q.includes('ups') || q.includes('battery') || q.includes('backup') || q.includes('runtime') || q.includes('kva') || q.includes('double-conversion') || q.includes('amc')) {
    return `**Industrial UPS & Energy Storage Systems:**\n\n- **Zero Transfer Time (0ms):** True Online Double-Conversion (VFI-SS-111 standard) eliminates micro-outages and protects sensitive medical and datacenter equipment.\n- **Capacities:** 1 kVA to 500 kVA (Single-phase and 3-Phase with N+1 modular redundancy).\n- **Battery Chemistries:** High-discharge 12V AGM VRLA and 6,000+ cycle Lithium LiFePO4 batteries with active smart BMS.\n\nWe also offer comprehensive **Annual Maintenance Contracts (AMC)** with guaranteed on-site arrival within 2-4 hours in the Western Province.`;
  }

  if (q.includes('fault') || q.includes('code') || q.includes('f09') || q.includes('e04') || q.includes('iso') || q.includes('error') || q.includes('alarm')) {
    return `**Inverter / UPS Diagnostics:**\n\n- **F09 / E04:** DC Bus overvoltage or soft-start charge failure. Check surge arrestors and DC bus capacitor health.\n- **F14 / E18:** CEB grid voltage or frequency out of statutory range (anti-islanding).\n- **ISO Fault:** PV string insulation resistance degraded below 1 MΩ, usually due to moisture or damaged MC4 connectors.\n\n👉 *Visit our 'Engineering Tools' section to browse all 50+ calibrated fault codes.*`;
  }

  if (q.includes('tool') || q.includes('plugin') || q.includes('calculator') || q.includes('diagnostic')) {
    return `**SNT Engineering Tools Suite:**\n\n1. **Inverter Fault Code Decoder:** Search 50+ certified error codes with root causes and corrective protocols.\n2. **UPS Battery Runtime Simulator:** Calculate backup minutes based on load (kW), battery Ah, and DC bus voltage.\n3. **Solar Rooftop Panel Layout Tool:** Calculate maximum panel fit and daily generation yield in Kelaniya.\n4. **CEB Grid Quality Simulator:** Monitor harmonic THD % and IEEE 519 compliance.\n\nAll tools are available under the 'Engineering Tools' tab!`;
  }

  if (q.includes('kohomada') || q.includes('karanna') || q.includes('mila') || q.includes('visthara') || q.includes('gana')) {
    return `ආයුබෝවන්! SNT Projects (Pvt) Ltd වෙතින් ඔබට අවශ්‍ය UPS පද්ධති, Solar PV පද්ධති, හෝ බැටරි සේවා පිළිබඳව **${siteConfig.leadEngineer}** මහතා සමඟ සෘජුවම සාකච්ඡා කළ හැක.\n\n- **ලිපිනය:** ${siteConfig.address}\n- **දුරකථන අංකය:** ${siteConfig.phone}\n- **WhatsApp:** ${siteConfig.phone}\n\nකරුණාකර පිටුවේ ඇති Contact Form එක පුරවා හෝ කෙලින්ම WhatsApp පණිවිඩයක් එවන්න.`;
  }

  return `Thank you for your inquiry. SNT Projects (Pvt) Ltd is supervised directly by **${siteConfig.leadEngineer}** (${siteConfig.engineerCreds}).\n\nWe specialize in:\n1. Industrial Online Double-Conversion UPS (1-500 kVA)\n2. Commercial & Domestic Rooftop Solar PV Systems\n3. Battery Bank Replacement (AGM VRLA & LiFePO4)\n4. Annual Maintenance Contracts (AMC) with 24/7 SLA\n\nWould you like to calculate your solar savings, use our UPS runtime simulator, or book an on-site visit in Kelaniya or Western Province? Call us at **${siteConfig.phone}**!`;
}