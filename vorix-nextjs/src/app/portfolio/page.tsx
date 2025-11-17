 
import Portfolio from "@/components/portfolio";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Playlists MPlayer - Template Next.js",
	description: "MPlayer - Explorez nos playlists.",
};

const index = () => {
	return (
		<Wrapper>
			<Portfolio />
		</Wrapper>
	);
};

export default index;
