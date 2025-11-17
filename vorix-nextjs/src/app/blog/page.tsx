 
import Blog from "@/components/blog";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Blog Nocturne Music - Template Next.js",
	description: "Nocturne Music - Actualités et articles.",
};

const index = () => {
	return (
		<Wrapper>
			<Blog />
		</Wrapper>
	);
};

export default index;
