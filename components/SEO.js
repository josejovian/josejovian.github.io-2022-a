/*
	Source:
	https://theodorusclarence.com/library/seo
*/

import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
	title: "josejovian",
	siteName: "josejovian",
	description:
		"An undergraduate computer science student, and an aspiring front end developer. Simply a website to showcase the projects I've built to test the knowledge I obtain.",
	url: "https://josejovian.github.io",
	image: "/favicon/android-chrome-256x256.png",
	type: "website",
	robots: "follow, index",
};

export default function SEO(props) {
	const router = useRouter();
	const meta = {
		...defaultMeta,
		...props,
	};
	meta["title"] = props.templateTitle
		? `${props.templateTitle} | ${meta.siteName}`
		: meta.title;

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="robots" content={meta.robots} />
			<meta content={meta.description} name="description" />
			<meta property="og:url" content={`${meta.url}${router.asPath}`} />
			<link rel="canonical" href={`${meta.url}${router.asPath}`} />
			{/* Open Graph */}
			<meta property="og:type" content={meta.type} />
			<meta property="og:site_name" content={meta.siteName} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:title" content={meta.title} />
			<meta name="image" property="og:image" content={meta.image} />
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@th_clarence" />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:image" content={meta.image} />
			{meta.date && (
				<>
					<meta
						property="article:published_time"
						content={meta.date}
					/>
					<meta
						name="publish_date"
						property="og:publish_date"
						content={meta.date}
					/>
					<meta
						name="author"
						property="article:author"
						content="Jose Jovian"
					/>
				</>
			)}

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/manifest.json" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#5bbad5"
			/>
			<meta name="msapplication-TileColor" content="#da532c" />
			<meta name="theme-color" content="#ffffff" />
		</Head>
	);
}
