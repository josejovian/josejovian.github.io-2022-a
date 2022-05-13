import clsx from "clsx";

const Card = ({ children, className, ...rest }) => {
	return (
		<div className={clsx(
			"card",
			"flex justify-start items-start",
			"text-left border rounded-md overflow-hidden",
			"text-black transition-all font-normal",
			"hover:bg-teal-50 hover:shadow-md",
			"active:bg-teal-100",
			"focus:bg-teal-100",
			className,
		)} {...rest}>
			{ children }
		</div>
	);
};

export default Card;
