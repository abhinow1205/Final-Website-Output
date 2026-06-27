fetch("components/M2_D3_IOS.html")
  .then((res) => res.text())
  .then((data) => {

    // Inject HTML
    document.getElementById("directorate_IOS").innerHTML = data;

    // ============================
    // SAMPLE DATA
    // ============================

    const documents = [

      {
        id: 1,
        title: "Maharashtra Agni Suraksha Abhiyan 2009",
        category: "Schemes",
        date: "30 Nov 2020",
        size: "397 KB",
        format: "PDF",
        language: "Marathi",
        file: "#"
      },

      {
        id: 2,
        title: "DPR Maharashtra Agni Suraksha Abhiyan",
        category: "Schemes",
        date: "30 Nov 2020",
        size: "52 KB",
        format: "PDF",
        language: "English",
        file: "#"
      },

      {
        id: 3,
        title: "Funds For Phase I",
        category: "Finance",
        date: "15 Feb 2022",
        size: "356 KB",
        format: "PDF",
        language: "English",
        file: "#"
      }

    ];

    const container = document.getElementById("documentsList");
    const searchInput = document.getElementById("searchDocuments");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortSelect = document.getElementById("sortDocuments");

    // Populate categories

    const categories = [...new Set(documents.map(doc => doc.category))];

    categories.forEach(category => {

      const option = document.createElement("option");

      option.value = category;

      option.textContent = category;

      categoryFilter.appendChild(option);

    });

    function renderDocuments(data) {

      container.innerHTML = "";

      if (data.length === 0) {

        container.innerHTML =
          "<p style='text-align:center;padding:40px;'>No documents found.</p>";

        return;

      }

      data.forEach(doc => {

        container.innerHTML += `

        <div class="document-card">

          <div class="document-left">

            <div class="document-icon">📄</div>

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

        const d1 = new Date(a.date);

        const d2 = new Date(b.date);

        return sort === "latest" ? d2 - d1 : d1 - d2;

      });

      renderDocuments(filtered);

    }

    searchInput.addEventListener("input", filterDocuments);

    categoryFilter.addEventListener("change", filterDocuments);

    sortSelect.addEventListener("change", filterDocuments);

    renderDocuments(documents);

  })
  .catch(console.error);