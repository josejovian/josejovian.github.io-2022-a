import "../styles/globals.css";
import Navigation from "../components/page/Navigation";
import Footer from "../components/page/Footer";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { animVariants } from "../components/generic/AnimatedDiv";
import Modal, { ModalContext } from "../components/generic/Modal";

function MyApp({ Component, pageProps }) {
	const link = useRouter();
	const [modal, setModal] = useState({
		container: true,
		content: null,
	});

	useEffect(() => {
		setTimeout(() => {
			const pageify = document.querySelectorAll(".pageify");
			const footer = document.getElementById("footer");

			// Adjust components for individual project pages.
			if (link.pathname.includes("/project/")) {
				pageify.forEach((component) => {
					component.classList.add("pageify-blog");
				});
				footer.classList.add("w-4/6");
			
			// Re-adjust components when user stops viewing individual project pages.
			} else {
				pageify.forEach((component) => {
					component.classList.remove("pageify-blog");
				});
				footer.classList.remove("w-4/6");
			}
		}, 300);
	});
	/*
		Source:
		https://wallis.dev/blog/nextjs-page-transitions-with-framer-motion
	*/

	return (
		<>
			<Navigation />
			<div id="body" className="body pageify w-full pt-16 pb-8 overflow-x-hidden">
				<AnimatePresence
					exitBeforeEnter
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<motion.div
						variants={animVariants} // Pass the variant object into Framer Motion
						initial="hidden" // Set the initial state to variants.hidden
						animate="enter" // Animated state to variants.enter
						exit="exit" // Exit state (used later) to variants.exit
						transition={{ type: "tween" }} // Set the transition to linear
						className=""
						key={link.pathname}
					>
						
						<ModalContext.Provider
							value={{
								modal: modal,
								setModal: setModal,
							}}
						>
							<Modal />
							<Component {...pageProps} key={link.pathname} />
						</ModalContext.Provider>
					</motion.div>
				</AnimatePresence>
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
