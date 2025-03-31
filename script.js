// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// Sample Testimonials Data
const testimonials = [
  { name: "Alice Johnson", text: "Great experience working with DevElevate!" },
  { name: "John Ichungwa", text: "Top-notch developer. Highly recommended!" },
  { name: "Enock Tarei", text: "Wow! This work is impressive" }
];

const testimonialsContainer = document.getElementById("testimonials-container");

// Build testimonial elements and mark the first as active
testimonials.forEach((testimonial, index) => {
  const div = document.createElement("div");
  div.classList.add("testimonial");
  if (index === 0) div.classList.add("active");
  div.innerHTML = `<p>"${testimonial.text}"</p><h4>- ${testimonial.name}</h4>`;
  testimonialsContainer.appendChild(div);
});

// Testimonial Slider Functionality
const testimonialElems = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialElems.forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

document.getElementById("prev-testimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + testimonialElems.length) % testimonialElems.length;
  showTestimonial(currentTestimonial);
});

document.getElementById("next-testimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonialElems.length;
  showTestimonial(currentTestimonial);
});
