import { useRouter } from "next/router";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";

import { motion } from "framer-motion";

import PageHead from "../../components/page/PageHead";
import { TechElements } from "../../components/Tech";
import Links from "../../components/generic/Links";
import SEO from "../../components/SEO";
import Side from "../../components/project/Side";
import ReactDOM from "react-dom";
import ProjectHead from "../../components/project/ProjectHead";

const Project = ({ code, frontmatter }) => {
	const { id, title, techs, overview, repo, demo } = frontmatter;

	const [table, setTable] = useState([]);

	const Component = useMemo(() => getMDXComponent(code), [code]);

	const projectLinks = [
		{
			type: "github",
			name: "repository",
			link: repo,
		},
		{
			type: "website",
			name: "demo",
			link: demo,
		},
	];

	function lineify(str) {
		return str.replace(/\s/g, "-").toLowerCase();
	}

	function buildTable() {
		let temp = [];

		let section = {
			name: null,
			link: null,
			subsections: [],
		};

		let heads = document.querySelectorAll("h2, h3");
		heads.forEach((head, idx) => {
			head.id = lineify(head.innerText);
			head.classList.add("head-anchor");

			if (head.tagName === "H2") {
				if (
					(temp.length === 0 && section.name !== null) ||
					temp.length > 0
				) {
					temp.push({ ...section });
					section.subsections = [];
				}

				section.name = head.innerText;
				section.link = lineify(head.innerText);
			}

			if (head.tagName === "H3") {
				section.subsections.push({
					name: head.innerText,
					link: lineify(head.innerText)
				});
			}

			if (idx + 1 === heads.length) {
				temp.push({ ...section });
				section.subsections = [];
			}
		});

		setTable(temp);
	}

	useEffect(() => {
		buildTable();
	}, []);

	return (
		<>
			<div id="body-markdown" className="w-4/6">
				<SEO templateTitle={title} description={overview} />
				<ProjectHead project={frontmatter} />
				<div className="image">
					<Image
						width="1280"
						height="720"
						src={`/projects/${id}.png`}
						title={`Screenshot of ${title}`}
						alt={`Screenshot of ${title}`}
						priority
					/>
				</div>
				<Component />
			</div>
			<Side table={table} />
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
		props: { ...result },
	};
};

export default Project;
