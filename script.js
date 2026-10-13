
document.addEventListener("DOMContentLoaded", function () {
  // ---------- ELEMENTS ----------
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const themeToggle = document.getElementById("theme-toggle");
  const searchInput = document.querySelector(".search input");
  const postsContainer =
    document.querySelector(".posts") ||
    document.querySelector(".main-col");

  // ---------- SIDEBAR MENU ----------
  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });

    document.addEventListener("click", function (event) {
      const isMobile = window.innerWidth <= 900;
      const clickedOutside =
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target);

      if (isMobile && clickedOutside) {
        sidebar.classList.remove("open");
      }
    });
  }

  // ---------- DARK / LIGHT THEME ----------
  if (themeToggle) {
    const root = document.documentElement;
    const themeText = themeToggle.querySelector(".t-text");

    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);

      const isDark = theme === "dark";

      themeToggle.setAttribute("aria-checked", String(isDark));

      if (themeText) {
        themeText.textContent = isDark ? "Light mode" : "Dark mode";
      }
    }

    const initialTheme =
      root.getAttribute("data-theme") || "dark";

    applyTheme(initialTheme);

    themeToggle.addEventListener("click", function () {
      const currentTheme = root.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      applyTheme(nextTheme);
    });
  }

  // ---------- SEARCH POSTS ----------
  if (searchInput && postsContainer) {
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.trim().toLowerCase();
      const posts = postsContainer.querySelectorAll(".post");

      posts.forEach(function (post) {
        const text = post.textContent.toLowerCase();
        post.style.display = text.includes(query) ? "" : "none";
      });
    });
  }

  // ---------- BOTTOM NAVIGATION ----------
  const bottomNavItems = document.querySelectorAll(".bn-item");

  bottomNavItems.forEach(function (item) {
    item.addEventListener("click", function () {
      bottomNavItems.forEach(function (navItem) {
        navItem.classList.remove("active");
      });

      item.classList.add("active");
    });
  });

  // ---------- LIKE BUTTONS ----------
  document.addEventListener("click", function (event) {
    const likeButton = event.target.closest(
      ".like-btn, .upvote-btn, [data-action='like']"
    );

    if (!likeButton) return;

    likeButton.classList.toggle("liked");

    const countElement = likeButton.querySelector(".like-count");

    if (countElement) {
      const count = parseInt(countElement.textContent, 10) || 0;
      const liked = likeButton.classList.contains("liked");

      countElement.textContent = liked
        ? count + 1
        : Math.max(0, count - 1);
    }
  });

  // ---------- LOG OUT BUTTON ----------
  const logoutButton = document.querySelector(".nav-logout");

  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      const confirmed = window.confirm("Do you want to log out?");

      if (confirmed) {
        window.location.href = "index.html";
      }
    });
  }
});
