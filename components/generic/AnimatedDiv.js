import { motion } from "framer-motion";

export const animVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.05,
		},
	},
	exit: { opacity: 0, x: 0, y: 0 },
};

const AnimatedDiv = ({ children, className }) => {
	return (
		<motion.article
			variants={animVariants}
			exit={animVariants.exit}
			className={className}
		>
			{children}
		</motion.article>
	);
};

export default AnimatedDiv;
