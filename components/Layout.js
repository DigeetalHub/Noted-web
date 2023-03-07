import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
	const { pathname } = useRouter();
	const isSocials = pathname === "/socials";
	return (
		<>
			{isSocials ? null : <Header className={className} />}
			<main className={className}>{children}</main>
			{isSocials ? null : <Footer className={className} />}
		</>
	);
};

export default Layout;
