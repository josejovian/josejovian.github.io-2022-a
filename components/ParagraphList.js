import AnimatedDiv from "./generic/AnimatedDiv";
import Card from "./generic/Card";

const ParagraphList = ({ list }) => {
	return (
		<div>
			{list.map(({ name, icon, organization, addon, description }) => {
				return (
					<AnimatedDiv key={name} className="first:mt-0 mt-8">
						<Card
							variant="icon"
							image={{
								src: icon,
							}}
						>
							<h3 className="mt-2">{name}</h3>
							<p className="mt-2 font-bold text-sm">{organization}</p>
							<p className="my-2 font-light text-sm">{addon}</p>
							<div className="paragraph">{description}</div>
						</Card>
					</AnimatedDiv>
				);
			})}
		</div>
	);
};

export default ParagraphList;
