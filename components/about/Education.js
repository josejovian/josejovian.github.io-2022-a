import Block from "../page/Block";
import ParagraphList from "../ParagraphList";

const list = [
	{
		name: "Shibaura Institute of Technology",
		addon: 'April 2022 - July 2022',
		description: (
			<ul>
				<li>Currently staying in Japan, to enroll in the Course Taking Sandwich Program.</li>
				<li>Taking the courses: ICT Systems Design, Recent Trends in Information Systems, Japanese Language, Computer Simulation, and Calculus with Differential Equations.</li>
			</ul>
		)
	},
	{
		name: "BINUS University",
		addon: 'August 2019 - 2013',
		description: (
			<ul>
				<li>Majoring in Computer Science (Global Class).</li>
				<li>Joined student organization Bina Nusantara Computer Club (BNCC) Alam Sutera in October 2019.</li>
				<li>Participated in Indonesia National Contest 2020, and placed 37th as a team out of 700+ teams.</li>
			
			</ul>
		)
	},
	{
		name: "SMA Citra Berkat",
		addon: '2016 - 2019',
		description: ["I majored in Natural Sciences."],
	},
];

const Education = () => {
	return (
		<Block>
			<h2>Education</h2>
			<ParagraphList list={list} />
		</Block>
	);
};

export default Education;
