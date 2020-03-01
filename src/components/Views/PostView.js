import React from "react";
import styled from "styled-components";

import { useStateValue } from "../../store/StateContext";
import ItemName from "../../components/Menu/ItemName";
import FlexColumn from "../Layout/FlexColumn";
import FlexRow from "../Layout/FlexRow";
import victoryImg from "../../images/menu/SelectionScreen_prebackground.png";
import PreBackground from "../../components/PreBackground";
import PlayAgainButton from "../Post/PlayAgainButton";
import BottomRow from "../Post/BottomRow";
import Achievements from "../Post/Achievements";

const FreeSpaceInsert = styled.div`
  height: 5vh;
  background-color: red;
  opacity: 30%;
`;

const PlayAgainButtonPosition = styled.div`
  position: absolute;
  bottom: -3px;
  right: 0;
`;
const AchievementsPosition = styled.div`
  position: absolute;
  bottom: 10vh;
  z-index: 1;
`;

const NamePosition = styled.div`
  position: absolute;
  top: 45vh;
`;

function MenuView() {
  const [{ menu }] = useStateValue();
  const [
    {
      post: { win }
    }
  ] = useStateValue();
  return (
    <div>
      <PreBackground {...menu} preBckgImage={victoryImg}></PreBackground>
      <NamePosition>
        <FlexRow justifyContent="center">
          <FlexColumn>
            <ItemName
              nameValue={win ? "victory" : "defeat"}
              fontSize={55}
              height={7}
              playerColor={win ? "#f7931e" : "black"}
            ></ItemName>
            <ItemName
              nameValue={menu.playerName}
              fontSize={24}
              height={7}
              playerColor={win ? "#f7931e" : "black"}
            ></ItemName>
          </FlexColumn>
        </FlexRow>
      </NamePosition>
      <AchievementsPosition>
        <Achievements></Achievements>
      </AchievementsPosition>
      <PlayAgainButtonPosition>
        <PlayAgainButton></PlayAgainButton>
      </PlayAgainButtonPosition>
      <PlayAgainButtonPosition>
        <BottomRow></BottomRow>
      </PlayAgainButtonPosition>
    </div>
  );
}

export default MenuView;
