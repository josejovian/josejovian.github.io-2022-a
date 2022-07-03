import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { TechElements } from "./Tech";
import AnimatedDiv from "../generic/AnimatedDiv";
import Card from "../generic/Card";

const ProjectCard = ({ id, title, techs, overview, type = "horizontal", className }) => {
	const identifier = `card-${title}-thumbnail`;

	return (
		<article>
			<Link href={`/project/${encodeURIComponent(id)}`}>
				<a>
					<Card
						className={className}
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
		</article>
	);
};

export default ProjectCard;
