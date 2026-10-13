
(function () {
  "use strict";

  function init() {
    var root = document.documentElement;

    /* =====================================================
       1. WELCOME -> HOME
       ===================================================== */

    function setView(view) {
      root.setAttribute("data-view", view);
      window.scrollTo(0, 0);
    }

    var getStarted = document.getElementById("get-started");
    var haveAccount = document.getElementById("have-account");

    if (getStarted) {
      getStarted.addEventListener("click", function () {
        setView("home");
      });
    }

    if (haveAccount) {
      haveAccount.addEventListener("click", function () {
        setView("home");
      });
    }

    /* =====================================================
       2. SIDEBAR HELPERS
       Defined before logout listeners use them.
       ===================================================== */

    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    var menuBtn = document.getElementById("menu-btn");
    var mobile = window.matchMedia("(max-width: 900px)");

    function closeDrawer() {
      if (sidebar) sidebar.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
    }

    /* =====================================================
       3. LOGOUT
       ===================================================== */

    document.querySelectorAll(".logout").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        closeDrawer();
        setView("welcome");
      });
    });

    /* =====================================================
       4. DARK MODE
       ===================================================== */

    var themeBtn = document.getElementById("theme-toggle");

    var MOON =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>' +
      "</svg>";

    var SUN =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<circle cx="12" cy="12" r="4"/>' +
      '<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>' +
      "</svg>";

    if (themeBtn) {
      var themeIcon = themeBtn.querySelector(".t-icon");
      var themeText = themeBtn.querySelector(".t-text");

      function applyTheme(theme) {
        root.setAttribute("data-theme", theme);

        var dark = theme === "dark";

        themeBtn.setAttribute("aria-checked", String(dark));

        if (themeIcon) {
          themeIcon.innerHTML = dark ? SUN : MOON;
        }

        if (themeText) {
          themeText.textContent = dark ? "Light mode" : "Dark mode";
        }
      }

      var savedTheme = "dark";

      try {
        savedTheme = localStorage.getItem("theme") || "dark";
      } catch (e) {
        // Storage may be unavailable.
      }

      applyTheme(savedTheme);

      themeBtn.addEventListener("click", function () {
        var next =
          root.getAttribute("data-theme") === "dark" ? "light" : "dark";

        applyTheme(next);

        try {
          localStorage.setItem("theme", next);
        } catch (e) {
          // Theme still works if storage is unavailable.
        }
      });
    }

    /* =====================================================
       5. SIDEBAR / MOBILE DRAWER
       ===================================================== */

    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        if (mobile.matches) {
          if (!sidebar) return;

          var isOpen = sidebar.classList.toggle("open");

          if (overlay) {
            overlay.classList.toggle("open", isOpen);
          }
        } else {
          document.body.classList.toggle("collapsed");
        }
      });
    }

    if (overlay) {
      overlay.addEventListener("click", closeDrawer);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeDrawer();
      }
    });

    if (mobile.addEventListener) {
      mobile.addEventListener("change", closeDrawer);
    } else if (mobile.addListener) {
      // Compatibility with older browsers.
      mobile.addListener(closeDrawer);
    }

    document.querySelectorAll(".menu-item").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        if (item.classList.contains("logout")) return;

        document.querySelectorAll(".menu-item").forEach(function (menuItem) {
          menuItem.classList.remove("active");
        });

        item.classList.add("active");

        if (mobile.matches) {
          closeDrawer();
        }
      });
    });

    document.querySelectorAll(".bn-item").forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".bn-item").forEach(function (navItem) {
          navItem.classList.remove("active");
        });

        item.classList.add("active");
      });
    });

    /* =====================================================
       6. POSTS DATA
       ===================================================== */

    var posts = [
      {
        id: 1,
        community: "r/webdev",
        user: "u/code_wizard",
        hrs: 2,
        views: 57100,
        likes: 1243,
        comments: 187,
        title: "I rebuilt my portfolio with zero frameworks and it loads in 300ms",
        text: "Plain HTML, CSS and a bit of JavaScript. Turns out you can get very far without a build step.",
        image: "https://picsum.photos/seed/reddit1/900/560"
      },
      {
        id: 2,
        community: "r/css",
        user: "u/css_sorceress",
        hrs: 5,
        views: 21400,
        likes: 892,
        comments: 96,
        title: "CSS variables make dark mode a 10-line job",
        text: 'Define your colors on :root, override them under [data-theme="dark"], and flip one attribute with JavaScript. Save the choice in localStorage and you are done.'
      },
      {
        id: 3,
        community: "r/learnprogramming",
        user: "u/learner_lakshmi",
        hrs: 9,
        views: 88200,
        likes: 2310,
        comments: 412,
        title: "Finished my first full stack project after 3 months. Here is what I wish I knew",
        text: "Debug one error at a time, read the docs, and ship something small before something big. Consistency beat talent every single time."
      },
      {
        id: 4,
        community: "r/javascript",
        user: "u/js_ninja",
        hrs: 14,
        views: 9800,
        likes: 654,
        comments: 73,
        title: "Event delegation explained with a real example",
        text: "Instead of attaching a listener to every button, attach one to the parent and check event.target. Less memory, simpler code."
      },
      {
        id: 5,
        community: "r/earthporn",
        user: "u/hill_walker",
        hrs: 26,
        views: 120500,
        likes: 4310,
        comments: 152,
        title: "Sunset over the hills, taken during a weekend trip",
        text: "Not code related, but this view made the debugging week worth it.",
        image: "https://picsum.photos/seed/reddit2/900/560"
      },
      {
        id: 6,
        community: "r/learnprogramming",
        user: "u/backend_bob",
        hrs: 30,
        views: 6300,
        likes: 318,
        comments: 40,
        title: "Why does my fetch return a Promise and not my data?",
        text: "You need to await it or chain .then(). fetch returns a Promise, and response.json() returns another one."
      }
    ];

    var COLORS = [
      "#ff4500",
      "#0079d3",
      "#46a508",
      "#a855f7",
      "#e11d74",
      "#0e9aa7"
    ];

    var feed = document.getElementById("feed");
    var empty = document.getElementById("empty");
    var searchInput = document.getElementById("search");
    var currentSort = "hot";

    posts.forEach(function (post) {
      post.vote = 0;
      post.joined = false;
    });

    /* =====================================================
       7. POST HELPERS
       ===================================================== */

    function timeAgo(hrs) {
      return hrs < 24 ? hrs + "h" : Math.floor(hrs / 24) + "d";
    }

    function fmt(n) {
      return n >= 1000
        ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k"
        : String(n);
    }

    function esc(str) {
      return String(str).replace(/[&<>"']/g, function (c) {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        }[c];
      });
    }

    function make(tag, className, html) {
      var node = document.createElement(tag);

      if (className) node.className = className;
      if (html !== undefined) node.innerHTML = html;

      return node;
    }

    /* =====================================================
       8. POST ICONS
       ===================================================== */

    var ICON_UP =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<path d="M12 4l7 8h-4v8H9v-8H5l7-8z"/>' +
      "</svg>";

    var ICON_DOWN =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<path d="M12 20l-7-8h4V4h6v8h4l-7 8z"/>' +
      "</svg>";

    var ICON_COMMENT =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/>' +
      "</svg>";

    var ICON_SHARE =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<path d="M15 4l6 6-6 6M21 10H9a6 6 0 0 0-6 6v3"/>' +
      "</svg>";

    var ICON_MORE =
      '<svg class="i" viewBox="0 0 24 24">' +
      '<circle cx="12" cy="5" r="1.4"/>' +
      '<circle cx="12" cy="12" r="1.4"/>' +
      '<circle cx="12" cy="19" r="1.4"/>' +
      "</svg>";

    /* =====================================================
       9. BUILD A POST
       ===================================================== */

    function buildPost(post) {
      var article = make("article", "post");

      // Post header.
      var avatar = make(
        "span",
        "avatar sm",
        esc(post.community.charAt(2).toUpperCase())
      );

      avatar.style.background = COLORS[post.id % COLORS.length];

      var head = make("div", "post-head");

      head.appendChild(avatar);
      head.appendChild(
        make("span", "community", esc(post.community))
      );
      head.appendChild(
        make(
          "span",
          "",
          timeAgo(post.hrs) + " • " + fmt(post.views) + " views"
        )
      );

      var join = make("button", "join", "Join");
      join.type = "button";

      join.addEventListener("click", function () {
        post.joined = !post.joined;
        join.textContent = post.joined ? "Joined" : "Join";
        join.classList.toggle("joined", post.joined);
      });

      head.appendChild(join);

      var more = make("button", "icon-btn more", ICON_MORE);
      more.type = "button";
      more.setAttribute("aria-label", "More options");

      head.appendChild(more);
      article.appendChild(head);

      // Post title and text.
      article.appendChild(
        make("h3", "post-title", esc(post.title))
      );

      article.appendChild(
        make("p", "post-text", esc(post.text))
      );

      // Optional image.
      if (post.image) {
        var img = make("img", "post-image");

        img.src = post.image;
        img.alt = "Image for: " + post.title;
        img.loading = "lazy";

        img.addEventListener("error", function () {
          img.remove();
        });

        article.appendChild(img);
      }

      // Post actions.
      var actions = make("div", "post-actions");
      var pill = make("div", "vote-pill");

      var up = make("button", "vote-btn up", ICON_UP);
      up.type = "button";
      up.title = "Like";
      up.setAttribute("aria-label", "Like");

      var count = make("span", "vote-count");

      var down = make("button", "vote-btn down", ICON_DOWN);
      down.type = "button";
      down.title = "Dislike";
      down.setAttribute("aria-label", "Dislike");

      pill.appendChild(up);
      pill.appendChild(count);
      pill.appendChild(make("span", "vote-sep"));
      pill.appendChild(down);

      function paintVotes() {
        count.textContent = fmt(post.likes + post.vote);

        count.className =
          "vote-count" +
          (post.vote === 1 ? " up" : post.vote === -1 ? " down" : "");

        up.classList.toggle("on", post.vote === 1);
        down.classList.toggle("on", post.vote === -1);
      }

      paintVotes();

      up.addEventListener("click", function () {
        post.vote = post.vote === 1 ? 0 : 1;
        paintVotes();
      });

      down.addEventListener("click", function () {
        post.vote = post.vote === -1 ? 0 : -1;
        paintVotes();
      });

      var comment = make(
        "button",
        "pill",
        ICON_COMMENT + fmt(post.comments)
      );

      comment.type = "button";
      comment.title = "Comment";
      comment.setAttribute("aria-label", "Comment");

      var share = make("button", "pill push", ICON_SHARE);

      share.type = "button";
      share.title = "Share";
      share.setAttribute("aria-label", "Share");

      share.addEventListener("click", function () {
        share.innerHTML = ICON_SHARE + "Copied";

        window.setTimeout(function () {
          share.innerHTML = ICON_SHARE;
        }, 1500);
      });

      actions.appendChild(pill);
      actions.appendChild(comment);
      actions.appendChild(share);

      article.appendChild(actions);

      return article;
    }

    /* =====================================================
       10. SORT POSTS
       ===================================================== */

    function sorted(list) {
      var copy = list.slice();

      if (currentSort === "new") {
        copy.sort(function (a, b) {
          return a.hrs - b.hrs;
        });
      } else if (currentSort === "top") {
        copy.sort(function (a, b) {
          return b.likes - a.likes;
        });
      } else {
        copy.sort(function (a, b) {
          return (
            b.likes + b.comments * 2 -
            (a.likes + a.comments * 2)
          );
        });
      }

      return copy;
    }

    /* =====================================================
       11. SEARCH AND RENDER
       ===================================================== */

    function render() {
      // If the feed isn't in this HTML page, don't crash.
      if (!feed) return;

      var q = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

      var filtered = posts.filter(function (post) {
        var hay = (
          post.title + " " +
          post.text + " " +
          post.community + " " +
          post.user
        ).toLowerCase();

        return !q || hay.indexOf(q) !== -1;
      });

      feed.innerHTML = "";

      sorted(filtered).forEach(function (post) {
        feed.appendChild(buildPost(post));
      });

      if (empty) {
        empty.hidden = filtered.length > 0;
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", render);
    }

    document.querySelectorAll(".sort-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".sort-btn").forEach(function (b) {
          b.classList.remove("active");
        });

        btn.classList.add("active");
        currentSort = btn.dataset.sort || "hot";

        render();
      });
    });

    // Initial render.
    render();
  }

  // Wait until the HTML elements exist before running the script.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
