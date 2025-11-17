 
import TeamDetails from "@/components/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Détails de l'équipe MPlayer - Template Next.js",
	description: "MPlayer - Profil d'équipe.",
};

const index = () => {
	return (
		<Wrapper>
			<TeamDetails />
		</Wrapper>
	);
};

export default index;
