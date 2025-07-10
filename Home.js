function sitechg() {
	document.body.classList.toggle("chg");

	const h = document.getElementById("port");
	if (h) {
		h.style.color = "white";
		h.innerHTML = "John Choriatellis";
		h.style.textAlign = "left";
		h.style.fontFamily = "Arial";
	}

	const btn = document.getElementById("btn");
	const stud = document.getElementById("stud");
	const fam = document.getElementById("fam");

	if (btn) {
		btn.classList.add("hide");
		stud.classList.add("hide");
		fam.classList.add("hide");
		setTimeout(() => {
			btn.style.display = "none";
			stud.style.display = "none";
			fam.style.display = "none";
		}, 800);
	}

	if (document.getElementById("List")) return;

	const table = document.createElement("TABLE");
	table.setAttribute("id", "List");
	document.body.appendChild(table);

	const items = ["Home", "Projects", "Info", "Contact"];

	items.forEach((item, index) => {
		const row = document.createElement("TR");
		const cell = document.createElement("TD");

		const span = document.createElement("SPAN");
		span.textContent = index === 0 ? "• " + item : item;
		span.classList.add("menu-item");
		if (index === 0) span.classList.add("active");

		span.addEventListener("click", () => {
			const all = document.querySelectorAll(".menu-item");
			all.forEach(el => {
				el.textContent = el.textContent.replace("• ", "");
				el.classList.remove("active");
			});

			span.textContent = "• " + item;
			span.classList.add("active");

			const popup = document.querySelector(".popup");
			const infpop = document.querySelector(".infopopup");
			const conpop = document.querySelector(".conpop");
			if (popup) {
				if (item === "Projects") {
					popup.style.display = "block";
				} else {
					popup.style.display = "none";
				}
			} 
			if (infpop) {
				if (item == "Info") {
					infpop.style.display = "block";
				} else {
					infpop.style.display = "none";
				}
			}
			if (conpop) {
				if (item == "Contact") {
					conpop.style.display = "block";
				} else {
					conpop.style.display = "none";
				}
			}
		});

		cell.appendChild(span);
		row.appendChild(cell);
		table.appendChild(row);
	});
}
