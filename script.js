
/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        if (navMenu.classList.contains("open")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });

}


/* =========================================
   FERMER LE MENU APRÈS UN CLIC
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    });

});


/* =========================================
   NAVBAR AU SCROLL
========================================= */

const siteHeader =
 document.getElementById("header");

window.addEventListener("scroll", () => {

    if (siteHeader) {

        if (window.scrollY > 30) {
            siteHeader.classList.add("scrolled");
        } else {
            siteHeader.classList.remove("scrolled");
        }

    }

});


/* =========================================
   BOUTON RETOUR EN HAUT
========================================= */

const topButton = document.getElementById("top-button");

window.addEventListener("scroll", () => {

    if (!topButton) return;

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


if (topButton) {

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   ANIMATION DES ÉLÉMENTS AU SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .country-card, .section-heading, .cta"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("animate-on-scroll");

    observer.observe(element);

});


/* =========================================
   WHATSAPP
========================================= */

const whatsappButton = document.getElementById("whatsapp-button");

if (whatsappButton) {

    whatsappButton.addEventListener("click", (event) => {

        event.preventDefault();

        /*
        REMPLACE LE NUMÉRO CI-DESSOUS
        PAR LE NUMÉRO WHATSAPP D'EDUCONNECT AFRICA.

        Format international :
        243XXXXXXXXX

        Exemple :
        243812345678
        */

        const phoneNumber = "243XXXXXXXXX";

        const message =
            "Bonjour Educ Connect Africa, je souhaite avoir plus d'informations sur vos services.";

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}
/* =========================================
   FAQ ACCORDÉON
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector(".faq-answer");

        /* Fermer les autres questions */

        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== faqItem) {

                item.classList.remove("active");

                const answer = item.querySelector(".faq-answer");

                answer.style.maxHeight = null;

                const otherQuestion =
                    item.querySelector(".faq-question");

                if (otherQuestion) {
                    otherQuestion.querySelector("span").textContent = "+";
                }

            }

        });


        /* Ouvrir / fermer la question sélectionnée */

        faqItem.classList.toggle("active");

        if (faqItem.classList.contains("active")) {

            faqAnswer.style.maxHeight =
                faqAnswer.scrollHeight + "px";

            question.querySelector("span").textContent = "−";

        } else {

            faqAnswer.style.maxHeight = null;

            question.querySelector("span").textContent = "+";

        }

    });

});
/* =====================================================
   EDUCONNECT AFRICA — NOUVELLES INTERACTIONS
===================================================== */


/* =====================================================
   1. NAVBAR AU SCROLL
===================================================== */

const header = document.getElementById("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =====================================================
   2. MENU MOBILE
===================================================== */



/* =====================================================
   3. BOUTON RETOUR EN HAUT
===================================================== */

const backTopButton =
 document.getElementById("top-button");

if (backTopButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTopButton.classList.add("show");

        } else {

            backTopButton.classList.remove("show");

        }

    });


    backTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   4. COMPTEURS ANIMÉS
===================================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target =
        Number(counter.dataset.target);

    let current = 0;

    const increment =
        Math.max(1, Math.ceil(target / 60));


    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

            return;

        }

        counter.textContent = current;

        requestAnimationFrame(updateCounter);

    };


    updateCounter();

};


if (counters.length > 0) {

    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounter(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}


/* =====================================================
   5. APPARITION DES ÉLÉMENTS AU SCROLL
===================================================== */

const revealElements = document.querySelectorAll(
    ".service-card, .process-card, .why-item, .stat-box"
);


if (animatedElements.length > 0) {

    animatedElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* =====================================================
   6. WHATSAPP
===================================================== */

const contactWhatsappButton =
    document.getElementById("whatsapp-button");


if (contactWhatsappButton) {

    contactWhatsappButton.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            const phoneNumber =
                "243XXXXXXXXX";

            const message =
                "Bonjour EduConnect Africa, je souhaite obtenir des informations sur vos services.";

            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}


/* =====================================================
   7. FERMER LE MENU MOBILE APRÈS UN CLIC
===================================================== */

if (navMenu) {

    const navLinks =
        navMenu.querySelectorAll(".nav-link");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });

}
/* =====================================================
   DÉTAILS DES PAYS - PAGE BOURSES
===================================================== */

(() => {

    const countryButtons =
        document.querySelectorAll(".country-more");

    const countryModal =
        document.getElementById("country-modal");

    const countryModalClose =
        document.getElementById("country-modal-close");

    const countryModalFlag =
        document.getElementById("country-modal-flag");

    const countryModalTitle =
        document.getElementById("country-modal-title");

    const countryModalText =
        document.getElementById("country-modal-text");


    if (!countryModal || countryButtons.length === 0) {
        return;
    }


    const countries = {

        maroc: {
            flag: "🇲🇦",
            title: "Étudier au Maroc",
            text: "Découvrez les possibilités d'études supérieures au Maroc et bénéficiez d'un accompagnement dans votre projet académique."
        },

        tunisie: {
            flag: "🇹🇳",
            title: "Étudier en Tunisie",
            text: "Explorez les opportunités d'études disponibles en Tunisie et préparez votre projet avec un accompagnement adapté."
        },

        bielorussie: {
            flag: "🇧🇾",
            title: "Étudier en Biélorussie",
            text: "Découvrez de nouvelles perspectives académiques en Biélorussie et bénéficiez d'un accompagnement dans les différentes étapes de votre projet."
        },

        algerie: {
            flag: "🇩🇿",
            title: "Étudier en Algérie",
            text: "Explorez les opportunités d'études en Algérie et découvrez les possibilités correspondant à votre parcours."
        }

    };


    countryButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const country =
                button.dataset.country;

            const information =
                countries[country];

            if (!information) {
                return;
            }

            countryModalFlag.textContent =
                information.flag;

            countryModalTitle.textContent =
                information.title;

            countryModalText.textContent =
                information.text;

            countryModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    function closeCountryModal() {

        countryModal.classList.remove("active");

        document.body.style.overflow = "";

    }


    countryModalClose.addEventListener(
        "click",
        closeCountryModal
    );


    countryModal.addEventListener(
        "click",
        (event) => {

            if (event.target === countryModal) {

                closeCountryModal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeCountryModal();

            }

        }
    );

})();