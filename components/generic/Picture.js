import Image from "next/image";
import { useEffect, useState } from "react";

/*
	Source:
	https://stackoverflow.com/questions/66949606/what-is-the-best-way-to-have-a-fallback-image-in-nextjs
*/

const Picture = ({ src, fallback, ...rest }) => {
	const [source, setSource] = useState({
		src: src,
	});

	function displayFallback() {
		setSource({
			...source,
			...fallback
		});
	}

	useEffect(() => {
		setSource({ ...source, src: src });
	}, [src]);

	return (
		<Image
			{...rest}
			{...source}
			src={src ? src : fallback.src}
			onLoadingComplete={(result) => {
				if (result.naturalWidth === 0) {
					// Broken image
					displayFallback();
				}
			}}
			onError={() => {
				displayFallback();
			}}
		/>
	);
};

export default Picture;
