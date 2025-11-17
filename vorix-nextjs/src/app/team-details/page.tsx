 
import TeamDetails from "@/components/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Détails de l'équipe Nocturne Music - Template Next.js",
	description: "Nocturne Music - Profil d'équipe.",
};

const index = () => {
	return (
		<Wrapper>
			<TeamDetails />
		</Wrapper>
	);
};

export default index;
