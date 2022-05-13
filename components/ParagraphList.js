import Card from "./generic/Card";

const ParagraphList = ({ list }) => {
	return (
		<div>
			{list.map(({ name, addon, description }) => {
				return (
					<Card key={name} className="first:mt-0 mt-8">
						<h3 className="my-2">{name}</h3>
						<p className="paragraph-addon">{addon}</p>
						<div className="paragraph">
							{description}
						</div>
					</Card>
				);
			})}
		</div>
	);
};

export default ParagraphList;
