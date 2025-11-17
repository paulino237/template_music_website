 
import Login from "@/components/login"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Login Nocturne Music - Template Next.js",
	description: "Nocturne Music - Connectez-vous.",
};

const index = () => {
	return (
		<Wrapper>
			<Login />
		</Wrapper>
	);
};

export default index;
