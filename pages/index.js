import Head from "next/head";
import Image from "next/image";
import Featured from "../components/index/Featured";
import Links from "../components/generic/Links";
import PageHead from "../components/page/PageHead";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

const links = [{
	type: "github",
	name: "josejovian",
	link: "https://github.com/josejovian"
}, {
	type: "linkedin",
	name: "josejovian",
	link: "https://www.linkedin.com/in/josejovian/"
}];

export const Home = ({ featured }) => {
	return (
		<>
			<SEO
				templateTitle="home"
			/>
			<PageHead
				title={
					<>
						Hey! Jose here.
					</>
				}
				addon={<Links links={links} />}
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
			<Featured featured={featured} />
		</>
	);
}

export const getStaticProps = async (req) => {
	const { getProjects, extractDataFromProjects } = require("../lib/mdx");

	const projects = await getProjects();
	const data = await extractDataFromProjects(projects);

	return {
		props: {
			featured: data.filter((datum) => datum.featured)
		},
		revalidate: 300
	};
};

export default Home;