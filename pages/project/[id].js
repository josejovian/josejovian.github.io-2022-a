import { useRouter } from "next/router";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from 'mdx-bundler';
import PageHead from "../../components/page/PageHead";
import { TechElements } from "../../components/Tech";
import Links from "../../components/generic/Links";
import SEO from "../../components/SEO";
import Image from "next/image";
import { useEffect } from "react";

const Project = ({ code, frontmatter }) => {

	const { id, title, techs, overview, repo, demo } = frontmatter;

	const Component = useMemo(() => getMDXComponent(code), [code])

	const projectLinks = [{
		type: "github",
		name: "repository",
		link: repo
	}, {
		type: "website",
		name: "demo",
		link: demo
	}];

	return (
		<>
			<SEO 
				templateTitle={ title }
				description={ overview }
			/>
			<PageHead
				title={
					title
				}
				addon={
					<Links links={projectLinks} />
				}
				description={
					overview
				}
			/>
			<div className="image">
				<Image
					width="1280"
					height="720"
					src={`/projects/${id}.png`}
				/>
			</div>
			<Component />
		</>
	);
};

export const getServerSideProps = async (req) => {
	const { id } = req.params;
	const { getProject } = require("../../lib/mdx");
	
	const projectMD = await getProject(id);

	const { code, frontmatter } = await bundleMDX({
		source: projectMD,
	});

	const result = {
		code,
		frontmatter: {
			id: id || null,
			...frontmatter,
		},
	};

	return {
		props: { ...result }
	};
};

export default Project;
