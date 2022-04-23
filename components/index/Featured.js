import AnimatedDiv from "../generic/AnimatedDiv";
import Card from "../generic/Card";
import Block from "../page/Block";

const Featured = ({ featured = [] }) => {
	const featuredElement = featured.map((feat) => {
		return <Card key={feat.title} {...feat} />;
	});

	return (
		<Block>
			<h2>Featured Projects</h2>
			<AnimatedDiv>{featuredElement}</AnimatedDiv>
		</Block>
	);
};

export default Featured;
