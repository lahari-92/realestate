/* =====================================================
   LAHARI'S REAL ESTATE AGENCY
   JAVASCRIPT
   ===================================================== */


/* ================= SEARCH BUTTON ================= */

const searchButton = document.querySelector(".search-btn");

if (searchButton) {

    searchButton.addEventListener("click", function () {

        const location =
            document.querySelectorAll(".search-item select")[0].value;

        const propertyType =
            document.querySelectorAll(".search-item select")[1].value;

        const price =
            document.querySelectorAll(".search-item select")[2].value;


        if (
            location === "Select Location" &&
            propertyType === "Property Type" &&
            price === "Select Price"
        ) {

            alert("Please select at least one search option.");

        } else {

            alert(
                "Searching properties...\n\n" +
                "Location: " + location +
                "\nProperty Type: " + propertyType +
                "\nPrice Range: " + price
            );

        }

    });

}


/* ================= CONTACT FORM ================= */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.querySelector("#name").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const phone =
            document.querySelector("#phone").value.trim();

        const message =
            document.querySelector("#message").value.trim();


        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            message === ""
        ) {

            alert("Please fill in all the fields.");

            return;

        }


        alert(
            "Thank you, " + name +
            "!\n\nYour message has been received. " +
            "Our team will contact you soon."
        );


        contactForm.reset();

    });

}


/* ================= SCROLL ANIMATION ================= */

const cards =
    document.querySelectorAll(".property-card");

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


/* ================= CURRENT YEAR ================= */

const yearElement =
    document.querySelector(".copyright p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        "© " + currentYear +
        " Lahari's Real Estate Agency. All Rights Reserved.";

}