fetch('../components/footer.html')
.then(res => res.text())
.then(data => {
  document.getElementById('footer_comp').innerHTML = data;
});


/* =========================
   POLICY MODALS
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const openLinks =
        document.querySelectorAll(
            ".openModal"
        );

        const closeButtons =
        document.querySelectorAll(
            ".closeModal"
        );

        const modals =
        document.querySelectorAll(
            ".policyModal"
        );

        /* OPEN MODAL */

        openLinks.forEach(link => {

            link.addEventListener(
                "click",
                (e) => {

                    e.preventDefault();

                    const modalId =
                    link.dataset.modal;

                    const modal =
                    document.getElementById(
                        modalId
                    );

                    if(modal){

                        modal.classList.add(
                            "active"
                        );

                        document.body.style.overflow =
                        "hidden";

                    }

                }
            );

        });

        /* CLOSE BUTTON */

        closeButtons.forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const modal =
                    button.closest(
                        ".policyModal"
                    );

                    modal.classList.remove(
                        "active"
                    );

                    document.body.style.overflow =
                    "auto";

                }
            );

        });

        /* OUTSIDE CLICK */

        modals.forEach(modal => {

            modal.addEventListener(
                "click",
                (e) => {

                    if(
                        e.target === modal
                    ){

                        modal.classList.remove(
                            "active"
                        );

                        document.body.style.overflow =
                        "auto";

                    }

                }
            );

        });

        /* ESC KEY */

        document.addEventListener(
            "keydown",
            (e) => {

                if(
                    e.key === "Escape"
                ){

                    modals.forEach(modal => {

                        modal.classList.remove(
                            "active"
                        );

                    });

                    document.body.style.overflow =
                    "auto";

                }

            }
        );

    }
);