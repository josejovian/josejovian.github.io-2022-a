import Head from "next/head";
import Image from "next/image";
import Featured from "../components/index/Featured";
import Landing from "../components/index/Landing";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Landing />
			<Featured />
		</>
	);
}
