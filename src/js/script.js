// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight == 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) {
    document.body.classList.add("non-flexbox-gap");
  }
}
checkFlexGap();

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile navigation
const menuBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");

  document.querySelector("html").classList.toggle("no-overflow");
  document.querySelector("body").classList.toggle("no-overflow");
});

// Smooth scrolling

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      header.classList.remove("nav-open");
    } else if (href.startsWith("#")) {
      e.preventDefault();
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
      header.classList.remove("nav-open");
    }
  });
});

// Sticky navigation

const sectionHeroElement = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (enteries) {
    const ent = enteries[0];
    const bodyElement = document.querySelector("body");
    if (!ent.isIntersecting) {
      bodyElement.classList.add("sticky");
    } else {
      bodyElement.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroElement);

// PDF Viewer

if (window.location.hostname === "pdfobject.com") {
  let s = document.createElement("script");
  s.setAttribute(
    "src",
    "https://www.googletagmanager.com/gtag/js?id=UA-1394306-6"
  );
  s.async = true;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "UA-1394306-6");
}

var options = {
  pdfOpenParams: {
    pagemode: "thumbs",
    navpanes: 0,
    toolbar: 0,
    statusbar: 0,
    view: "FitV",
  },
};

PDFObject.embed("Report.pdf", ".viewPDF", options);
