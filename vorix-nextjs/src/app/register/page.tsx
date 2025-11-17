
 
import Register from "@/components/register"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Inscription MPlayer - Template Next.js",
	description: "MPlayer - Créez votre compte.",
};

const index = () => {
	return (
		<Wrapper>
			<Register />
		</Wrapper>
	);
};

export default index;
