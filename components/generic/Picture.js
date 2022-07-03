import clsx from "clsx";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "./Modal";
import { motion } from "framer-motion";

/*
	Source:
	https://stackoverflow.com/questions/66949606/what-is-the-best-way-to-have-a-fallback-image-in-nextjs
*/

const Picture = ({ src, fallback, focusable = true, ...rest }) => {
	const { setModal } = useContext(ModalContext);

	const [source, setSource] = useState({
		src: src,
		broken: 0,
	});

	function displayFallback() {
		setSource({
			...source,
			...fallback,
			broken: 1,
		});
	}

	useEffect(() => {
		setSource({ ...source, src: src });
	}, [src]);

	return (
		<Image
			{...rest}
			{...source}
			className={clsx(
				focusable &&
					"hover:opacity-80 cursor-zoom-in transition-opacity"
			)}
			src={src ? src : fallback.src}
			onClick={() => {
				if (source.broken === 0 && focusable) {
					setModal({
						container: false,
						content: (
							<motion.div
								className={clsx(
									"picture-modal",
									"flex flex-col -m-8 shadow-lg"
								)}
							>
								<motion.img
									draggable={false}
									drag
									dragConstraints={{
										top: -8,
										left: -8,
										right: 8,
										bottom: 8,
									}}
									src={src}
									title={rest.title}
									alt={rest.title}
								/>
							</motion.div>
						),
					});
				}
			}}
			onLoadingComplete={(result) => {
				if (result.naturalWidth === 0) {
					// Broken image
					displayFallback();
				}
			}}
			onError={() => {
				displayFallback();
			}}
		/>
	);
};

export default Picture;
