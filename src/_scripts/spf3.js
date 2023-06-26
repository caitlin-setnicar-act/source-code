/*****************************************/
/*                                       */
/*  ACT Website Design System - spf3.js  */
/*                                       */
/*****************************************/
//A11 - Accordion
document.addEventListener("DOMContentLoaded", function() {
	const sectionHeadings = document.querySelectorAll(".act-accordion__section__heading");
	sectionHeadings.forEach(function(heading) {
		heading.addEventListener("click", function() {
			const section = heading.parentElement;
			section.classList.toggle("act-accordion__section__open");
			const icon = heading.querySelector(".fa-solid");
			if (section.classList.contains("act-accordion__section__open")) {
				icon.classList.remove("fa-xmark");
				icon.classList.add("fa-minus");
			} else {
				icon.classList.remove("fa-minus");
				icon.classList.add("fa-xmark");
			}
		});
	});
});

//A21 - Global Alerts
function dismissGlobalAlbert() {
	const e = document.querySelector(".act-alert-global");
	e.remove();
}

//B11 - Back to top Button
function backToTop() {
	window.scrollTo(0, 0);
}

//P11 - Popover
function togglePopover() {
	const e = document.querySelector(".act-popup");
	e.remove();
}

//T21 - Tabs
document.addEventListener("DOMContentLoaded", function() {
	var tabs = document.querySelectorAll(".act-tabs__tab");
	var tabContents = document.querySelectorAll(".act-tabs__content");
	tabs.forEach(function(tab, index) {
		tab.addEventListener("click", function() {
			tabs.forEach(function(tab) {
				tab.classList.remove("act-tabs__tab__active");
				tab.setAttribute("aria-selected", "false");
			});
			this.classList.add("act-tabs__tab__active");
			this.setAttribute("aria-selected", "true");
			tabContents.forEach(function(tabContent) {
				tabContent.classList.remove("act-tabs__content__open");
				tabContent.classList.add("act-tabs__content__closed");
			});
			tabContents[index].classList.remove("act-tabs__content__closed");
			tabContents[index].classList.add("act-tabs__content__open");
		});
	});
});



//P-12 Cookie Consent
function toggleCookieConsent() {
	const e = document.querySelector(".act-popup.bottom");
	if (e) {
		if (e.style.visibility === "hidden") {
			e.style.visibility = "visible";
		} else {
			//find all the visible child links and hide them before closing the menu
			const visibleChildElements = document.querySelectorAll("[id^=child-links-]");
			for (const childElement of visibleChildElements) {
				childElement.style.display = "none";
			}

			//now close the menu
			e.style.visibility = "hidden";
		}
	}
}


//W-15 Mega menu
function toggleSubMenu(open) {
	const mainMenu = document.querySelector(".act-megamenu__content__block-main-menu");
	const subMenu = document.querySelector(".act-megamenu__content__block-sub-menu");
	if(open) {
		subMenu.classList.remove("hidden-mobile");
		mainMenu.classList.add("hidden-mobile");
	} else {
		subMenu.classList.add("hidden-mobile");
		mainMenu.classList.remove("hidden-mobile");
	}
}

function openChildLinks(e) {
	const element = e.currentTarget;
	const num = element.id.split("-")[3];

	//make sub-menu visible
	toggleSubMenu(true);
    
	const visibleChildElements = document.querySelectorAll("[id^=sub-menu-]");
	for (const childElement of visibleChildElements) {
		childElement.style.display = "none";
	}
	const childElement = document.querySelector("#sub-menu-" + num);
	if (!childElement) {
		return;
	}
	childElement.style.display = "grid";
}


document.addEventListener("DOMContentLoaded", function() {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuToggle = document.querySelectorAll(".act-navbar__menu");
	const megaMenuIcon = document.querySelectorAll(".act-navbar__menu .act-navbar__menu__container i")[0];
	megaMenuToggle.forEach(function(button) {
		button.addEventListener("click", function() {
			megaMenu.classList.toggle("act-megamenu__open");			
			if (!megaMenu.classList.contains("act-megamenu__open")) {
				megaMenuIcon.classList.add("fa-bars");
				megaMenuIcon.classList.remove("fa-xmark");
				megaMenu.querySelector("a").focus();
			} else {
				megaMenuIcon.classList.remove("fa-bars");
				megaMenuIcon.classList.add("fa-xmark");
			}
		});
	});
});

document.addEventListener("DOMContentLoaded", function() {
	const megaMenuItem = document.querySelectorAll(".act-megamenu__link a");
	megaMenuItem.forEach(function(item) {
		item.addEventListener("click", function(e) {
			e.preventDefault();
		});
	});
});


