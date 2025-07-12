let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoS = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
	
    setTimeout(()=>{
		
        logoS.forEach((span, idx) => {
            setTimeout(()=>{
			    span.classList.add("active");
		    }, (idx + 1) * 400)
	    });
	
        setTimeout(()=>{
	    	logoS.forEach((span, idx)=>{
	    		setTimeout(()=>{
	    			span.classList.remove("active");
	    			span.classList.add("fade");
	    		}, (idx + 1) * 50)
	    	});
	    }, 2000);

        setTimeout(()=>{
            intro.classList.add("fade-out");
            setTimeout(() => {
                intro.style.display = "none";
            }, 600);
        }, 2300)
    })

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
					popup.classList.add("show");
				} else {
					popup.classList.remove("show");
				}
			} 
			if (infpop) {
				if (item == "Info") {
					infpop.classList.add("show");
				} else {
					infpop.classList.remove("show");
				}
			}
			if (conpop) {
				if (item == "Contact") {
					conpop.classList.add("show");
				} else {
					conpop.classList.remove("show");
				}
			}
		});

		cell.appendChild(span);
		row.appendChild(cell);
		table.appendChild(row);
	});
});
