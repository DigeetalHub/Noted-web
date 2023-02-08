import "../styles/globals.css";
import { Jost } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollProvider } from "../context/ScrollContext";
import { AccordionProvider } from "../context/AccordionContext";
import { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";

const jost = Jost({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<AccordionProvider>
				<ScrollProvider>
					<main className={`${jost.className}`}>
						<Header />
						<Component {...pageProps} />
						<ToastContainer />
						<Footer />
					</main>
				</ScrollProvider>
			</AccordionProvider>
		</Fragment>
	);
}

export default MyApp;
