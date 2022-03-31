const ParagraphList = ({ list }) => {
	return (
		list.map((entry) => {
			return (
				<div key={entry.name} className="paragraph-entry my-4 w-full text-left">
					<h3 className="my-2">{entry.name}</h3>
					<p className="paragraph-addon">{entry.addon}</p>
					<p className="paragraph">{entry.description}</p>
				</div>
			)
		})
	);
};

export default ParagraphList;