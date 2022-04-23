const PageHead = ({ title, description, addon }) => {
	return (
		<>
			<h1>{title}</h1>
			{addon}
			{description && (
				<p className="page-head-desc text-2xl">{description}</p>
			)}
		</>
	);
};

export default PageHead;