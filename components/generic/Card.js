import clsx from "clsx";

const Card = ({ children, className, ...rest }) => {
	return (
		<div className={clsx(
			"card",
			"flex justify-start items-start",
			"text-left border rounded-md overflow-hidden",
			className,
		)} {...rest}>
			{ children }
		</div>
	);
};

export default Card;
