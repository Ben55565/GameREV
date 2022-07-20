import React from "react";
import "./About.css";
import AboutCards from "../../components/AboutCards/AboutCards";

function About() {
  return (
    <div className="description">
      <h1 className="heading">The vision of GameRev</h1>
      <AboutCards
        id={0}
        p="PlayStation (Japanese: プレイステーション, Hepburn: Pureisutēshon, officially abbreviated as PS) is a video game brand that consists of five home video game consoles, two handhelds, a media center, and a smartphone, as well as an online service and multiple magazines. The brand is produced by Sony Interactive Entertainment, a division of Sony; the first PlayStation console was released in Japan in December 1994, and worldwide the following year. The series also has a strong line-up of first-party games due to SIE Worldwide Studios, a group of many studios owned by Sony Interactive Entertainment that exclusively developed them for PlayStation consoles. In addition, the series features various budget re-releases of games by Sony with different names for each region; these include the Greatest Hits, Platinum, Essentials, and The Best selection of games."
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fctd-thechristianpost.netdna-ssl.com%2Fen%2Ffull%2F66252%2Fplaystation-logo.jpg%3Fw%3D760%26h%3D760&f=1&nofb=1"
      />
      <AboutCards
        id={1}
        p="Xbox is a video gaming brand created and owned by Microsoft. The brand consists of five video game consoles, as well as applications (games), streaming services, an online service by the name of Xbox network, and the development arm by the name of Xbox Game Studios. The brand was first introduced in the United States in November 2001, with the launch of the original Xbox console."
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2018%2F07%2F06%2Fxbox---generic-bug-1530916990792.jpg&f=1&nofb=1"
      />
      <AboutCards
        id={2}
        p="Nintendo Co., Ltd. is a Japanese multinational video game company headquartered in Kyoto, Japan. It develops video games and video game consoles.

Nintendo was founded in 1889 as Nintendo Karuta by craftsman Fusajiro Yamauchi and originally produced handmade hanafuda playing cards. After venturing into various lines of business during the 1960s and acquiring a legal status as a public company, Nintendo distributed its first console, the Color TV-Game, in 1977. It gained international recognition with the release of Donkey Kong in 1981 and the Nintendo Entertainment System and Super Mario Bros. in 1985."
        img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.nintendolife.com%2Fc9e51688f744b%2Fnintendo-logo.original.jpg&f=1&nofb=1"
      />

      <h1 className="closing-heading">THE POWER OF GAMING</h1>
      <div className="animated">Manage your games here!</div>
      <section id="press">
        <img className="publishers ltt" src="/Assets/ltt.png" alt="ltt-logo" />
        <img className="publishers" src="/Assets/ign.png" alt="ign-logo" />
        <img className="publishers" src="/Assets/gi.png" alt="gi-logo" />
        <img className="publishers" src="Assets/gr.png" alt="gr-logo" />
      </section>
    </div>
  );
}

export default About;
