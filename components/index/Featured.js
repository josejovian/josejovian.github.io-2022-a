import AnimatedDiv from "../generic/AnimatedDiv";
import Block from "../page/Block";
import ProjectCard from "../project/ProjectCard";

const Featured = ({ featured = [] }) => {
	return (
		<Block title="Featured Projects">
			<div name="featured-project">
				{featured.map((feat, idx) => {
					return (
						<AnimatedDiv>
							<ProjectCard className={idx > 0 && "mt-8"} key={feat.title} {...feat} />
						</AnimatedDiv>
					);
				})}
			</div>
		</Block>
	);
};

export default Featured;
