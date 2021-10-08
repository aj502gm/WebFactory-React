import LogoSection from "./LogoSection";
import ButtonSection from "./buttonSection/index";
export default function Nav(){
    return(
        <nav className="navbar navbar-dark bg-dark">
            <LogoSection />
            <ButtonSection></ButtonSection>
        </nav>
    )
}