import AnimatedDiv from "../generic/AnimatedDiv";
import Block from "../page/Block";
import ProjectCard from "../project/ProjectCard";

const Featured = ({ featured = [] }) => {
	return (
		<Block title="Featured Projects">
			<div name="featured-project">
				{featured.map((feat, idx) => {
					return (
						<AnimatedDiv key={feat.title}>
							<ProjectCard className={idx > 0 && "mt-8"} {...feat} />
						</AnimatedDiv>
					);
				})}
			</div>
		</Block>
	);
};

export default Featured;
