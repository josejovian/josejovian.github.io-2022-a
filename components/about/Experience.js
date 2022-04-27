import Block from "../page/Block";
import ParagraphList from "../ParagraphList";

const list = [
	{
		name: "Learning and Teaching (LnT) Division Manager in Bina Nusantara Computer Club (BNCC) Alam Sutera",
		addon: 'October 2020 - October 2021',
		description: (
			<>
				I had been managing and organizing the members&apos; classes.
				 I also had been the head committee of the
				workshop <b>&#34;Let&apos;s Learn C Programming&#34; BNCC &times; Course-Net</b>.
			</>
		),
	},
	{
		name: "Instructor of the C Programming Class in Bina Nusantara Computer Club (BNCC) Alam Sutera",
		addon: 'September 2020 - January 2021',
		description:
			`I had been one of the two instructors that regularly
			taught the C programming language (including basic algorithm)
			for BNCC members, which were first semester students, for
			one whole semester.`,
	},
	{
		name: "Learning and Teaching (LnT) Division Activist in Bina Nusantara Computer Club (BNCC) Alam Sutera",
		addon: 'October 2019 - October 2020',
		description: (
			<>
				I had been a part of the committee of few events, 
				such as <b>Branding Yourself with Social Media (Seminar)</b>&nbsp;
				and <b>&#34;Android for Future&#34; Android Programming Workshop</b>.
				I also had assisted the LnT manager at the time to do their duties
				as a LnT manager.
			</>
		),
	},
];

const Experience = () => {
	return (
		<Block>
			<h2>Organizational/Volunteering Experience</h2>
			<ParagraphList list={list} />
		</Block>
	);
};

export default Experience;
