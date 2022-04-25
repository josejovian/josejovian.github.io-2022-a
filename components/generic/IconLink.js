import Link from "next/link";

const IconLink = ({ align, idx, icon, link, name }) => {
	const padding = align === "left" && idx === 0 ? "header-link-first pr-2" : "px-2";

	return (
		<Link href={link || "#"}>
			<a
				className={
					"header-link flex flex-row justify-center items-center " +
					padding
				}
				target="_blank"
			>
				{icon}
				{name}
			</a>
		</Link>
	);
};

export default IconLink;
