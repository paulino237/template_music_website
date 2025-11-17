 
import PricingPlan from "@/components/pricing-plan";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Tarifs Nocturne Music - Template Next.js",
	description: "Nocturne Music - Plans et abonnements.",
};

const index = () => {
	return (
		<Wrapper>
			<PricingPlan />
		</Wrapper>
	);
};

export default index;
