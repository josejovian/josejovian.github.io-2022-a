import Head from "next/head";
import Image from "next/image";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import PageHead from "../components/page/PageHead";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

export default function About() {
	return (
		<>
			<SEO
				templateTitle="about"
				description="An undergraduate computer science student, and an aspiring front end developer. Simply a website to showcase the projects I've built to test the knowledge I obtain."
			/>
			<PageHead
				title={
					<>
						About Me
					</>
				}
				description={
					<>
						An undergraduate computer science student, and an
						aspiring front-end developer.
					</>
				}
			/>
			<Education />
			<Experience />
		</>
	);
}
