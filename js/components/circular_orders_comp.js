fetch("components/circular_orders_comp.html")
  .then((res) => res.text())
  .then((data) => {

    // Insert HTML into page
    document.getElementById("circular-orders-comp").innerHTML = data;

    // ===============================
    // DOCUMENT DATA
    // ===============================

    const documents = [

      {
        id: 1,
        title: "Sub committee for amendment of Maharashtra Fire prevention and life safety measures Rules",
        category: "",
        date: "20 May 2023",
        size: "191 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/sub committee for amendment of Maharashtra Fire prevention and life safety measures Rules.pdf"
      },

      {
        id: 2,
        title: "Reg make name for uniform",
        category: "",
        date: "14 Jun 2025",
        size: "483 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/reg make name for uniform.pdf"
      },

      {
        id: 3,
        title: "Office order monsoon preparedness 2026",
        category: "",
        date: "23 Apr 2026",
        size: "160 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/office order monsoon prepradness 2026.pdf"
      },

      {
        id: 4,
        title: "Office order - monsoon preparedness 20.05.2026",
        category: "",
        date: "20 May 2025",
        size: "139 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/office order - monsoon prepradness 20.05.2026.pdf"
      },

      {
        id: 5,
        title: "Revised FPF for the Year 2025-26",
        category: "",
        date: "02 Apr 2025",
        size: "1.9 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Revised FPF for the Year 2025-26.pdf"
      },

      {
        id: 6,
        title: "Reg Add Charge of Asst Director and Fire Officer",
        category: "",
        date: "28 Feb 2022",
        size: "76 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Reg Add Charge of Asst Director and Fire Officer.pdf"
      },

      {
        id: 7,
        title: "Office Order-MFS-Fire Prevention in Industrial Occupancies with Annx-A & A-1-dtd.10.09.2014",
        category: "",
        date: "03 Jun 2021",
        size: "1.2 MB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Office Order-MFS-Fire Prevention in Industrial Occupancies with Annx-A & A-1-dtd.10.09.2014.pdf"
      },

      {
        id: 8,
        title: "Office Order for Reducing Regulatory Compliance PA 7",
        category: "",
        date: "10 Dec 2025",
        size: "901 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Office Order for Reducing Regulatory Compliance PA 7.pdf"
      },

      {
        id: 9,
        title: "Necessity about Renewal of Fire Approval",
        category: "",
        date: "31 Jan 2025",
        size: "817 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Necessity about Renewal of Fire Approval.pdf"
      },

      {
        id: 10,
        title: "Monsoon preparedness",
        category: "",
        date: "30 May 2024",
        size: "138 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Monsoon prepredness.pdf"
      },

      {
        id: 11,
        title: "Medal Circular-15th Aug 2023",
        category: "",
        date: "16 Nov 2022",
        size: "482 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Medal Circular-15th Aug.2023.pdf"
      },

      {
        id: 12,
        title: "Information sought regarding Fire in Hospital and Nursing Home",
        category: "",
        date: "10 Jun 2021",
        size: "1.8 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Information sought regarding Fire in Hospital and Nursing Home.pdf"
      },

      {
        id: 13,
        title: "Guidelines of Parking",
        category: "",
        date: "20 Jul 2024",
        size: "951 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Guidelines of Parking.pdf"
      },

      {
        id: 14,
        title: "Government order of Shri. S.S. Warick as a Director of MFS",
        category: "",
        date: "05 Mar 2021",
        size: "503 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Government order of Shri. S.S. Warick as a Director of MFS.pdf"
      },

      {
        id: 15,
        title: "Fire Audit of Various Vulnerable Building 12.04.2021",
        category: "",
        date: "15 Apr 2021",
        size: "1.9 MB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Fire Audit of Various Vulnerable Building 12.04.2021.pdf"
      },

      {
        id: 16,
        title: "Fire Approval in nearby PMRDA Municipal Area 08.04.2021",
        category: "",
        date: "19 Apr 2021",
        size: "973 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Fire Approval in nearby PMRDA Municipal Area..08.04.2021.pdf"
      },

      {
        id: 17,
        title: "Deposit of kalyankari yojna",
        category: "",
        date: "07 May 2025",
        size: "592 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Deposit of kalyankari yojna.pdf"
      },

      {
        id: 18,
        title: "Delegation of Power 16.07.25",
        category: "",
        date: "17 Jul 2025",
        size: "845 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Delegation of Power 16.07.25.pdf"
      },

      {
        id: 19,
        title: "Corrigendum circular reg Asst Director and Fire Officer",
        category: "",
        date: "02 Mar 2022",
        size: "163 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Corrigendum circular reg Asst Director and Fire Officer.pdf"
      },

      {
        id: 20,
        title: "Corrigendum Order - Inspection of Fire Risk Hazard of Various Vulnerable Buildings 28.04.2021",
        category: "",
        date: "29 Apr 2021",
        size: "802 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Corrigendum Order - Inspection of Fire Risk Hazard of Various Vulnerable Buildings 28.04.2021.pdf"
      },

      {
        id: 21,
        title: "Clarification about issue of Form B - 16.10.15",
        category: "",
        date: "17 Mar 2021",
        size: "399 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Clarification about issue of Form B..16.10.15.pdf"
      },

      {
        id: 22,
        title: "Circular-UDD-Fire Audit in Other Buildings - 25.06.2012",
        category: "",
        date: "30 Nov 2020",
        size: "160 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-UDD-Fire Audit in Other Buildings-25.06.2012.pdf"
      },

      {
        id: 23,
        title: "Circular-UDD-Fire Audit in Govt. Buildings - 22.06.2012",
        category: "",
        date: "30 Nov 2020",
        size: "178 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-UDD-Fire Audit in Govt. Buildings-22.06.2012.pdf"
      },

      {
        id: 24,
        title: "Circular-UDD-Avoid misuse of Fire Vehicles-17.04.2008",
        category: "",
        date: "30 Nov 2020",
        size: "4.5 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-UDD-Avoid misuse of Fire Vehicles-17.04.2008.pdf"
      },

      {
        id: 25,
        title: "Circular-UDD reg Addl. Staircase 20.10.2011",
        category: "",
        date: "30 Nov 2020",
        size: "1.1 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-UDD reg Addl. Staircase 20.10.2011.pdf"
      },

      {
        id: 26,
        title: "Circular-UDD No 129-Fire & Emergency Services - 08.2006",
        category: "",
        date: "30 Nov 2020",
        size: "2.1 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-UDD No 129-Fire & Emergency Services-08.2006.pdf"
      },

      {
        id: 27,
        title: "Circular-School Safety-UDD-5.8.2004 & School Edu.Dept - 22.7.2004",
        category: "",
        date: "30 Nov 2020",
        size: "374 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-School Safety-UDD-5.8.2004 & School Edu.Dept-22.7.2004.pdf"
      },

      {
        id: 28,
        title: "Circular-President's Medal -15th August, 2025 dt.27.01.2025",
        category: "",
        date: "28 Jan 2025",
        size: "790 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-President's Medal -15th August, 2025 dt.27.01.2025.pdf"
      },

      {
        id: 29,
        title: "Circular-NFSC Courses-Jan-2025 to All Mun.Corpns & SPA Dt. 04.10.2024",
        category: "",
        date: "07 Oct 2024",
        size: "1.2 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-NFSC Courses-Jan-2025 to All Mun.Corpns & SPA dt.04.10.2024.pdf"
      },

      {
        id: 30,
        title: "Circular-MHA-GOI-Norms of Fire Stations & Vehicles, etc-02.08.2006",
        category: "",
        date: "30 Nov 2020",
        size: "69 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MHA-GOI-Norms of Fire Stations & Vehicles, etc-02.08.2006.pdf"
      },

      {
        id: 31,
        title: "Circular-MFS-Wireless Detection System - 19.7.2012",
        category: "",
        date: "30 Nov 2020",
        size: "1.1 MB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Wireless Detection System-19.7.2012.pdf"
      },

      {
        id: 32,
        title: "Circular-MFS-Use of pipe for water based F.F.installation & Use of Fire Extinguishers - 7.8.2013",
        category: "",
        date: "30 Nov 2020",
        size: "141 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Use of pipe for water based F.F.installation & Use of Fire Extinguishers-7.8.2013.pdf"
      },

      {
        id: 33,
        title: "Circular-MFS-Use of Sodium Hypochlorite for sanitization by Fire Brigade to control COVID-19-Corona Virus - 27.03.2020",
        category: "",
        date: "30 Nov 2020",
        size: "1.7 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Use of Sodium Hypochlorite for sanitization by Fire Brigade to control COVID-19-Corona Virus - 27.03.2020.pdf"
      },

      {
        id: 34,
        title: "Circular-MFS-Use of Fire Extinguishers - 21.08.2013",
        category: "",
        date: "30 Nov 2020",
        size: "59 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Use of Fire Extinguishers-21.08.2013.pdf"
      },

      {
        id: 35,
        title: "Circular-MFS-Use of Fire Door - 15.12.2014",
        category: "",
        date: "30 Nov 2020",
        size: "86 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Use of Fire Door-15.12.2014.pdf"
      },

      {
        id: 36,
        title: "Circular-MFS-Regarding Fire Audit - 16.09.2015",
        category: "",
        date: "30 Nov 2020",
        size: "955 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Regarding Fire Audit -16.09.2015.pdf"
      },

      {
        id: 37,
        title: "Circular-MFS-Recruitment of Woman Fireman in Fire Service - 22.10.2019",
        category: "",
        date: "30 Nov 2020",
        size: "1.7 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Recruitment of Woman Fireman in Fire Service-22.10.2019.pdf"
      },

      {
        id: 38,
        title: "Circular-MFS-Recruitment of Fireman - 13.06.2012",
        category: "",
        date: "30 Nov 2020",
        size: "1.5 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Recruitment of Fireman-13.06.2012.pdf"
      },

      {
        id: 39,
        title: "Circular-MFS-Not to issue Building Map, Interior, etc. under RTI - 18.10.2013",
        category: "",
        date: "30 Nov 2020",
        size: "591 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Not to issue Building Map, Interior, etc. under RTI-18.10.2013.pdf"
      },

      {
        id: 40,
        title: "Circular-MFS-Not Necessity of renewal of Fire Approval - 30.10.2014",
        category: "",
        date: "30 Nov 2020",
        size: "50 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Not Necessity of renewal of Fire Approval-30.10.2014.pdf"
      },

      {
        id: 41,
        title: "Circular-MFS-No vehicle parking in Buiilding premises - 26.05.2015",
        category: "",
        date: "30 Nov 2020",
        size: "202 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-No vehicle  parking in Buiilding premises-26.05.2015.pdf"
      },

      {
        id: 42,
        title: "Circular-MFS-Issue of Form - A or Form -B - Digital Signature",
        category: "",
        date: "15 Feb 2022",
        size: "377 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Issue of Form - A or Form -B - Digital Signature.pdf"
      },

      {
        id: 43,
        title: "Circular-MFS-Implementation of SP 7 - 2016 National Building Code of India 2016 - Part IV - Fire and Life Safety-17.05.2017",
        category: "",
        date: "30 Nov 2020",
        size: "563 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-MFS-Implementation of SP 7 - 2016 National Building Code of India 2016 - Part IV - Fire and Life Safety-17.05.2017.pdf"
      },

      {
        id: 44,
        title: "Circular-Award of DG-FS,CD &HG's Disc & Commendation Certificate Dt. 27.01.2025",
        category: "",
        date: "28 Jan 2025",
        size: "460 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular-Award of DG-FS,CD &HG's Disc & Commendation Certificate dt.27.01.2025.pdf"
      },

      {
        id: 45,
        title: "Circular regarding carrying out Fire Fighting Installation and Audit during Lockdown",
        category: "",
        date: "11 May 2021",
        size: "1.2 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular regarding carrying out Fire Fighting Installation and Audit during Lockdown.pdf"
      },

      {
        id: 46,
        title: "Circular regarding Theatre Fire Approval from ULB's 09.06.2021",
        category: "",
        date: "11 Jun 2021",
        size: "647 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular regarding Theatre Fire Approval from ULB's 09.06.2021.pdf"
      },

      {
        id: 47,
        title: "Circular regarding DG Fire Disc-2026",
        category: "",
        date: "27 Jan 2026",
        size: "1.1 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular regarding DG Fire Disc-2026.pdf"
      },

      {
        id: 48,
        title: "Circular reg implementation of Fire & Emergency service fees",
        category: "",
        date: "09 Jun 2023",
        size: "566 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular reg implementation of Fire & Emergency service fees.pdf"
      },

      {
        id: 49,
        title: "Circular reg Jeev Rakshak Padak",
        category: "",
        date: "10 Mar 2026",
        size: "409 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular reg Jeev Rakshak Padak.pdf"
      },

      {
        id: 50,
        title: "Circular for nomination of President medal for Jan 2026",
        category: "",
        date: "31 Aug 2025",
        size: "5.9 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular for nomination of President medal for Jan 2026.pdf"
      },

      {
        id: 51,
        title: "Circular for President Fire Service Medal for 15th Aug 2026",
        category: "",
        date: "03 Feb 2026",
        size: "1.2 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular for President Fire Service Medal for 15th Aug 2026.pdf"
      },

      {
        id: 52,
        title: "Circular for Cinema reg Renewal 27.01.2022",
        category: "",
        date: "28 Jan 2022",
        size: "254 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular for Cinema reg Renewal 27.01.2022.pdf"
      },

      {
        id: 53,
        title: "Circular for All India Sporst-Delhi",
        category: "",
        date: "02 Feb 2025",
        size: "3.3 MB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Circular for All India Sporst-Delhi.pdf"
      },

      {
        id: 54,
        title: "Circular MFS -Agnisurksha Abhiyan -Revised Grant 06.05.2021",
        category: "",
        date: "02 Jun 2021",
        size: "7.1 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular MFS -Agnisurksha Abhiyan -Revised Grant 06.05.2021.pdf"
      },

      {
        id: 55,
        title: "Circular -MFS-15th Finance Commsion-Gap Analysis of Fire Services 07.07.21",
        category: "",
        date: "09 Jul 2021",
        size: "3.1 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular -MFS-15th Finance Commsion-Gap Analysis of Fire Services 07.07.21.pdf"
      },

      {
        id: 56,
        title: "Circular -Fire Preacautions and Safety Measures during Festival Seasons",
        category: "",
        date: "28 Oct 2021",
        size: "1.2 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/circulars-orders/Circular -Fire Preacautions and Safety Measures during Festival Seasons.pdf"
      },

      {
        id: 57,
        title: "Cancellation of Office Order regarding Various Vulnerable Building regard Fire Risk 22.07.25",
        category: "",
        date: "22 Jul 2025",
        size: "332 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Cancellation of Office Order regarding Various Vulnerable Building regard Fire Risk 22.07.25.pdf"
      },

      {
        id: 58,
        title: "CIRCULAR REG CNG & PETROL PUMPS",
        category: "",
        date: "13 Oct 2023",
        size: "222 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/circulars-orders/Corrigendum Order - Inspection of Fire Risk Hazard of Various Vulnerable Buildings 28.04.2021.pdf"
      },

    ];

    // ===============================
    // GET ELEMENTS
    // ===============================

    const container = document.getElementById("documentsList");
    const searchInput = document.getElementById("searchDocuments");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortSelect = document.getElementById("sortDocuments");

    // ===============================
    // POPULATE CATEGORY DROPDOWN
    // ===============================

    const categories = [...new Set(documents.map(doc => doc.category))];

    categories.forEach(category => {

      const option = document.createElement("option");

      option.value = category;

      option.textContent = category;

      categoryFilter.appendChild(option);

    });

    // ===============================
    // RENDER DOCUMENTS
    // ===============================

    function renderDocuments(data) {

      container.innerHTML = "";

      if (data.length === 0) {

        container.innerHTML = `
          <p style="text-align:center;padding:40px;">
            No documents found.
          </p>
        `;

        return;

      }

      data.forEach(doc => {

        container.innerHTML += `

        <div class="document-card">

          <div class="document-left">

            <div class="document-icon">
              📄
            </div>

            <div>

              <div class="document-title">
                ${doc.title}
              </div>

              <div class="document-meta">

                <span>📅 ${doc.date}</span>

                <span>${doc.language}</span>

                <span>${doc.size}</span>

                <span>${doc.format}</span>

              </div>

            </div>

          </div>

          <a href="${doc.file}" download>

            <button class="download-btn">
              Download
            </button>

          </a>

        </div>

        `;

      });

    }

    // ===============================
    // FILTER FUNCTION
    // ===============================

    function filterDocuments() {

      const search = searchInput.value.toLowerCase();

      const category = categoryFilter.value;

      const sort = sortSelect.value;

      let filtered = documents.filter(doc => {

        const matchesSearch =
          doc.title.toLowerCase().includes(search);

        const matchesCategory =
          category === "all" || doc.category === category;

        return matchesSearch && matchesCategory;

      });

      filtered.sort((a, b) => {

        const dateA = new Date(a.date);

        const dateB = new Date(b.date);

        return sort === "latest"
          ? dateB - dateA
          : dateA - dateB;

      });

      renderDocuments(filtered);

    }

    // ===============================
    // EVENTS
    // ===============================

    searchInput.addEventListener("input", filterDocuments);

    categoryFilter.addEventListener("change", filterDocuments);

    sortSelect.addEventListener("change", filterDocuments);

    // ===============================
    // INITIAL LOAD
    // ===============================

    renderDocuments(documents);

  })

  .catch(err => console.error(err));