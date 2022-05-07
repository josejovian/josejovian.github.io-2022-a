import Head from "next/head";
import Image from "next/image";
import AnimatedDiv from "../components/generic/AnimatedDiv";
import Card from "../components/generic/Card";
import PageHead from "../components/page/PageHead";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

const Projects = ({ projects }) => {
	const projectElements = projects.map((project) => (
		<Card key={project.title} type="vertical" {...project} />
	));

	return (
		<>
			<SEO templateTitle="projects" />
			<PageHead
				title="Projects"
				description="The projects I've contributed to."
			/>
			<AnimatedDiv className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
				{projectElements}
			</AnimatedDiv>
		</>
	);
};

export const getStaticProps = async (req) => {
	const { getProjects, extractDataFromProjects } = require("../lib/mdx");

	const projects = await getProjects();
	const data = await extractDataFromProjects(projects);

	return {
		props: {
			projects: data.filter((datum) => !datum.hidden),
			revalidate: 300,
		},
	};
};

export default Projects;
