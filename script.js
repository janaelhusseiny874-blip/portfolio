window.addEventListener("DOMContentLoaded", () => {
	const skills = document.querySelectorAll(".skill");

	skills.forEach(skill => {
		const value = skill.getAttribute("data-value");
		const bar = skill.querySelector(".bar");
		const percent = skill.querySelector(".percent");

		// reset
		bar.style.width = "0%";
		percent.textContent = "0%";

		// animate bar
		setTimeout(() => {
			bar.style.width = value + "%";
		}, 200);

		// counter animation
		let count = 0;
		const interval = setInterval(() => {
			if (count >= value) {
				clearInterval(interval);
			} else {
				count++;
				percent.textContent = count + "%";
			}
		}, 15);
	});
});

function showProjects() {
	const cards = document.querySelectorAll(".project-card");

	cards.forEach(card => {
		const rect = card.getBoundingClientRect();

		if (rect.top < window.innerHeight - 80) {
			card.style.opacity = "1";
			card.style.transform = "translateY(0)";
		}
	});
}

window.addEventListener("scroll", () => {
	const topBtn = document.getElementById("topBtn");

	if (window.scrollY > 300) {
		topBtn.classList.add("show");
	} else {
		topBtn.classList.remove("show");
	}
});


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("active");
		}
	});
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));


const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark");

	if (document.documentElement.classList.contains("dark")) {
		darkBtn.innerHTML = "☀️";
	} else {
		darkBtn.innerHTML = "🌙";
	}
});


const contactBox = document.getElementById("contactBox");

function openContact() {
	contactBox.classList.remove("hidden");
}

function closeContact() {
	contactBox.classList.add("hidden");
}

contactBox.addEventListener("click", (e) => {
	if (e.target === contactBox) closeContact();
});

function scrollToSection(id) {
	document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}



function goTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}
function goContact() {
	document.getElementById("contactBox").classList.remove("hidden");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault();

	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const message = document.getElementById("message");

	const nameError = document.getElementById("nameError");
	const emailError = document.getElementById("emailError");
	const messageError = document.getElementById("messageError");
	const contactBox = document.getElementById("contactBox");

	let isValid = true;

	function reset(el) {
		el.classList.add("hidden");
		el.textContent = "";
		el.classList.remove("text-red-400", "text-green-400");
	}

	reset(nameError);
	reset(emailError);
	reset(messageError);

	if (name.value.trim() === "") {
		nameError.textContent = "❌ Name is required";
		nameError.classList.remove("hidden");
		nameError.classList.add("text-red-400");
		isValid = false;
	} else {
		nameError.textContent = "✅ Looks good";
		nameError.classList.remove("hidden");
		nameError.classList.add("text-green-400");
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (email.value.trim() === "") {
		emailError.textContent = "❌ Email is required";
		emailError.classList.remove("hidden");
		emailError.classList.add("text-red-400");
		isValid = false;
	} else if (!emailPattern.test(email.value)) {
		emailError.textContent = "❌ Invalid email";
		emailError.classList.remove("hidden");
		emailError.classList.add("text-red-400");
		isValid = false;
	} else {
		emailError.textContent = "✅ Valid email";
		emailError.classList.remove("hidden");
		emailError.classList.add("text-green-400");
	}

	if (message.value.trim().length < 10) {
		messageError.textContent = "❌ Message too short";
		messageError.classList.remove("hidden");
		messageError.classList.add("text-red-400");
		isValid = false;
	} else {
		messageError.textContent = "✅ Good message";
		messageError.classList.remove("hidden");
		messageError.classList.add("text-green-400");
	}

	if (isValid) {
		setTimeout(() => {
			this.reset();
			contactBox.classList.add("hidden");
		}, 800);
	}
});
function closeContact() {
	document.getElementById("contactBox").classList.add("hidden");
}
window.addEventListener("load", function () {
	const loader = document.getElementById("loader");

	loader.classList.add("loader-hide");

	setTimeout(() => {
		loader.style.display = "none";
	}, 200);
});


const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		topBtn.classList.add("show");
	} else {
		topBtn.classList.remove("show");
	}
});


topBtn.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menuBtn");
	const mobileMenu = document.getElementById("mobileMenu");

	let isOpen = false;

	function openMenu() {
		mobileMenu.classList.remove(
			"opacity-0",
			"scale-95",
			"-translate-y-3",
			"pointer-events-none"
		);

		mobileMenu.classList.add(
			"opacity-100",
			"scale-100",
			"translate-y-0"
		);

		menuBtn.innerHTML = "✕";
		isOpen = true;
	}

	function closeMenu() {
		mobileMenu.classList.add(
			"opacity-0",
			"scale-95",
			"-translate-y-3",
			"pointer-events-none"
		);

		mobileMenu.classList.remove(
			"opacity-100",
			"scale-100",
			"translate-y-0"
		);

		menuBtn.innerHTML = "☰";
		isOpen = false;
	}

	menuBtn.addEventListener("click", () => {
		isOpen ? closeMenu() : openMenu();
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const isDark = localStorage.getItem("theme") === "dark";

	if (isDark) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
});

function validateEmail() {
	const email = document.getElementById("emailInput").value;
	const message = document.getElementById("emailMessage");

	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (pattern.test(email)) {
		message.textContent = "Email is valid ✔";
		message.style.color = "green";
	} else {
		message.textContent = "Invalid email ❌";
		message.style.color = "red";
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menuBtn");
	const mobileMenu = document.getElementById("mobileMenu");

	if (!menuBtn || !mobileMenu) return;

	let isOpen = false;

	function openMenu() {
		mobileMenu.classList.remove("opacity-0", "scale-95", "-translate-y-3", "pointer-events-none");
		menuBtn.innerHTML = "✕";
		isOpen = true;
	}

	function closeMenu() {
		mobileMenu.classList.add("opacity-0", "scale-95", "-translate-y-3", "pointer-events-none");
		menuBtn.innerHTML = "☰";
		isOpen = false;
	}

	menuBtn.addEventListener("click", () => {
		isOpen ? closeMenu() : openMenu();
	});

	document.querySelectorAll("#mobileMenu a").forEach(link => {
		link.addEventListener("click", closeMenu);
	});
});