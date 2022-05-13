import Block from "../page/Block";
import ParagraphList from "../ParagraphList";

const list = [
	{
		name: "Learning and Teaching (LnT) Division Manager in Bina Nusantara Computer Club (BNCC) Alam Sutera",
		addon: "October 2020 - October 2021",
		description: (
			<ul>
				<li>
					I had been managing and organizing the members&apos;
					classes.
				</li>
				<li>
					I also had been the head committee of the workshop{" "}
					<b>
						&#34;Let&apos;s Learn C Programming&#34; BNCC &times;
						Course-Net
					</b>
					.
				</li>
			</ul>
		),
	},
	{
		name: "Instructor of the C Programming Class in Bina Nusantara Computer Club (BNCC) Alam Sutera",
		addon: "September 2020 - January 2021",
		description: "Taught C programming language (and basic algorithm) for BNCC members, for one whole semester.",
	},
	{
		name: "Learning and Teaching (LnT) Division Activist in Bina Nusantara Computer Club (BNCC) Alam Sutera",
		addon: "October 2019 - October 2020",
		description: (
			<ul>
				<li>
					Had been a part of the committee of few events, such as, <b>Branding Yourself with Social Media (Seminar)</b>&nbsp; and{" "}
				<b>&#34;Android for Future&#34; Android Programming Workshop</b>
				</li>
				<li>
					Had assisted the LnT manager at the time to do their
					duties as a LnT manager.
				</li>
			</ul>
		),
	},
];

const Experience = () => {
	return (
		<Block>
			<h2>Organizational and Volunteering Experience</h2>
			<ParagraphList list={list} />
		</Block>
	);
};

export default Experience;
