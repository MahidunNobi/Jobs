import BrowseByCategory from "@/components/HomeBeforeLogin/BrowseByCategory";
import EnterpriceSuit from "@/components/HomeBeforeLogin/EnterpriceSuit";
import ForClient from "@/components/HomeBeforeLogin/ForClient";
import ForTalent from "@/components/HomeBeforeLogin/ForTalent";
import Hero from "@/components/HomeBeforeLogin/Hero";
import HowItWorks from "@/components/HomeBeforeLogin/HowItWorks";
import WhyBusiness from "@/components/HomeBeforeLogin/WhyBusiness";

export default function Home(){
    return (
        <main className="">
            <Hero />    
            <HowItWorks />
            <BrowseByCategory />
            <EnterpriceSuit />
            <ForClient />
            <WhyBusiness />
            <ForTalent />
        </main>
    )
}