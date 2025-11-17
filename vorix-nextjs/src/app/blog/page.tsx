 
import Blog from "@/components/blog";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Blog MPlayer - Template Next.js",
	description: "MPlayer - Actualités et articles.",
};

const index = () => {
	return (
		<Wrapper>
			<Blog />
		</Wrapper>
	);
};

export default index;
