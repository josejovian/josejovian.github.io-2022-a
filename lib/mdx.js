const { readdirSync, readFileSync } = require("fs");
const { join } = require("path");
const { bundleMDX } = require("mdx-bundler"); 

async function getProject(id) {
	const result = readFileSync(
		join(process.cwd(), "projects", `${id}.mdx`),
		"utf8"
	);

	return result;
};


async function getProjects() {
	const result = readdirSync(
		join(process.cwd(), "projects"),
		"utf8"
	);

	return result;
};

async function extractDataFromProjects(projects) {
	const result = await Promise.all(projects.map(async (filename) => {
		const data = await bundleMDX({
			source: readFileSync(
				join(process.cwd(), "projects", `${filename}`),
				"utf8"
			),
		});
		const { id, title, techs, overview, featured } = data.frontmatter;
		return {
			id: id,
			title: title,
			techs: techs,
			featured: featured,
			overview: overview,
		};
	}));

	return result;
};

module.exports = {
	getProject,
	getProjects,
	extractDataFromProjects
}