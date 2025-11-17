
 
import Register from "@/components/register"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Register Nocturne Music - Template Next.js",
	description: "Nocturne Music - Créez votre compte.",
};

const index = () => {
	return (
		<Wrapper>
			<Register />
		</Wrapper>
	);
};

export default index;
