import { MenuDrinks } from "@/pageComponents/MenuDrinks"
import { Footer, InnerBanner, MainHeader } from "../pageComponents"

const DrinksMenu = () => (
    <>
        <MainHeader />
        <InnerBanner title="Cardápio de Drinks"/>
        {/* <MenuDrinks tagTitle="Coquetelaria Autoral" title="Melhores Drinks"/> */}
        {/* <MenuDrinks tagTitle="Drinks Clássicos" /> */}
        {/* <MenuDrinks tagTitle="Gin" /> */}
        <Footer />
    </>
)

export { DrinksMenu }