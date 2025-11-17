 
import BlogDetails from "@/components/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Détails du blog Nocturne Music - Template Next.js",
	description: "Nocturne Music - Détails d'article.",
};

const index = () => {
	return (
		<Wrapper>
			<BlogDetails />
		</Wrapper>
	);
};

export default index;
