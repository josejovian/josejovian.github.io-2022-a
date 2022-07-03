import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect } from "react";

const links = [
	{
		name: "home",
		link: "/",
	},
	{
		name: "projects",
		link: "/projects",
	},
];

/*
	Button Ripple Effect:
	https://codepen.io/BretCameron/pen/mdPMVaW
*/

function createRipple(event) {
	const button = event.currentTarget;

	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
	circle.classList.add("ripple");
	circle.classList.add("bg-teal-700");

	const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) {
		ripple.remove();
	}

	button.appendChild(circle);
}

function highlightParent(event) {
	const parent = event.currentTarget.parentElement;
	parent.classList.toggle("bg-teal-900");
}

const Navigation = () => {
	const router = useRouter();

	useEffect(() => {
		const buttons = document.getElementsByClassName("navbar-wrapper-btn");
		for (const button of buttons) {
			button.addEventListener("click", createRipple);
		}
	}, []);

	const linkElements = links.map((link) => {
		const identifier = `navbar-link-${link.name}`;

		function isActive() {
			if(router.pathname.includes("project") && link.link.includes("project"))
				return true;
		
			return router.pathname === link.link;
		}

		return (
			<div
				key={identifier}
				id={identifier}
				className={`
					navbar-wrapper-btn
					relative
					transition-colors duration-600
					hover:bg-teal-700 active:bg-teal-700
				`}
			>
				{isActive() && (
					<motion.span
						layoutId="navbar"
						className="absolute left-0 bottom-0 w-full h-1 bg-teal-400 z-30"
						transition={{ duration: 0.6, type: "tween" }}
						animate
					></motion.span>
				)}
				<Link href={link.link}>
					<a
						className={
							isActive() ? "navbar-link-active" : "navbar-link"
						}
						onFocus={highlightParent}
						onBlur={highlightParent}
					>
						{link.name}
					</a>
				</Link>
			</div>
		);
	});

	return (
		<div
			id="navbar-wrapper"
			className="pageify flex align-center justify-center fixed top-0 w-full border-b border-gray-200 shadow-sm bg-gray-800 overflow-hidden z-20"
		>
			<div id="navbar" className="flex flex-row align-center justify-between w-full h-full text-sm sm:text-base">
				<Link href="/">
					<a>
						<div className='self-center py-4 h-min font-["Nunito"] font-semibold text-white'>
							josejovian
						</div>
					</a>
				</Link>
				<div className="flex overflow-hidden">{linkElements}</div>
			</div>
		</div>
	);
};

export default Navigation;
