import Link from "next/link";

const IconLink = ({ icon, link="#", name }) => {
	return (
		<Link href={link}>
			<a className="account-link" target="_blank">
				{ icon }
				{ name }
			</a>
		</Link>
	);
};

export default IconLink;