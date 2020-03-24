import React from "react";
import BigBubble from "./BigBubble";
import SmallBubble from "./SmallBubble";
import styled from "styled-components";
import grassButton from "../../images/match/grass_icon.png";
import sheepButton from "../../images/match/BuySheep_icon.png";
import smiteButton from "../../images/match/icon_smite.png";
import { useStateValue } from "../../store/StateContext";
import * as upgradeIcons from "../../images/upgrade/icons";

const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /*   background-color: gray;
  opacity: 50%; */
`;

const FloatingBubbles = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /*   position: absolute; */
  /*   background-color: black;
  opacity: 50%; */
`;

function SendMessage(elementName, priceVal) {
  if (priceVal > 0) {
    var data = {
      element: elementName,
      pressed: false
    };
    //console.log("sending msg: ", data);
    window.airconsole.message(window.airconsole.SCREEN, data);
  }
}

function ShowPriceVal(inputValue) {
  //console.log("inputval:" + inputValue);
  if (inputValue > 0) {
    return Math.round(inputValue * 10) / 10;
  } else {
    return "";
  }
}

function BubbleGroup() {
  const [{ match, menu }] = useStateValue();
  console.log("BubbleGroup:" + upgradeIcons[match.upgradeA_icon]);
  return (
    <div>
      <BubblesInLine>
        <BigBubble
          bubbleImage={upgradeIcons[match.upgradeA_icon]}
          bckgColor={menu.playerColor}
          onClick={() => SendMessage("upgrade1", match.upgradeA_price)}
        >
          {ShowPriceVal(match.upgradeA_price)}
        </BigBubble>
        <BigBubble
          bubbleImage={upgradeIcons[match.upgradeB_icon]}
          bckgColor={menu.playerColor}
          onClick={() => SendMessage("upgrade2", match.upgradeB_price)}
        >
          {ShowPriceVal(match.upgradeB_price)}
        </BigBubble>
      </BubblesInLine>
      <FloatingBubbles>
        <SmallBubble
          bubbleImage={grassButton}
          top={2}
          onClick={() => SendMessage("buyGrass", match.priceGrass)}
          bckgColor={"green"}
        >
          {" "}
          {Math.round(match.priceGrass * 10) / 10}{" "}
        </SmallBubble>{" "}
        <SmallBubble
          bubbleImage={sheepButton}
          top="0"
          onClick={() => SendMessage("buySheep", match.priceSheep)}
          bckgColor={menu.playerColor}
        >
          {" "}
          {Math.round(match.priceSheep * 10) / 10}{" "}
        </SmallBubble>{" "}
        <SmallBubble
          bubbleImage={smiteButton}
          top="2"
          onClick={() => SendMessage("smash", match.priceSmash)}
          bckgColor={"orange"}
        >
          {" "}
          {Math.round(match.priceSmash * 10) / 10}{" "}
        </SmallBubble>{" "}
      </FloatingBubbles>{" "}
    </div>
  );
}

export default BubbleGroup;
