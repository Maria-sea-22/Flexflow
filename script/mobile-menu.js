const mobileMenu = document.querySelector(".mobile-menu");
      const openMobileMenuButton = document.querySelector(
        ".header .menu-button"
      );
      const closeMobileMenuButton = document.querySelector(
        ".mobile-menu .close-button"
      );
      if (mobileMenu) {
        if (openMobileMenuButton) {
          openMobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.add("open");
          });
        }
        if (closeMobileMenuButton) {
          closeMobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
          });
        }
      }