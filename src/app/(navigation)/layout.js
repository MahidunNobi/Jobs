import Navbar from "@/components/Navbar/Navbar"

export default function NavigationLayout({children}){
    return(
        <main>            
        <Navbar/>        
        {children}
        </main>
    )
}