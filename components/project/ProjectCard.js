import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { TechElements } from "./Tech";
import AnimatedDiv from "../generic/AnimatedDiv";
import Card from "../generic/Card";

const ProjectCard = ({ id, title, techs, overview, type = "horizontal" }) => {
	const identifier = `card-${title}-thumbnail`;

	return (
		<AnimatedDiv>
			<Link href={`/project/${encodeURIComponent(id)}`}>
				<a>
					<Card
						variant="thumbnail"
						image={{
							identifier,
							src: `/projects/${id}.png`,
							title,
						}}
						type={type}
					>
						<h3 className="limit-text card-title">
							{title}
						</h3>
						<div className="flex flex-row mt-3">
							<TechElements name={title} techs={techs} />
						</div>
						<p className="limit-text card-paragraph paragraph mt-2">
							{overview}
						</p>
					</Card>
				</a>
			</Link>
		</AnimatedDiv>
	);
};

export default ProjectCard;
