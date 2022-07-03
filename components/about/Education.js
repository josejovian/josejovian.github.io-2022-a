import Block from "../page/Block";
import EntryStack from "../EntryStack";

const list = [
	{
		name: "Shibaura Institute of Technology",
		icon: "https://media-exp1.licdn.com/dms/image/C4E0BAQHxSevBBgQL5g/company-logo_100_100/0/1621578504357?e=1660780800&v=beta&t=8k0riK7TbrUiIMI3fh62nYJKKJY5QoGVJHH2LXBfEIU",
		addon: "April 2022 - July 2022",
		description: (
			<ul>
				<li>
					Currently staying in Japan, to enroll in the Course Taking
					Sandwich Program.
				</li>
				<li>
					Taking the courses: ICT Systems Design, Recent Trends in
					Information Systems, Japanese Language, Computer Simulation,
					and Calculus with Differential Equations.
				</li>
			</ul>
		),
		attachments: [],
	},
	{
		name: "BINUS University",
		icon: "https://media-exp1.licdn.com/dms/image/C560BAQEFIZ8GzdwqwQ/company-logo_200_200/0/1589011860582?e=1660780800&v=beta&t=m9hTcOfjXhi__QcQThJYmmZC2PgSwRbEcpJ1GDXWvJQ",
		addon: "August 2019 - 2013",
		description: (
			<ul>
				<li>Majoring in Computer Science (Global Class).</li>
				<li>
					Joined student organization Bina Nusantara Computer Club
					(BNCC) Alam Sutera in October 2019.
				</li>
				<li>
					Participated in Indonesia National Contest 2020, and placed
					37th as a team out of 700+ teams.
				</li>
			</ul>
		),
		attachments: [
			{
				title: "Indonesia National Contest",
				link: "/attachments/inc-certificate.png",
			},
		],
	},
	{
		name: "SMA Citra Berkat",
		icon: "",
		addon: "2016 - 2019",
		description: ["I majored in Natural Sciences."],
		attachments: [],
	},
];

const Education = () => {
	return (
		<Block title="Education">
			<EntryStack list={list} />
		</Block>
	);
};

export default Education;
