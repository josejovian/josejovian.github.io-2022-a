import Links from "./Links";

const Landing = () => {
	return (
		<div className="flex flex-col justify-center items-center text-center">
			<h1>Hey! <b>Jose</b> here.</h1>
			<Links />
			<p className="mt-4 px-8 text-2xl font-light">
				I&nbsp;am an undergraduate computer science student, and an aspiring front-end developer.
				I&nbsp;am particularly interested in web development, especially React.
				I&nbsp;create personal projects to test out the things I have learnt.
			</p>
		</div>	
	);
};

export default Landing;