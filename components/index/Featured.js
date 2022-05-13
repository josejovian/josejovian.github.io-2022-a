import AnimatedDiv from "../generic/AnimatedDiv";
import Block from "../page/Block";
import ProjectCard from "../project/ProjectCard";

const Featured = ({ featured = [] }) => {
	return (
		<Block>
			<h2>Featured Projects</h2>
			<AnimatedDiv>
				{featured.map((feat) => {
					return <ProjectCard key={feat.title} {...feat} />;
				})}
			</AnimatedDiv>
		</Block>
	);
};

export default Featured;
