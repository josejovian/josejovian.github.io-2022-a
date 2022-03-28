const Tooltip = ({ id, children, text }) => {
	const identifier = `${id}-wrapper`;

	function create() {
		if(!document.body)
			return;
		
		const existing = document.querySelectorAll(".tooltip");
		if(existing) 
			existing.forEach((instance) => {
				instance.remove();
			});

		const tooltip = document.createElement("div");
		tooltip.className = "tooltip";
		tooltip.id = id;

		const tooltipText = document.createElement("div");
		tooltipText.className = "tooltip-text";
		tooltipText.innerHTML = text;
		tooltip.appendChild(tooltipText);

		const wrapper = document.getElementById(identifier);
		wrapper.appendChild(tooltip);

		const width = tooltip.offsetWidth;
		tooltip.style.left = `${-width/2 + 16}px`;
		tooltip.classList.add("tooltip-ready");
	}

	function remove() {
		if(!document.body)
			return;

		const tooltip = document.getElementById(id);
		tooltip.classList.remove("tooltip-ready");
		setTimeout(() => {
			tooltip.remove();
		}, 200);
	}

	return (
		<div id={identifier} className="tooltip-base relative" onMouseEnter={create} onMouseLeave={remove}>
			{children}
		</div>
	);
};

export default Tooltip;
