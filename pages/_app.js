import "../styles/globals.css";
import Navigation from "../components/page/Navigation";
import Footer from "../components/page/Footer";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
	const link = useRouter();

	/*
		Source:
		https://wallis.dev/blog/nextjs-page-transitions-with-framer-motion
	*/

	const variants = {
		hidden: { opacity: 0, x: -200, y: 0 },
		enter: { opacity: 1, x: 0, y: 0 },
		exit: { opacity: 0, x: 0, y: 0 },
	};

	return (
		<>
			<Navigation />
			<div className="body pageify w-full py-16">
				<AnimatePresence
					exitBeforeEnter
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}
				>
					<motion.div
						variants={variants} // Pass the variant object into Framer Motion
						initial="hidden" // Set the initial state to variants.hidden
						animate="enter" // Animated state to variants.enter
						exit="exit" // Exit state (used later) to variants.exit
						transition={{ type: "tween" }} // Set the transition to linear
						className=""
						key={link.pathname}
					>
						<Component {...pageProps} key={link.pathname} />
					</motion.div>
				</AnimatePresence>
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
