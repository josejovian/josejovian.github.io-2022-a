const ParagraphList = ({ list }) => {
	return (
		list.map((entry) => {
			return (
				<div key={entry.name} className="my-4 w-full text-left">
					<h3 className="my-2">{entry.name}</h3>
					<p class="paragraph-addon">{entry.addon}</p>
					<p class="paragraph">{entry.description}</p>
				</div>
			)
		})
	);
};

export default ParagraphList;