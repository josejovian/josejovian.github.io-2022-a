import Head from "next/head";
import Image from "next/image";
import Featured from "../components/index/Featured";
import Links from "../components/index/Links";
import PageHead from "../components/PageHead";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<SEO
				templateTitle="home"
				description="An undergraduate computer science student, and an aspiring front end developer. Simply a website to showcase the projects I've built to test the knowledge I obtain."
			/>
			<PageHead
				title={
					<>
						Hey! <b>Jose</b> here.
					</>
				}
				addon={<Links />}
				description={
					<>
						I&nbsp;am an undergraduate computer science student, and
						an aspiring front-end developer. I&nbsp;am particularly
						interested in web development, especially React.
						I&nbsp;create personal projects to test out the things I
						have learnt.
					</>
				}
			/>
			<Featured />
		</>
	);
}
