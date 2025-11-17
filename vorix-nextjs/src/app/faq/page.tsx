 
import Faq from "@/components/faq";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "FAQ MPlayer - Template Next.js",
	description: "MPlayer - Questions fréquentes.",
};

const index = () => {
	return (
		<Wrapper>
			<Faq />
		</Wrapper>
	);
};

export default index;
