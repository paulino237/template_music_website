 
import PortfolioDetails from "@/components/portfolio-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "MPlayer - Détails de playlist",
	description: "Découvrez les informations, visuels et le contexte musical de cette playlist.",
};

const index = () => {
	return (
		<Wrapper>
			<PortfolioDetails />
		</Wrapper>
	);
};

export default index;
