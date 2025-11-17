 
import Aboutus from "@/components/about-us"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "À propos MPlayer - Template Next.js",
	description: "MPlayer - Lecteur de musique et équipe.", 
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