//Search
document.addEventListener("DOMContentLoaded", function() {
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	const searchInput = document.getElementsByClassName("act-navbar__search__text")[0];
	const searchToggle = document.querySelectorAll(".act-navbar__search__container i");
	searchToggle.forEach(function(button) {
		button.addEventListener("click", function() {
			searchContainer.classList.toggle("act-search__open");
		});
	});
});


//Close events
document.addEventListener("keydown", function() {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuIcon = document.querySelectorAll(".act-navbar__menu .act-navbar__menu__container i")[0];
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	if(event.keyCode === 27) {
		if (megaMenu.classList.contains("act-megamenu__open")) {
			megaMenu.classList.toggle("act-megamenu__open");
			megaMenuIcon.classList.add("fa-bars");
			megaMenuIcon.classList.remove("fa-xmark");
		}

		if (searchContainer.classList.contains("act-search__open")) {
			searchContainer.classList.toggle("act-search__open");
		}
	}
	
});

document.addEventListener("click", function(e) {
	const megaMenu = document.getElementsByClassName("act-megamenu")[0];
	const megaMenuIcon = document.querySelectorAll(".act-navbar__menu .act-navbar__menu__container i")[0];
	const searchContainer = document.getElementsByClassName("act-navbar__search__container")[0];
	const navbar = document.getElementsByClassName("act-navbar")[0];
	if (!navbar.contains(e.target) && !megaMenu.contains(e.target)) {
		if (megaMenu.classList.contains("act-megamenu__open")) {
			megaMenu.classList.toggle("act-megamenu__open");
			megaMenuIcon.classList.add("fa-bars");
			megaMenuIcon.classList.remove("fa-xmark");
		}
	}
	if (!navbar.contains(e.target) && !searchContainer.contains(e.target)) {
		if (searchContainer.classList.contains("act-search__open")) {
			searchContainer.classList.toggle("act-search__open");
		}
	}	
});

//W-15 Mega Menu keyboard arrow navigation
document.addEventListener("keydown", function(e) {
	if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
		e.preventDefault();
	}	
	if (document.activeElement.closest(".act-megamenu__open")) {
		if (document.activeElement.closest(".act-megamenu__sub-menu-link-container")) {
			let active = document.activeElement;
			let activeSubnavCount = document.activeElement.parentNode.childElementCount;
			let i = Array.from(active.parentNode.children).indexOf(active);
			//left
			if(event.keyCode === 37) {
				if (i % 2 == 0) { //left col
					//
					document.getElementsByClassName("act-megamenu__content__block-sub-menu")[0].classList.add("hidden-mobile");
					Array.from(document.getElementsByClassName("act-megamenu__sub-menu-link-container")).forEach(function(container) {
						container.style.display = "none";
					});
					let numMega = document.activeElement.closest(".act-megamenu__sub-menu-link-container").id.split("-")[2];
					document.querySelector("#main-menu-link-" + numMega).querySelector("a").focus();
				} else {
					//right col
					document.activeElement.previousElementSibling.focus();
				}				
			}
			//up
			if(event.keyCode === 38) {
				if (i == 0 || i == 1) {
					//do nothing 
				} else {
					document.activeElement.previousElementSibling.previousElementSibling.focus();
				}
			}
			//right
			if(event.keyCode === 39) {
				if (i % 2 == 1) {
					//do nothing
				} else if (i < (activeSubnavCount-1)) {		
					document.activeElement.nextElementSibling.focus();
				}				
			}
			//down
			if(event.keyCode === 40) {
				if ((activeSubnavCount-2) == i || (activeSubnavCount-1) == i) {
					//do nothing
				} else {
					document.activeElement.nextElementSibling.nextElementSibling.focus();
				}
			}
		} else {
			let active = document.activeElement;
			let activeCount = active.closest(".act-megamenu__link-container").childElementCount;
			let i = Array.from(active.closest(".act-megamenu__link-container").children).indexOf(active.closest(".act-megamenu__link"));
			//up
			if(event.keyCode === 38) {
				if (i == 0) {
					//do nothing
				} else {
					active.closest(".act-megamenu__link").previousElementSibling.querySelector("a").focus();
				}
			}
			//right
			if(event.keyCode === 39) {
				let active = document.activeElement;
				let activeID = active.closest(".act-megamenu__link").id.split("-")[3];
				toggleSubMenu(true);
				const visibleChildElements = document.querySelectorAll("[id^=sub-menu-]");
				for (const childElement of visibleChildElements) {
					childElement.style.display = "none";
				}
				const childElement = document.querySelector("#sub-menu-" + activeID);
				if (!childElement) {
					return;
				}
				childElement.style.display = "grid";
				childElement.querySelector("a").focus();
			}
			//down
			if(event.keyCode === 40) {
				if ((activeCount-1) == i) {
					// do nothing
				} else {
					active.closest(".act-megamenu__link").nextElementSibling.querySelector("a").focus();				
				}
			}
		}
	}
});

