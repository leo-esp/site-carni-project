import { Footer } from "@/pageComponents/Footer";
import { InnerBanner } from "@/pageComponents/InnerBanner";
import { MainHeader } from "@/pageComponents/MainHeader";
import { MenuCarteOneSide } from "@/pageComponents/MenuCarteOneSide";
import { MenuDrinks } from "@/pageComponents/MenuDrinks";
import * as C from "../content";
import backgorund from "../assets/carni-background.png";
import risoto from "../assets/carni-risoto.jpg";
import sobremesa from "../assets/carni-sobremesa-1.jpg";
import { Menu1, Plate } from "@/pageComponents/Menu1";
import { Molhos, Salada4 } from "@/assets";

const ALaCarteMenu = () => {
  return (
    <>
      <MainHeader />
      <InnerBanner title="Cardápio a la Carté" image={backgorund} />
      {/* {C.MenuStarters.map(({ type, items, tag }) => {
      if (items.length < 2) return <OnlyOne type={type} {...items[0]} />;
      return <MenuCarte tag={tag as string} type={type} items={items} />;
    })} */}
      <Menu1
        items={C.MenuStarters[0].items as Plate[]}
        menuTitle="Saladas & Couvert"
        menuImage={Salada4}
      />
      {C.MenuMain.map(({ tag, type, groups }) => (
        <MenuDrinks tagTitle={tag} title={type} data={groups} />
      ))}

      <MenuCarteOneSide
        tag={C.MenuSideDish.tag}
        type={C.MenuSideDish.type}
        items={C.MenuSideDish.items}
      />
      <Menu1
        items={C.Sauces.items as Plate[]}
        menuTitle="Molhos"
        menuImage={Molhos}
      />
      <Menu1
        items={C.MenuPastas}
        menuTitle="Massas Artesanais / Risotos"
        menuImage={risoto}
        alternate
      />

      <Menu1
        items={C.MenuDeserts}
        menuTitle="Sobremesas"
        menuImage={sobremesa}
      />
      {/* <Menu1 plates={C.ExecutiveMenu.Apptizers.plates} tagTitle={C.ExecutiveMenu.Apptizers.tagTitle} menuTitle={C.ExecutiveMenu.Apptizers.menuTitle} backgroundImage={bg16} menuImage={menus1} />
        <Menu4 /> */}
      <Footer />
    </>
  );
};

export { ALaCarteMenu };
