import React from "react";
import "./About.css";
import AboutCards from "../../components/AboutCards/AboutCards";

function About() {
  return (
    <div className="description">
      <h1 className="heading">The vision of GameRev</h1>
      <AboutCards
        id={0}
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
    mattis molestie a iaculis at erat pellentesque. Nam aliquam sem et tortor.
    Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Bibendum
    at varius vel pharetra vel turpis nunc. Eros in cursus turpis massa
    tincidunt dui ut ornare. Sapien et ligula ullamcorper malesuada proin.
    Tellus molestie nunc non blandit massa enim. Morbi tincidunt augue interdum
    velit euismod. Quam adipiscing vitae proin sagittis."
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fctd-thechristianpost.netdna-ssl.com%2Fen%2Ffull%2F66252%2Fplaystation-logo.jpg%3Fw%3D760%26h%3D760&f=1&nofb=1"
      />
      <AboutCards
        id={1}
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
    mattis molestie a iaculis at erat pellentesque. Nam aliquam sem et tortor.
    Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Bibendum
    at varius vel pharetra vel turpis nunc. Eros in cursus turpis massa
    tincidunt dui ut ornare. Sapien et ligula ullamcorper malesuada proin.
    Tellus molestie nunc non blandit massa enim. Morbi tincidunt augue interdum
    velit euismod. Quam adipiscing vitae proin sagittis."
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets1.ignimgs.com%2F2018%2F07%2F06%2Fxbox---generic-bug-1530916990792.jpg&f=1&nofb=1"
      />
      <AboutCards
        id={2}
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
    mattis molestie a iaculis at erat pellentesque. Nam aliquam sem et tortor.
    Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Bibendum
    at varius vel pharetra vel turpis nunc. Eros in cursus turpis massa
    tincidunt dui ut ornare. Sapien et ligula ullamcorper malesuada proin.
    Tellus molestie nunc non blandit massa enim. Morbi tincidunt augue interdum
    velit euismod. Quam adipiscing vitae proin sagittis."
        img="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.nintendolife.com%2Fc9e51688f744b%2Fnintendo-logo.original.jpg&f=1&nofb=1"
      />

      <h1 className="closing-heading">THE POWER OF GAMING</h1>
      {/* <div className="animated"></div> */}
    </div>
  );
}

export default About;
