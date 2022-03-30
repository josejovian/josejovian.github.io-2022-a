import FeaturedCard from "./FeaturedCard";
import Block from "../page/Block";

const projects = [
	{
		id: "bncc-x-tiket-movies",
		name: "BNCC x Tiket Movies",
		techs: ["nextjs", "redux"],
		overview: `
	A project I contributed to in Frontend Development Bootcamp at BNCC Academy 2021/2022.
	`,
	},
	{
		id: "disclone",
		name: "Disclone",
		techs: ["react", "redux", "firebase"],
		overview: `
	A project I made to practice state management and firebase.
	`,
	},
	{
		id: "quizify",
		name: "Quizify",
		techs: ["react", "firebase"],
		overview: `
	A project that I worked with my classmates for our Agile Software Development class.
	`,
	},
];

const Featured = () => {
	const featuredElement = projects.map((feat) => {
		return <FeaturedCard key={feat.name} {...feat} />;
	});

	return (
		<Block>
			<h2>Featured Projects</h2>
			<div>{featuredElement}</div>
		</Block>
	);
};

export default Featured;
