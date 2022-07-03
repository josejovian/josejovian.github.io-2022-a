import { motion } from "framer-motion";

const Block = ({ title, children }) => {
	const variants = {
		hidden: { y: -320, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<div className="flex flex-col justify-center items-center text-center">
			<motion.h2 initial="hidden" animate="visible" variants={variants}>
				{title}
			</motion.h2>
			{children}
		</div>
	);
};

export default Block;
