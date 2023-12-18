const sectionTitles = document.querySelectorAll(".section-title");

      sectionTitles.forEach((section) => {
        const parent = section.parentElement;
        section.addEventListener("click", function () {
          const content = this.nextElementSibling;

          // Hide all other sections
          sectionTitles.forEach((otherSection) => {
            if (otherSection !== this) {
              otherSection.nextElementSibling.style.display = "none";
              otherSection.parentElement.classList.remove("active");
            }
          });

          if (content.style.display === "block") {
            content.style.display = "none";
            parent.classList.remove("active");
          } else {
            content.style.display = "block";
            parent.classList.add("active");
          }
        });
      });