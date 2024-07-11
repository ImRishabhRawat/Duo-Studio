gsap.registerPlugin(ScrollTrigger);
// const scroll = new LocomotiveScroll({
// 	el: document.querySelector("#main"),
// 	smooth: true,
// }); ye wala code scrolltriger ke sath nhi work karta

	function init() {
		gsap.registerPlugin(ScrollTrigger);

		// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

		const locoScroll = new LocomotiveScroll({
			el: document.querySelector("#main"),
			smooth: true,
		});
		// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
		locoScroll.on("scroll", ScrollTrigger.update);

		// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
		ScrollTrigger.scrollerProxy("#main", {
			scrollTop(value) {
				return arguments.length
					? locoScroll.scrollTo(value, 0, 0)
					: locoScroll.scroll.instance.scroll.y;
			}, // we don't have to define a scrollLeft because we're only scrolling vertically.
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
			// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
			pinType: document.querySelector("#main").style.transform
				? "transform"
				: "fixed",
		});

		ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

		ScrollTrigger.refresh();
	}

	init();

var cursor = document.querySelector(".cursor");
var main = document.querySelector("#main");

document.addEventListener("mousemove", function (dets) {
	cursor.style.left = dets.x + "px";
	cursor.style.top = dets.y + "px";
});

var vid = document.querySelector(".vid");
vid.addEventListener("mouseenter", function () {
	cursor.style.width = "50px";
	cursor.style.height = "15px";
	cursor.style.borderRadius = "50px";
	document.querySelector(".cursor p").style.display = "block";
});
vid.addEventListener("mouseleave", function () {
	cursor.style.width = "10px";
	cursor.style.height = "10px";
	cursor.style.borderRadius = "50%";
	document.querySelector(".cursor p").style.display = "none";


});
var tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#page1 h1",
		scroller: "#main",
		// markers: true,
		start: "top 27%",
		end: "top 0",
		scrub: 3,
	},
});
tl.to(
	"#page1 h1",
	{
		x: -100,
	},
	"anim"
);

tl.to(
	"#page1 h2",
	{
		x: 100,
	},
	"anim"
);
tl.to("#page1 video", {
	width: "90%",
});

var tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: "#page1 h1",
		scroller: "#main",
		// markers: true,
		start: "top -30%",
		end: "top -30%",
		scrub: 3,
	},
});
tl2.to("#main", {
	backgroundColor: "#fff",
});

var tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: "#page1 h1",
		scroller: "#main",
		// markers: true,
		start: "top -360%",
		end: "top -380%",
		scrub: 3,
	},
});

tl3.to("#main", {
	backgroundColor: "#0f0d0d",
});


var boxes = document.querySelectorAll(".box");

boxes.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		var att = elem.getAttribute("data-image");
		cursor.style.width = "300px";
		cursor.style.height = "250px";
		cursor.style.borderRadius = "0";
		cursor.style.backgroundImage = `url(${att})`;

	})
	elem.addEventListener("mouseleave", function () {
		elem.style.backgroundColor = "#0f0d0d";
		cursor.style.width = "20px";
		cursor.style.height = "20px";
		cursor.style.borderRadius = "50%";
		cursor.style.backgroundImage = "none";
	});
});


var work = document.querySelectorAll("#nav2 #work");
var purple = document.querySelector("#purple");
work.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		purple.style.display = "block";
		purple.style.opacity = "1";
	})
	elem.addEventListener("mouseleave", function () {
		purple.style.display = "none";
		purple.style.opacity = "0";
	});
});

var studio = document.querySelectorAll("#nav2 #studio");
var orange = document.querySelector("#orange");
studio.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		orange.style.display = "block";
		orange.style.opacity = "1";
	});
	elem.addEventListener("mouseleave", function () {
		orange.style.display = "none";
		orange.style.opacity = "0";
	});
});

var work = document.querySelectorAll("#nav2 #contact");
var purple = document.querySelector("#purple");
work.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		purple.style.display = "block";
		purple.style.opacity = "1";
	});
	elem.addEventListener("mouseleave", function () {
		purple.style.display = "none";
		purple.style.opacity = "0";
	});
});


