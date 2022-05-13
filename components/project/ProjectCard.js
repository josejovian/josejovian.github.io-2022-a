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
						className={clsx([
							type === "vertical"
								? "flex-col"
								: "flex-col mt-8 md:flex-row",
						])}
					>
						<div
							className={clsx("card-thumbnail border-gray-200 ", [
								type === "vertical"
									? "border-r border-b card-thumbnail-vertical"
									: "border-b md:border-r md:border-b-0",
							])}
						>
							<Image
								id={identifier}
								width="1280"
								height="720"
								src={`/projects/${id}.png`}
								alt={`Thumbnail of ${title}`}
							/>
						</div>
						<div className="card-detail flex flex-col px-8 py-8 h-max">
							<h3 className="limit-text card-title font-light">
								{title}
							</h3>
							<div className="flex flex-row mt-3">
								<TechElements name={title} techs={techs} />
							</div>
							<p className="limit-text card-paragraph paragraph mt-2">
								{overview}
							</p>
						</div>
					</Card>
				</a>
			</Link>
		</AnimatedDiv>
	);
};

export default ProjectCard;
