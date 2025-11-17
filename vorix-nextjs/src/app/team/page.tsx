 
import Team from "@/components/team";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Équipe MPlayer - Template Next.js",
	description: "MPlayer - Notre équipe.",
};

const index = () => {
	return (
		<Wrapper>
			<Team />
		</Wrapper>
	);
};

export default index;
