import BrowseByCategory from "@/components/HomeBeforeLogin/BrowseByCategory";
import Hero from "@/components/HomeBeforeLogin/Hero";
import HowItWorks from "@/components/HomeBeforeLogin/HowItWorks";

export default function Home(){
    return (
        <main className="">
            <Hero />    
            <HowItWorks />
            <BrowseByCategory />
        </main>
    )
}