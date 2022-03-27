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
		name: "about",
		link: "/about",
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
	circle.classList.add("bg-teal-100");

	const ripple = button.getElementsByClassName("ripple")[0];

	if (ripple) {
		ripple.remove();
	}

	button.appendChild(circle);
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
		function isActive() {
			return router.pathname === link.link;
		}

		const baseLinkStyle =
			"navbar-btn relative top-4 bottom-0 px-4 py-6 z-20 ";

		const highlightLinkStyle = baseLinkStyle + "font-bold text-cyan-700 ";

		return (
			<div
				key={`navbar-link-${link.name}`}
				className={`
					navbar-wrapper-btn
					relative
					transition-colors duration-600
					hover:bg-teal-50 active:bg-teal-100
				`}
			>
				{isActive() && (
					<motion.span
						layoutId="navbar"
						className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-700 z-30"
						transition={{ duration: 0.6, type: "tween" }}
						animate
					></motion.span>
				)}
				<Link href={link.link}>
					<a
						className={
							isActive() ? highlightLinkStyle : baseLinkStyle
						}
					>
						{link.name}
					</a>
				</Link>
			</div>
		);
	});

	return (
		<div
			className={`
				pageify
				flex align-center justify-center fixed top-0 
				w-screen border-b border-gray-200 bg-white overflow-hidden z-20`
			}
		>
			<div className="flex flex-row align-center justify-between w-full h-full">
				<div className='self-center py-4 font-["Nunito"] font-semibold text-xl h-min'>
					josejovian
				</div>
				<div className="flex overflow-hidden">{linkElements}</div>
			</div>
		</div>
	);
};

export default Navigation;
