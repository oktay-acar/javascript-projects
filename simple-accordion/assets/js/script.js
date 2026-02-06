"use strict";

// SELECT DOM ELEMENTS
// -------------------
const accordionContainer = document.querySelector(".accordion-container"); // <section> element
const accordionIcons = document.querySelectorAll(".accordion-icon .icon"); // All <i> elements
const accordionContents = document.querySelectorAll(".accordion-content"); // All accordion content <div> elements
const scrollToTop = document.getElementById("scroll-top"); // Scroll to top button

// FOOTER
// ------
// Prevent footer overlap
function adjustFooterPadding() {
  const footer = document.querySelector(".footer");

  if (!footer) return;

  const footerHeight = footer.getBoundingClientRect().height;

  document.body.style.paddingBottom = `${footerHeight}px`;
  // console.log(`Footer height: ${footerHeight}px`);
}

/*
window.addEventListener("DOMContentLoaded", adjustFooterPadding);
window.addEventListener("load", adjustFooterPadding);
window.addEventListener("resize", adjustFooterPadding);
*/
["DOMContentLoaded", "load", "resize"].forEach((event) => {
  window.addEventListener(event, adjustFooterPadding);
});

// Scroll to top
scrollToTop.addEventListener("click", () => {
  document.documentElement.scrollIntoView({ behavior: "smooth" });
  // console.log("Scroll");
});

// Alternative approach to scrollIntoView()
/*
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
*/

// FUNCTIONS
// ---------
// Toggle clicked icon classes
function toggleIconClasses(el, removeClass, addClass) {
  el.classList.toggle(removeClass);
  el.classList.toggle(addClass);
}

// Close functions
// Icons
const closeIcons = (icon) => {
  accordionIcons.forEach((i) => {
    if (i !== icon) {
      i.classList.remove("fa-chevron-up", "icon-opened");
      i.classList.add("fa-chevron-down", "icon-closed");
    }
  });
};

// Contents
const closeContents = (content) => {
  accordionContents.forEach((el) => {
    if (el !== content) {
      el.classList.remove("active");
    }
  });
};

// EVENT DELEGATION
// ----------------
accordionContainer.addEventListener("click", (e) => {
  // Button Clicked
  const clicked = e.target.closest("button.accordion-header"); // closest("button") or closest(".accordion-header")

  if (!clicked) return;

  const icon = clicked.querySelector(".accordion-icon .icon");

  // Close not clicked elements
  closeIcons(icon);
  closeContents(clicked.nextElementSibling);

  // Toggle clicked icon classes
  toggleIconClasses(icon, "fa-chevron-down", "fa-chevron-up");
  toggleIconClasses(icon, "icon-closed", "icon-opened");

  clicked.nextElementSibling.classList.toggle("active");

  // console.log(clicked);
  // console.log(icon);
  // console.log(accordionIcons);
  // console.log(accordionContents);
});

// Handle outside click
document.addEventListener("click", (e) => {
  if (e.target.closest(".accordion-item")) return;

  // Close all
  closeIcons();
  closeContents();
});
