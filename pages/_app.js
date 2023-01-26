import "../styles/globals.css";
import { Jost } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollProvider } from "../context/ScrollContext";
import { Fragment } from "react";

const jost = Jost({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<ScrollProvider>
				<main className={`${jost.className}`}>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</main>
			</ScrollProvider>
		</Fragment>
	);
}

export default MyApp;
