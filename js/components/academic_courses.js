fetch("components/academics_courses.html")
  .then((res) => res.text())
  .then((data) => {

    // Insert HTML into page
    document.getElementById("aca_courses").innerHTML = data;

    // ===============================
    // DOCUMENT DATA
    // ===============================

    const documents = [

      {
        id: 1,
        title: "Prospectus Sponsor's Candidate",
        category: "Schemes",
        date: "30 Nov 2020",
        size: "36 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/Various Courses/Prospectus Sponsor's Candidate.pdf"
      },

      {
        id: 2,
        title: "Prospectus of Fireman's Course (Pvt)",
        category: "Schemes",
        date: "30 Nov 2020",
        size: "23 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/Various Courses/Prospectus of Fireman's Course (Pvt).pdf"
      },

      {
        id: 3,
        title: "Prospectus of SubOfficer's Course (Pvt)",
        category: "Finance",
        date: "30 Nov 2020",
        size: "19 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/Various Courses/Prospectus of SubOfficer's Course (Pvt).pdf"
      },

      {
        id: 4,
        title: "SFTC-Prospectus of High Rise Building Course",
        category: "Finance",
        date: "30 Nov 2020",
        size: "67 KB",
        format: "PDF",
        language: "English/Marathi",
        file: "../../assets/docs/Various Courses/SFTC-Prospectus of High Rise Building Course.pdf"
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