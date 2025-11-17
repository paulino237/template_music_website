 
import Team from "@/components/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Équipe Nocturne Music - Template Next.js",
	description: "Nocturne Music - Notre équipe.",
};

const index = () => {
	return (
		<Wrapper>
			<Team />
		</Wrapper>
	);
};

export default index;
