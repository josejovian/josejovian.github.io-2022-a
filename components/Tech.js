import { SiReact, SiFirebase, SiRedux, SiNextdotjs } from "react-icons/si";
import Tooltip from "./Tooltip";

const TechIcon = ({ tech }) => {
	switch(tech) {
		case "react":
			return <SiReact />
		case "redux":
			return <SiRedux />
		case "firebase":
			return <SiFirebase />
		case "nextjs":
			return <SiNextdotjs />
		default:
			return <></>
	}
}

const Tech = ({ tech }) => {
	return (
		<div className="tech-icon-wrapper">
			<TechIcon tech={tech} />
		</div>
	);
}

export const TechElements = ({ name, techs }) => {
	return (
		techs.map((tech) => {
			const identifier = `card-${name}-${tech}`;
			return (
				<div key={identifier} className="mr-2 last:mr-0">
					<Tooltip className="tooltip-wrapper" id={identifier} text={tech}>
						<Tech tech={tech} />
					</Tooltip>
				</div>
			);
		})
	)
};

export default Tech;