var scene, node

window.onload = () => {
	scene = new Scene()
	scene.init()
	node = new Node()
}

class Scene {
	constructor() {
		this.controller = new ScrollMagic.Controller()
	}
	init() {
		this.controller.addScene([
			this.intro(),
			this.self_intro(),
			this.node(),
			this.experience(),
			this.education()
		])
	}
	intro() {
		const tween = new TimelineMax().add([
			TweenMax.fromTo("#heading", 1, {zIndex: 1, z: 1}, {yPercent: -23.6, autoAlpha: 0, ease: Linear.easeNone}),
			TweenMax.fromTo("#subheading", 1, {zIndex: 1}, {yPercent: -14.5, autoAlpha: 0, ease: Linear.easeNone}),
			TweenMax.to("#slice-left", 1, {yPercent: -38.2, autoAlpha: 0, ease: Linear.easeNone}),
			TweenMax.to("#slice-right", 1, {yPercent: -61.8, autoAlpha: 0, ease: Linear.easeNone})
		])

		return new ScrollMagic.Scene({
			duration: "61.8%"
		})
		.setTween(tween)
	}
	self_intro() {
		const tween = new TimelineMax().add([
			TweenMax.set("#content", {y: -200}),
			TweenMax.fromTo("#text-self-intro", 1, {y: 200}, {y: 0, ease: Linear.easeNone}),
			TweenMax.to("#text-self-intro", .5, {autoAlpha: 0, ease: Linear.easeNone}),
			TweenMax.fromTo("#text-self-intro-1", 1, {y: 200}, {y: 0, ease: Linear.easeNone}),
			TweenMax.to("#text-self-intro-1", .5, {autoAlpha: 0, ease: Linear.easeNone}),
			TweenMax.fromTo("#text-self-intro-2", 1, {y: 200}, {y: 700, ease: Linear.easeNone}),
			TweenMax.fromTo("#text-self-intro-2", .5, {autoAlpha: 0}, {autoAlpha: 1, ease: Linear.easeNone})
		])

		return new ScrollMagic.Scene({
			triggerElement: "#content",
			duration: "61.8%",
			offset: 500
		})
		.setTween(tween)
	}
	
	node() {
		const tween = new TimelineMax().add([
			TweenMax.fromTo("#nodes path", .5, {"stroke-dashoffset": 1200}, {"stroke-dashoffset": 0, ease: Linear.easeIn})
		])

		return new ScrollMagic.Scene({
			triggerElement: "#nodes",
			triggerHook: .5,
			duration: "50%",
		})
		.setTween(tween)
	}
	experience() {
		const tween = new TimelineMax().add([
			TweenMax.to("#experience-title", 1, {yPercent: -30, autoAlpha: 0, ease: Linear.easeNone}),
			TweenMax.fromTo("#text-experience1", 1, {yPercent: 30, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Linear.easeNone}),
			TweenMax.fromTo("#text-experience2", 1, {yPercent: 30, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Linear.easeNone}),
			TweenMax.fromTo("#text-experience3", 1, {yPercent: 30, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Linear.easeNone})
		])

		return new ScrollMagic.Scene({
			triggerElement: "#experience",
			triggerHook: .5,
			duration: "50%",
		})
		.setTween(tween)
	}
	education(){
		const tween = new TimelineMax().add([
			TweenMax.to("#edu-title", 1 , {yPercent: -30, autoAlpha: 0.2, ease: Linear.easeNone}),
			TweenMax.fromTo("#edu-experience1", 1 , {yPercent: 60, autoAlpha: 0}, {yPercent: 0,autoAlpha: 1,ease: Linear.easeNone}),
			TweenMax.fromTo("#edu-experience2", 1 , {yPercent: 60, autoAlpha: 0}, {yPercent: 0,autoAlpha: 1,ease: Linear.easeNone})
		])

		return new ScrollMagic.Scene({
			triggerElement:"#education",
			triggerHook:.4,
			duration:"80%",
		})
		.setTween(tween)
	}
}

class Node {
	constructor() {
		this.container = document.getElementById("nodes")
	}
	didScroll() {
		const margin = 60
		const predicate = this.container.scrollWidth - this.container.scrollLeft <= window.innerWidth + margin
		this.container.classList = predicate ? "reached" : ""
	}
}