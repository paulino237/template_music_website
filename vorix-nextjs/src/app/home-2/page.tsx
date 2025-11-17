 
import HomeTwo from "@/components/homes/home-2";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Home 2 MPlayer - Template Next.js",
	description: "MPlayer - Lecteur de musique et playlists.",
};

const index = () => {
	return (
		<Wrapper>
			<HomeTwo />
		</Wrapper>
	);
};

export default index;
