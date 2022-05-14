import clsx from "clsx";
import Image from "next/image";

const Card = ({ children, className, variant="default", type, image, ...rest }) => {
	return (
		<div
			className={clsx(
				"card w-full",
				"flex justify-start items-start",
				"text-left border-2 rounded-md overflow-hidden",
				"text-black transition-all font-normal",
				"hover:bg-teal-50 hover:shadow-md",
				"active:bg-teal-100",
				"focus:bg-teal-100",
				[
					variant === "default" && [
						"p-4 flex-col"
					],
					variant === "thumbnail" && [
						type === "vertical"
							? "flex-col"
							: "flex-col mt-8 md:flex-row",
					],
				],
				className
			)}
			{...rest}
		>
			{[variant === "default" && (
				children
			), variant === "thumbnail" && (
				<>
					<div
						className={clsx("card-thumbnail border-gray-200 ", [
							type === "vertical"
								? "border-r-0 border-b-2 card-thumbnail-vertical"
								: "border-b-2 md:border-r-2 md:border-b-0",
						])}
					>
						<Image
							id={image.identifier}
							width="1280"
							height="720"
							src={image.src}
							alt={image.title}
						/>
					</div>
					<div className="card-detail flex flex-col px-8 py-8 h-max">
						{children}
					</div>
				</>
			), variant === "icon" && (
				<>
					<div
						className={clsx("card-icon py-8 pl-8 pr-4", [
							type === "vertical"
								? "card-icon-vertical"
								: "",
						])}
					>
						<Image
							id={image.identifier}
							width="48"
							height="48"
							src={image.src}
							alt={image.title}
						/>
					</div>
					<div className="card-detail flex flex-col pl-4 pr-8 py-8 h-max">
						{children}
					</div>
				</>
			), ]}
		</div>
	);
};

export default Card;
