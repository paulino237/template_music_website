 
import PricingPlan from "@/components/pricing-plan";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Tarifs MPlayer - Template Next.js",
	description: "MPlayer - Plans et abonnements.",
};

const index = () => {
	return (
		<Wrapper>
			<PricingPlan />
		</Wrapper>
	);
};

export default index;
