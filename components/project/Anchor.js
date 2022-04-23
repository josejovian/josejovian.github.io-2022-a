import { motion } from "framer-motion";

const Anchor = ({ head, depth }) => {
	return (
		<motion.a
			key={head.link}
			href={`#${head.link}`}
			className={`pr-8 sm:pr-8 md:pr-8 lg:pr-16 xl:pr-16 2xl:pr-32`}
			// For some reason, pl-x class doesn't work here, hence the following line.
			style={{
				paddingLeft: `${(depth - 1) * 2}rem`,
			}}
			variants={{
				hidden: {
					opacity: 0,
					x: 200,
					transition: {
						delay: 1,
					},
				},
				enter: {
					opacity: 1,
					x: 0,
					transition: {
						delay: 1,
					},
				},
			}}
			exit={{
				opacity: 0,
				x: 0,
			}}
		>
			{head.name}
		</motion.a>
	);
};

export default Anchor;