import Head from "next/head";
import Image from "next/image";
import Card from "../components/generic/Card";
import PageHead from "../components/page/PageHead";
import SEO from "../components/SEO";
import styles from "../styles/Home.module.css";

const Projects = ({ projects }) => {

	const projectElements = projects.map((project) =>
		<Card key={project.title} {...project} />
	);

	return (
		<>
			<SEO
				templateTitle="projects"
			/>
			<PageHead
				title="Projects"
				description="The projects I've contributed to."
			/>
			{ projectElements }
		</>
	);
}

export const getStaticProps = async (req) => {
	const { getProjects, extractDataFromProjects } = require("../lib/mdx");

	const projects = await getProjects();
	const data = await extractDataFromProjects(projects);
	
	return {
		props: {
			projects: data
		}
	};
};

export default Projects;