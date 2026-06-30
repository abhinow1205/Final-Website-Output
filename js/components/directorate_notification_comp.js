fetch("components/directorate_notification_comp.html")
  .then((res) => res.text())
  .then((data) => {

    // Insert HTML into page
    document.getElementById("directorate-notification-comp").innerHTML = data;

    // ===============================
    // DOCUMENT DATA
    // ===============================

    const documents = [

      {
        id: 1,
        title: "Notification for the Fire (Amendment) Act, 2023",
        category: "Schemes",
        date: "31 May 2023",
        size: "240 KB",
        format: "PDF",
        language: "Marathi/English",
        file: "../../assets/docs/notifications/Notification for the Fire (Amendment) Act, 2023.pdf"
      },

      {
        id: 2,
        title: "Notification-UDD-Amendment in Fire Act-Increase in height of Hopital Buildings-06.04.2015",
        category: "Schemes",
        date: "30 Nov 2020",
        size: "102 KB",
        format: "PDF",
        language: "Marathi/English",
        file: "../../assets/docs/notifications/Notification-UDD-Amendment in Fire Act-Increase in height of Hopital Buildings-06.042015.pdf"
      },

      {
        id: 3,
        title: "Notification-UDD-Appelate Authority under Act & Rules-30.4.2011",
        category: "Finance",
        date: "30 Nov 2020",
        size: "181 KB",
        format: "PDF",
        language: "Marathi/English",
        file: "../../assets/docs/notifications/Notification-UDD-Appelate Authority under Act & Rules-30.4.2011.pdf"
      },

      {
        id: 4,
        title: "Notification-UDD-Appointment of date for Fire Act-English-6.12.2008",
        category: "Finance",
        date: "30 Nov 2020",
        size: "1.5 MB",
        format: "PDF",
        language: "English",
        file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for  Fire Act-English-6.12.2008.pdf"
      },

      {
        id: 5,
        title: "Notification-UDD-Appointment of date for Fire Act-English-Marathi-07.05.2010",
        category: "Finance",
        date: "30 Nov 2020",
        size: "1.3 MB",
        format: "PDF",
        language: "Marathi/English",
        file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for  Fire Act-English-Marathi-07.05.2010.pdf"
      },

      {
        id: 6,
        title: "Notification-UDD-Appointment of date for Fire Act (Marathi)-6.12.2008",
        category: "Finance",
        date: "30 Nov 2020",
        size: "1.3 MB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for Fire Act (Marathi)-6.12.2008.pdf"
      },

      {
        id: 7,
        title: "Notification-UDD-DMA-RR of Muncipal Councils-30.01.2017",
        category: "Finance",
        date: "30 Nov 2020",
        size: "256 KB",
        format: "PDF",
        language: "Marathi",
        file: "../../assets/docs/notifications/Notification-UDD-Appointment of date for Fire Act (Marathi)-6.12.2008.pdf"
      },

      {
        id: 8,
        title: "Notification-UDD-Fire Service Fee-03.03.2014",
        category: "Finance",
        date: "30 Nov 2020",
        size: "45 KB",
        format: "PDF",
        language: "Marathi/English",
        file: "../../assets/docs/notifications/Notification-UDD-Fire Service Fee-03.03.2014.pdf"
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