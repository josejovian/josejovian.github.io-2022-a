import clsx from "clsx";
import Image from "next/image";
import Picture from "./Picture";
import { motion } from "framer-motion";

const Card = ({
	children,
	className,
	variant = "default",
	type,
	forStack = false,
	image,
	...rest
}) => {
	return (
		<article
			className={clsx(
				"card w-full",
				"flex justify-start items-start",
				"text-left overflow-hidden",
				"text-black transition-all font-normal",
				[
					!forStack &&
						"border-2 rounded-md hover:shadow-md hover:bg-teal-50",
				],
				[
					variant === "default" && ["p-4 flex-col"],
					variant === "thumbnail" && [
						type === "vertical"
							? "flex-col"
							: "flex-col md:flex-row",
					],
				],
				className
			)}
			{...rest}
		>
			{variant === "default" && children}

			{variant === "thumbnail" && (
				<>
					<div
						className={clsx("card-thumbnail border-gray-200 ", [
							type === "vertical"
								? "border-r-0 border-b-2 card-thumbnail-vertical"
								: "border-b-2 md:border-r-2 md:border-b-0",
						])}
					>
						<Picture
							id={image.identifier}
							width="1280"
							height="720"
							src={image.src}
							fallback={{
								src: "/fallback-thumbnail.webp",
							}}
							focusable={false}
							alt={image.title}
						/>
					</div>
					<div className="card-detail flex flex-col px-8 py-8 h-max">
						{children}
					</div>
				</>
			)}
			{variant === "icon" && (
				<div className="flex flex-col md:flex-row">
					<div
						className={clsx("card-icon p-8 pb-2 md:pr-4 md:pb-8", [
							type === "vertical" ? "card-icon-vertical" : "",
						])}
					>
						<Picture
							id={image.identifier}
							width="48"
							height="48"
							src={image.src}
							fallback={{
								src: "/fallback-icon.webp",
							}}
							focusable={false}
							alt={image.title}
						/>
					</div>
					<div className="card-detail flex flex-col p-8 pt-2 md:pl-4 md:pt-8 h-max">
						{children}
					</div>
				</div>
			)}
		</article>
	);
};

export default Card;
