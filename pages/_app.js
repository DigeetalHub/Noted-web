import "../styles/globals.css";
import { Jost } from "@next/font/google";

const jost = Jost({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
	return (
		<main className={jost.className}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
