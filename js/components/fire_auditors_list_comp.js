fetch("components/fire_auditors_list_comp.html")
  .then((res) => res.text())
  .then((data) => {

    // Insert HTML into page
    document.getElementById("fire-auditors-list-comp").innerHTML = data;

    // ===============================
    // DOCUMENT DATA
    // ===============================

    const documents = [

      {
        id: 1,
        title: "Form W and Checklist",
        category: "English",
        date: "15 Jul 2025",
        size: "771 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/list-fire-auditors/Form W and Checklist.pdf"
      },

      {
        id: 2,
        title: "Form W and Checklist",
        category: "English",
        date: "15 Jul 2025",
        size: "138 KB",
        format: "DOCX",
        language: "English",
        file: "../../assets/docs/list-fire-auditors/Form W and Checklist.doc"
      },

      {
        id: 3,
        title: "List of MF & LSA Approved List Valid up to 31.12.2027",
        category: "English",
        date: "02 Feb 2026",
        size: "222 KB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/list-fire-auditors/List of MF & LSA Approved List Valid up to 31.12.2027.pdf"
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