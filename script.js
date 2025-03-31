document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if dark mode is saved in local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "Light Mode";
    }

    // Toggle dark mode
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";
        }
    });

    // Testimonials Data (Example)
    const testimonials = [
        { name: "John Doe", text: "Great work! Highly recommended." },
        { name: "Jane Smith", text: "Very professional and efficient." },
        { name: "Michael Brown", text: "Delivered exactly what I needed!" }
    ];

    const testimonialsContainer = document.getElementById("testimonials-container");

    testimonials.forEach(testimonial => {
        const div = document.createElement("div");
        div.classList.add("testimonial");
        div.innerHTML = `<p>"${testimonial.text}"</p><h4>- ${testimonial.name}</h4>`;
        testimonialsContainer.appendChild(div);
    });
});
