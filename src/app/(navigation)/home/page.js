import BrowseByCategory from "@/components/HomeBeforeLogin/BrowseByCategory";
import EnterpriceSuit from "@/components/HomeBeforeLogin/EnterpriceSuit";
import ForClient from "@/components/HomeBeforeLogin/ForClient";
import Hero from "@/components/HomeBeforeLogin/Hero";
import HowItWorks from "@/components/HomeBeforeLogin/HowItWorks";

export default function Home(){
    return (
        <main className="">
            <Hero />    
            <HowItWorks />
            <BrowseByCategory />
            <EnterpriceSuit />
            <ForClient />
        </main>
    )
}