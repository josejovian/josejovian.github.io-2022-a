import Image from "next/image";
import { useEffect } from "react";
import Tooltip from "./Tooltip";
import Tech, { TechElements } from "./Tech";

const FeaturedCard = ({ id, name, techs, overview }) => {

	const identifier =`card-${name}-thumbnail`;

	return (
		<div className="card flex flex-col md:flex-row justify-start items-start mt-8 text-left border rounded-md overflow-hidden">
			<div className="card-thumbnail">
				<Image
					id={identifier}
					width="1280"
					height="720"
					src={`/projects/${id}.png`}
				/>
			</div>
			<div className="card-detail flex flex-col px-8 py-8">
				<h3 className="limit-text card-title">{ name }</h3>
				<div className="flex flex-row mt-2">
					<TechElements name={name} techs={techs} />
				</div>
				<p className="limit-text card-paragraph paragraph mt-2">
					{ overview }
				</p>
			</div>
		</div>
	);
};

export default FeaturedCard;
