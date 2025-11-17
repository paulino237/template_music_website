 
import Aboutus from "@/components/about-us"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "À propos Nocturne Music - Template Next.js",
	description: "Nocturne Music - Lecteur de musique et équipe.", 
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
