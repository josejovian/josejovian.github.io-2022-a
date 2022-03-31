import Image from "next/image";
import Link from "next/link";
import { TechElements } from "../Tech";

const Card = ({ id, title, techs, overview }) => {
	const identifier = `card-${title}-thumbnail`;

	return (
		<Link href={`/project/${encodeURIComponent(id)}`}>
			<a>
				<div className="card flex flex-col md:flex-row justify-start items-start mt-8 text-left border rounded-md overflow-hidden">
					<div className="card-thumbnail border-gray-200 border-b md:border-r md:border-b-0">
						<Image
							id={identifier}
							width="1280"
							height="720"
							src={`/projects/${id}.png`}
						/>
					</div>
					<div className="card-detail flex flex-col px-8 py-8">
						<h3 className="limit-text card-title">{title}</h3>
						<div className="flex flex-row mt-2">
							<TechElements name={title} techs={techs} />
						</div>
						<p className="limit-text card-paragraph paragraph mt-2">
							{overview}
						</p>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Card;
