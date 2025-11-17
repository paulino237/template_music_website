 
import ServiceDetails from "@/components/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Service Details MPlayer - Template Next.js",
	description: "MPlayer - Lecteur de musique et services.",
};

const index = () => {
	return (
		<Wrapper>
			<ServiceDetails />
		</Wrapper>
	);
};

export default index;
