import { motion } from "framer-motion";
import { useEffect } from "react";
import Anchor from "./Anchor";

const Side = ({ table }) => {
	const linkElements = table.map((head, idx) => {
		const sectionElements = head.subsections.map((sub, idx) => {
			return (
				<Anchor key={sub.name} head={sub} depth="2" />
			);
		});
		
		const OneLink = () => (
			<>
				<Anchor head={head} depth="1" />
				{sectionElements}
			</>
		);

		return (
			<OneLink key={head.name} />
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
