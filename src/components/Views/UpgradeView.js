import React from "react";
import win_view from "../../images/win_view.png";
import { useStateValue } from "../../store/StateContext";
import BigBubble from "../Match/BigBubble";
import styled from "styled-components";

function OnClickBack() {
  var data = { element: "view", value: "back" };
  window.airconsole.message(window.airconsole.SCREEN, data);
}
const BubblesInLine = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /*   background-color: gray;
  opacity: 50%; */
`;
function OnClickBuyUpgrade(elementName) {
  var data = { element: elementName, pressed: true };
  console.log("sending msg: ", data);
  window.airconsole.message(window.airconsole.SCREEN, data);
}
function UpgradeView() {
  const [{ match, menu }] = useStateValue();
  return (
    <div>
      <div>
        <h2>{"UpgradeView"}</h2>
        <h3>{match.upgradeDisplayName}</h3>
        <h3>{match.upgradeDescription}</h3>
        <img
          src={win_view}
          alt="win_view"
          style={{ maxWidth: "100%", maxHeight: "100vh", position: "absolute" }}
          onClick={() => OnClickBack()}
        />
      </div>
      <div>
        <BubblesInLine>
          <BigBubble
            bckgColor={menu.playerColor}
            onClick={() => OnClickBuyUpgrade("upgrade")}
          >
            {Math.round(match.priceUpgrade * 10) / 10}
          </BigBubble>
          <BigBubble bckgColor={menu.playerColor} onClick={() => OnClickBack()}>
            {"X"}
          </BigBubble>
        </BubblesInLine>
      </div>
    </div>
  );
}

export default UpgradeView;
