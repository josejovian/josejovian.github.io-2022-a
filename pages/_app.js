import "../styles/globals.css";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navigation />
			<div className="body pageify w-full pt-16 h-full">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
