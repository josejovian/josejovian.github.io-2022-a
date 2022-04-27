import Links from "../generic/Links";
import PageHead from "../page/PageHead";

const ProjectHead = ({ project }) => {

	const links = [{
		type: "github",
		name: "repository",
		link: project.repo
	}, {
		type: "web",
		name: "demo",
		link: project.demo
	}];

	return (
		<>
			<PageHead title={project.title} description={project.overview} />
			<Links align="left" margin="mt-4" links={links} />
		</>
	);
};

export default ProjectHead;