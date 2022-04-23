import { motion } from "framer-motion";
import Anchor from "./Anchor";

const Side = ({ table }) => {
	const linkElements = table.map((head, idx) => {
		const sectionElements = head.subsections.map((sub, idx) => (
			<Anchor head={sub} depth="2" />
		));

		return (
			<>
				<Anchor head={head} depth="1" />
				{sectionElements}
			</>
		);
	});

	return (
		<motion.div
			id="sidebar"
			variants={{
				hidden: {
					opacity: 0,
				},
				enter: {
					opacity: 1,
					transition: {
						delay: 0.5,
					},
				},
			}}
			initial="hidden"
			animate="enter"
			exit={{ opacity: 0 }}
		>
			{linkElements}
		</motion.div>
	);
};

export default Side;
