function loadTitle(h2Text: string, h3Text: string) {
  fetch("../src/components/title/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      // Extraer solo el contenido del <body>

      const mainPage = document.getElementById("main_page");

      if (mainPage) {
        console.log("Template inserted into main_page:", mainPage);
        // mainPage.innerHTML = data;
        const one = "One";
        const h2Title = document.getElementById("h2_title") as HTMLElement;
        const h3Title = document.getElementById("h3_title") as HTMLElement;

        console.log(
          "ONE",
          mainPage,
          "h2Title:",
          h2Title,
          "h3Title:",
          h3Title,
          data
        );

        if (h2Title) {
          h2Title.textContent = h2Text;
          mainPage.appendChild(h2Title);
        }
        if (h3Title) {
          h3Title.textContent = h3Text;
          mainPage.appendChild(h3Title);
        }
      }
    })

    .catch((error) => console.error("Error loading title component:", error));
}

loadTitle("Home Page!", "H3 of Home page");
