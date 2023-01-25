import "../styles/globals.css";
import { Jost } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jost = Jost({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<main className={jost.className}>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

export default MyApp;
