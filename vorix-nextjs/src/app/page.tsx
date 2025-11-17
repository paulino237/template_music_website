 
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Vorix Music - Lecteur de musique moderne",
	description: "Écoutez vos morceaux favoris avec Vorix Music : playlists, contrôles intuitifs et visuels immersifs.", 
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
