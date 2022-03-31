import Card from "../generic/Card";
import Block from "../page/Block";

const Featured = ({ featured=[] }) => {
	const featuredElement = featured.map((feat) => {
		return <Card key={feat.title} {...feat} />;
	});

	return (
		<Block>
			<h2>Featured Projects</h2>
			<div>{featuredElement}</div>
		</Block>
	);
};

export default Featured;
