fetch("components/results_comp.html")
  .then((res) => res.text())
  .then((data) => {

    // Insert HTML into page
    document.getElementById("directorate-results").innerHTML = data;

    // ===============================
    // DOCUMENT DATA
    // ===============================

    const documents = [

      {
        id: 1,
        title: "2nd List Selected Candidates of Fireman Course - July 2025",
        category: "Schemes",
        date: "02 Jan 2026",
        size: "1.4 MB",
        format: "PDF",
        language: "Marathi",
        file: "assets/logos/Azaadi Logo.png"
      },

      {
        id: 2,
        title: "Allotment Letter for Sub Officer Course No.12 from July-2026-1",
        category: "Schemes",
        date: "03 June 2026",
        size: "330 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 3,
        title: "FIREMAN Batch No. 159 to 166 – RESULT",
        category: "Finance",
        date: "14 Dec 2021",
        size: "4.5 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 4,
        title: "FIREMAN Batch No.167 to 175-RESULT",
        category: "Finance",
        date: "19 Oct 2022",
        size: "2.4 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 5,
        title: "FTC 189 to 197 Result",
        category: "Finance",
        date: "09 Nov 2024",
        size: "2.6 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 6,
        title: "FTC 207 to 215 Result- PDF 250920 141752",
        category: "Finance",
        date: "02 Jan 2026",
        size: "3.0 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 7,
        title: "FTC Result 100 to 118",
        category: "Finance",
        date: "30 Nov 2020",
        size: "2.0 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 8,
        title: "FTC Result 119 to 128",
        category: "Finance",
        date: "30 Nov 2020",
        size: "2.2 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 9,
        title: "Fireman Result 198 to 206",
        category: "Finance",
        date: "27 Apr 2025",
        size: "2.2 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 10,
        title: "Fireman Result batch No. 183 to 188",
        category: "Finance",
        date: "29 Mar 2024",
        size: "1.7 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 11,
        title: "LIST OF SELECTED CANDIDATES OF FIREMAN'S COURSE-JULY-2025 BATCH",
        category: "Finance",
        date: "02 Jan 2026",
        size: "3.8 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 12,
        title: "List of Eligible Candidates & Waiting List for Fir 260102 164601",
        category: "Finance",
        date: "03 Jun 2026",
        size: "368 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 13,
        title: "List of Eligible Candidates & Waiting List for Sub 260102 182615",
        category: "Finance",
        date: "03 Jun 2026",
        size: "400 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 14,
        title: "List of Non Eligible Candidates for Sub Officer 260102 182634",
        category: "Finance",
        date: "03 Jan 2026",
        size: "194 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 15,
        title: "List of Non Eligible Candidates for Sub Officer 260102 182634-1",
        category: "Finance",
        date: "03 Jun 2026",
        size: "194 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 16,
        title: "List of Non Eligible Candidates of Firema 260102 164530-1",
        category: "Finance",
        date: "03 Jun 2026",
        size: "247 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 17,
        title: "List of Non Eligible Candidates of Firema 260102 164530",
        category: "Finance",
        date: "03 Jan 2026",
        size: "247 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 18,
        title: "List of selected candidates for Fireman's Course-January-2026 Batch",
        category: "Finance",
        date: "03 Jun 2026",
        size: "3.5 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 19,
        title: "List of selected candidates for Sub Officer's Course- July -2025",
        category: "Finance",
        date: "02 Jan 2026",
        size: "725 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 20,
        title: "List of selected candidates for Sub Officer's Course-July-2026 Batch-1",
        category: "Finance",
        date: "03 Jun 2026",
        size: "369 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 21,
        title: "Result -Sub Officer Course No.10",
        category: "Finance",
        date: "06 May 2025",
        size: "311 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 22,
        title: "Result of Fireman Batch 176 to 182",
        category: "Finance",
        date: "21 Sep 2023",
        size: "1.8 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 23,
        title: "Result of Sub Officer and Fire Prevention Officer Course – Batch No. 09",
        category: "Finance",
        date: "18 Mar 2024",
        size: "291 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 24,
        title: "Result of Sub Officer – Nashik Batch",
        category: "Finance",
        date: "18 Mar 2024",
        size: "233 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 25,
        title: "Result of all Competitions-FSW-2026 260416 182614",
        category: "Finance",
        date: "03 Jun 2026",
        size: "577 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 26,
        title: "Result-FTC-216 to FTC-225-1",
        category: "Finance",
        date: "03 Jun 2026",
        size: "2.9 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 27,
        title: "Second List of Selected Candidates for Fireman's Course -January-2026 Batch-1",
        category: "Finance",
        date: "03 Jun 2026",
        size: "1.7 MB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 28,
        title: "Sub Officer batch No. 08 Result",
        category: "Finance",
        date: "14 Dec 2021",
        size: "512 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 29,
        title: "List of sub officer for July batch",
        category: "Finance",
        date: "02 Jan 2026",
        size: "699 KB",
        format: "PDF",
        language: "English",
        file: "#"
      }


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