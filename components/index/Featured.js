import FeaturedCard from "../FeaturedCard";

const projects = [{
	id: "bncc-x-tiket-movies",
	name: "BNCC x Tiket Movies",
	techs: ["nextjs", "redux"],
	overview: `
	A simple project I contributed to in Frontend Development Bootcamp at BNCC Academy 2021/2022.
	`,
}, {
	id: "disclone",
	name: "Disclone",
	techs: ["react", "redux", "firebase"],
	overview: `
	A simple project I made to practice state management and firebase.
	`,
}, {
	id: "quizify",
	name: "Quizify",
	techs: ["react", "firebase"],
	overview: `
	A project that I worked with my classmates for our Agile Software Development class.
	`,
}];

const Featured = () => {

	const featuredElement = projects.map((feat) => {
		return (
			<FeaturedCard key={feat.name} {...feat} />
		);
	});

	return (
		<div className="flex flex-col justify-center items-center text-center mt-16">
			<h2>Featured Projects</h2>
			<p className="mt-4 px-8 text-xl font-light"></p>
			<div>
				{ featuredElement }
			</div>
		</div>
	);
};

export default Featured;
