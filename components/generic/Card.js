import Image from "next/image";
import Link from "next/link";
import { TechElements } from "../Tech";
import AnimatedDiv from "./AnimatedDiv";

const Card = ({ id, title, techs, overview, type="horizontal" }) => {
	const identifier = `card-${title}-thumbnail`;

	let baseCardStyle = "card flex justify-start items-start text-left border rounded-md overflow-hidden ";
	let baseThumbnailStyle = "card-thumbnail border-gray-200 ";

	if(type === "vertical") {
		baseCardStyle += "flex-col";
		baseThumbnailStyle += "border-r border-b card-thumbnail-vertical";
	} else {
		baseCardStyle += " flex-col mt-8 md:flex-row";
		baseThumbnailStyle += "border-b md:border-r md:border-b-0 ";
	}

	return (
		<AnimatedDiv>
			<Link href={`/project/${encodeURIComponent(id)}`}>
				<a>
					<div className={baseCardStyle}>
						<div className={baseThumbnailStyle}>
							<Image
								id={identifier}
								width="1280"
								height="720"
								src={`/projects/${id}.png`}
								alt={`Thumbnail of ${title}`}
							/>
						</div>
						<div className="card-detail flex flex-col px-8 py-8 h-max">
							<h3 className="limit-text card-title font-light">{title}</h3>
							<div className="flex flex-row mt-3">
								<TechElements name={title} techs={techs} />
							</div>
							<p className="limit-text card-paragraph paragraph mt-2">
								{overview}
							</p>
						</div>
					</div>
				</a>
			</Link>
		</AnimatedDiv>
	);
};

export default Card;
