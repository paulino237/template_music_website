 
import ServiceDetails from "@/components/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Service Details Nocturne Music - Template Next.js",
	description: "Nocturne Music - Lecteur de musique et services.",
};

const index = () => {
	return (
		<Wrapper>
			<ServiceDetails />
		</Wrapper>
	);
};

export default index;
