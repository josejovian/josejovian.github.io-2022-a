import { motion } from "framer-motion";

export const animVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			staggerChildren: 0.05,
			when: "beforeChildren",
		},
	},
	exit: { opacity: 0, x: 0, y: 0 },
};

const AnimatedDiv = ({ children, className }) => {
	return (
		<motion.div
			variants={animVariants}
			exit={animVariants.exit}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedDiv;
