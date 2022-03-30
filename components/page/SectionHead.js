import Block from "./Block";

const SectionHead = ({ title, description }) => {
	return (
		<>
			<h2>{title}</h2>
			{description && (
				<p className="page-head-desc text-xl">{description}</p>
			)}
		</>
	);
};

export default SectionHead;
