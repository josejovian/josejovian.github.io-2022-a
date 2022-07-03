import clsx from "clsx";
import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ModalContext = createContext(null);

const Modal = () => {
	const { modal, setModal } = useContext(ModalContext);
	const [invicible, setInvicible] = useState(false);

	function clearModal() {
		setInvicible(true);
		setTimeout(() => {
			setInvicible(false);
			setModal({
				...modal,
				content: null,
			});
		}, 350);
	}

	const variants = {
		start: { opacity: 0 },
		end: { opacity: 1 },
	};

	useEffect(() => {
		if (modal.content && !invicible) {
			setInvicible(true);
			setTimeout(() => {
				setInvicible(false);
			}, 350);
		}
	}, [modal]);

	return modal.content ? (
		<motion.div
			animate={invicible ? "start" : "end"}
			variants={variants}
			transition={{ duration: 0.3 }}
			className={clsx(
				"fixed top-0 left-0 w-full h-screen pt-8",
				"flex flex-row justify-center items-center opacity-0 z-40"
			)}
		>
			<div
				className={clsx(
					"fixed top-0 left-0 w-full h-screen",
					"bg-zinc-900 bg-opacity-75"
				)}
				onClick={() => clearModal()}
			></div>
			<article
				className={clsx(
					"flex flex-row justify-center p-8 h-min z-50",
					modal.container && "roounded-sm text-black bg-slate-100"
				)}
			>
				{modal.content}
			</article>
		</motion.div>
	) : (
		<></>
	);
};

export default Modal;
