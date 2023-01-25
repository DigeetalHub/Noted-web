import "../styles/globals.css";
import { Jost } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProvider from "../context/ScrollContext";
import { Fragment, useContext } from "react";

const jost = Jost({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<ScrollProvider>
				<Header />
				<main className={`${jost.className} ` }>
					<Component {...pageProps} />
				</main>
				<Footer />
			</ScrollProvider>
		</Fragment>
	);
}

export default MyApp;
