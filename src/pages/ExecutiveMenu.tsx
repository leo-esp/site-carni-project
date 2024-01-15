import { Footer, InnerBanner, MainHeader, Menu1 } from "../pageComponents";
import { ExecutiveMenu as Content } from "../content";

import menus1 from "../assets/menus-1.jpg";
import menus2 from "../assets/menus-2.jpg";
import menus3 from "../assets/menus-desert.jpg";
import {
  CapaExecutivo,
} from "@/assets";
import { ExecutivePlate } from "@/pageComponents/ExecutivePlate";

const ExecutiveMenu = () => (
  <>
    <MainHeader />
    <InnerBanner title="Cardápio Executivo" image={CapaExecutivo} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      {
        Content.Main.plates.map((plate, i) => (<ExecutivePlate {...plate} right={i % 2 === 0}/>))
      }
    </div>
    {/* <Menu1
      items={Content.Apptizers.plates}
      tagTitle={Content.Apptizers.tagTitle}
      menuTitle={Content.Apptizers.menuTitle}
      menuImage={menus1}
    />
    <Menu1
      items={Content.Main.plates}
      tagTitle={Content.Main.tagTitle}
      menuTitle={Content.Main.menuTitle}
      menuImage={menus2}
      alternate
    />
    <Menu1
      items={Content.Season.plates}
      tagTitle={Content.Season.tagTitle}
      menuTitle={Content.Season.menuTitle}
      menuImage={menus1}
    />
    <Menu1
      items={Content.Desserts.plates}
      tagTitle={Content.Desserts.tagTitle}
      menuTitle={Content.Desserts.menuTitle}
      menuImage={menus3}
      alternate
    /> */}
    <Footer />
  </>
);

export { ExecutiveMenu };
