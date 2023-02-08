import Image from "next/image";
import Link from "next/link";

export default function ContactContent({ heading, text, icon, email, tel }) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				<Image src={icon} alt="" />
				<h2 className="text-[2rem] font-bold text-brandPrimary50">{heading}</h2>
			</div>
			{tel && <Link href={`tel:${tel}`} className="text-xl text-neutrals50 underline-offset-4 underline">{tel}</Link>}
			{text && <p  className="text-xl text-neutrals50 underline-offset-4 underline">{text}</p>}
			{email && (
				<Link href="mailto:getnoted@notedmediagroup.com" className="text-xl text-neutrals50 underline-offset-4 underline ">
					{email}
				</Link>
			)}
		</div>
	);
}
