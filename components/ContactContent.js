import Image from "next/image";
import Link from "next/link";

export default function ContactContent({ heading, text, icon, email }) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2">
				<Image src={icon} alt="" />
				<h2 className="text-[2rem] font-bold text-brandPrimary50">{heading}</h2>
			</div>
			{text && <p className="text-xl text-neutrals50">{text}</p>}
			{email && (
				<Link href="mailto:getnoted@notedmediagroup.com" className="text-xl text-neutrals50">
					{email}
				</Link>
			)}
		</div>
	);
}
