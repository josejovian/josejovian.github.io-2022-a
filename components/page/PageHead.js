import Block from "./Block";

const PageHead = ({ title, description, addon }) => {
	return (
		<>
			<h1>{title}</h1>
			{addon}
			<p className="page-head-desc text-2xl">
				{description}
			</p>
		</>
	);
};

export default PageHead;