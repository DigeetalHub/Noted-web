import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { ScrollProvider } from "../context/ScrollContext";
import { AccordionProvider } from "../context/AccordionContext";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout";

const mont = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<AccordionProvider>
				<ScrollProvider>
					<Layout className={`${mont.className}`}>
						<Component {...pageProps} />
						<Analytics />
						<ToastContainer />
					</Layout>
				</ScrollProvider>
			</AccordionProvider>
		</Fragment>
	);
}

export default MyApp;
