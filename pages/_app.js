import "../styles/globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navigation />
			<div className="body pageify w-full py-16">
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
