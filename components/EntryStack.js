import clsx from "clsx";
import AnimatedDiv from "./generic/AnimatedDiv";
import Card from "./generic/Card";
import Picture from "./generic/Picture";
import Tooltip from "./Tooltip";

const EntryStack = ({ list }) => {
	return (
		<section className="card-stack">
			{list.map(
				(
					{
						name,
						icon,
						organization,
						addon,
						description,
						attachments,
					},
					idx
				) => {
					return (
						<AnimatedDiv key={name} name={name} className="first:mt-0">
							<Card
								variant="icon"
								forStack={true}
								className={clsx(
									"border-2 hover:shadow-none",
									idx === 0 && "rounded-none rounded-t-xl",
									idx > 0 && "border-t-0",
									idx > 0 &&
										idx < list.length - 1 &&
										"rounded-none",
									idx === list.length - 1 &&
										"rounded-none rounded-b-xl"
								)}
								image={{
									src: icon,
								}}
							>
								<h3 className="mt-2">{name}</h3>
								<p className="mt-2 font-bold text-sm">
									{organization}
								</p>
								<p className="my-2 font-light text-sm">
									{addon}
								</p>
								<div className="paragraph">{description}</div>
								{attachments.length > 0 && (
									<div
										className={clsx(
											"grid grid-flow-rows grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
											"w-fit mt-4"
										)}
									>
										{attachments.map(({ title, link }) => {
											return (
												<div
													key={`attachments-${name}-${title}`}
												>
													<Picture
														width="960"
														height="540"
														fallback="fallback-thumbnail.webp"
														title={title}
														alt={title}
														src={link}
													/>
												</div>
											);
										})}
									</div>
								)}
							</Card>
						</AnimatedDiv>
					);
				}
			)}
		</section>
	);
};

export default EntryStack;
