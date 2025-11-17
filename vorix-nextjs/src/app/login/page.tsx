 
import Login from "@/components/login"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Connexion MPlayer - Template Next.js",
	description: "MPlayer - Connectez-vous.",
};

const index = () => {
	return (
		<Wrapper>
			<Login />
		</Wrapper>
	);
};

export default index;
