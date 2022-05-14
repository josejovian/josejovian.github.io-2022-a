import Block from "../page/Block";
import ParagraphList from "../ParagraphList";

const list = [
	{
		name: "Learning and Teaching (LnT) Division Manager",
		organization: "Bina Nusantara Computer Club (BNCC) Alam Sutera",
		icon: "https://media-exp1.licdn.com/dms/image/C560BAQEVkzkRVW8ouA/company-logo_200_200/0/1519907014195?e=1660780800&v=beta&t=_CUF8nHubG-DI5mfucx0Ul3LsKaB7E2kiSSXK8dxD84",
		addon: "October 2020 - October 2021",
		description: (
			<ul>
				<li>
					Had been managing and organizing the members&apos;
					classes.
				</li>
				<li>
					Had been the head committee of the workshop{" "}
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
		name: "Instructor of the C Programming Class",
		organization: "Bina Nusantara Computer Club (BNCC) Alam Sutera",
		icon: "https://media-exp1.licdn.com/dms/image/C560BAQEVkzkRVW8ouA/company-logo_200_200/0/1519907014195?e=1660780800&v=beta&t=_CUF8nHubG-DI5mfucx0Ul3LsKaB7E2kiSSXK8dxD84",
		addon: "September 2020 - January 2021",
		description: "Taught C programming language (and basic algorithm) for BNCC members, for one whole semester.",
	},
	{
		name: "Learning and Teaching (LnT) Division Activist",
		organization: "Bina Nusantara Computer Club (BNCC) Alam Sutera",
		icon: "https://media-exp1.licdn.com/dms/image/C560BAQEVkzkRVW8ouA/company-logo_200_200/0/1519907014195?e=1660780800&v=beta&t=_CUF8nHubG-DI5mfucx0Ul3LsKaB7E2kiSSXK8dxD84",
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
