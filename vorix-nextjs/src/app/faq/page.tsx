 
import Faq from "@/components/faq";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "FAQ Nocturne Music - Template Next.js",
	description: "Nocturne Music - Questions fréquentes.",
};

const index = () => {
	return (
		<Wrapper>
			<Faq />
		</Wrapper>
	);
};

export default index;
