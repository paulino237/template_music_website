 
import BlogDetails from "@/components/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Détails du blog MPlayer - Template Next.js",
	description: "MPlayer - Détails d'article.",
};

const index = () => {
	return (
		<Wrapper>
			<BlogDetails />
		</Wrapper>
	);
};

export default index;
