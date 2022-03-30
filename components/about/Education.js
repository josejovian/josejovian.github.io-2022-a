import Block from "../page/Block";
import ParagraphList from "../ParagraphList";

const list = [
	{
		name: "BINUS University",
		addon: '2019 - 2013',
		description: `
			I am majoring in Computer Science (Global Class).
			I joined a student organization named Bina Nusantara
			Computer Club (BNCC) Alam Sutera in October 2019.
			I also participated in Indonesia National Contest 2020
			in a team "Polyoctahedron", and placed 37th.
		`,
	},
	{
		name: "SMA Citra Berkat",
		addon: '2016 - 2019',
		description: "I majored in Natural Sciences.",
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
