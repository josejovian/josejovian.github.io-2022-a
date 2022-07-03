import clsx from "clsx";
import { useRouter } from "next/router";

const Footer = () => {
	const path = useRouter().asPath;

	return (
		<div id="footer" className={clsx("w-full flex align-center justify-center mt-16", path.includes("/project/") && "lg:w-4/6", "text-center text-gray-500 z-20")}>
			&copy; 2022 Jose Jovian • Created with NextJS, Tailwind, and Framer-motion.
		</div>
	);
};

export default Footer;
