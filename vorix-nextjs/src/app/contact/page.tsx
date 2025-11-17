 
import Contact from "@/components/contact";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Contact MPlayer - Template Next.js",
	description: "MPlayer - Contact et support.",
};

const index = () => {
	return (
		<Wrapper>
			<Contact />
		</Wrapper>
	);
};

export default index;
