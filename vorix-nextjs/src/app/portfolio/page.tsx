 
import Portfolio from "@/components/portfolio";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Playlists Nocturne Music - Template Next.js",
	description: "Nocturne Music - Explorez nos playlists.",
};

const index = () => {
	return (
		<Wrapper>
			<Portfolio />
		</Wrapper>
	);
};

export default index;
