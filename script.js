const anchor = document.getElementById("anchor");
const logo = document.getElementById("logo");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("slide-arrow-prev");
const nextBtn = document.getElementById("slide-arrow-next");
const btnToMoveToMenue = document.querySelector(".menue");
const menueHead = document.getElementById("menue");
const categes = document.querySelectorAll(".categ");
const categories = document.querySelector(".categories");
const categesTable = document.querySelector(".categeFromNav");
const foods = document.querySelectorAll(".food");

const slider = function () {
	let currentSlide = 0;

	const moveTo = function (slider) {
		slides.forEach(
			(s, i) => (s.style.transform = `translateX(${100 * (i - slider)}%)`)
		);
	};

	moveTo(currentSlide);

	const nexSlide = function () {
		if (currentSlide === slides.length - 1) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}
		moveTo(currentSlide);
	};

	const prevSlide = function () {
		if (currentSlide === 0) {
			currentSlide = slides.length - 1;
		} else {
			currentSlide--;
		}
		moveTo(currentSlide);
	};

	// nextBtn.addEventListener("click", nexSlide);
	// prevBtn.addEventListener("click", prevSlide);

	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") prevSlide();
		else if (e.key === "ArrowRight") nexSlide();
	});

	setInterval(function () {
		nexSlide();
	}, 3000);
};
slider();

anchor.addEventListener("click", () => {
	document.querySelectorAll(".target").forEach((item) => {
		item.classList.toggle("change");
	});
});
anchor.addEventListener("click", () => {
	logo.classList.toggle("transonion-on-click");
});

btnToMoveToMenue.addEventListener("click", () =>
	menueHead.scrollIntoView({ behavior: "smooth" })
);

const foodsArr = Array.from(foods);
const arrayCateges = Array.from(categes);
// console.log(arrayCateges.length); // 15 Elements
// console.log(categories); // 1 Element

const insertHeadToFood = function () {
	foods.forEach((el) =>
		el.insertAdjacentHTML(
			"afterbegin",
			`		<div class="row-for-food-head">
						<div>السعرة</div>
						<div>السعر</div>
						<div>الصحن</div>
					</div>`
		)
	);
};

insertHeadToFood();

categories.addEventListener("click", (e) => {
	if (e.target.classList.contains("categ")) {
		const categoryOfFood = e.target.dataset.categ;

		for (let categ of arrayCateges) {
			categ.classList.remove("active-categ");
		}
		e.target.classList.add("active-categ");

		for (let food of foodsArr) {
			food.classList.remove("active-food");
			if (food.classList.contains(categoryOfFood)) {
				food.classList.add("active-food");
			}
			categesTable.scrollIntoView({ behavior: "smooth" });
		}
	}
});

// arrayCateges.forEach((e) => {
// 	e.addEventListener("click", () => {
// 		const categoryOfFood = e.className.split(" ")[1].split("-")[1];

// 		for (let categ of arrayCateges) {
// 			categ.classList.remove("active-categ");
// 		}
// 		e.classList.add("active-categ");
// 		for (let food of foodsArr) {

// 			food.classList.remove("active");
// 			if (food.classList.contains(categoryOfFood)) {
// 				food.classList.add("active");
// 			}
// 		}

// 	});
// });
