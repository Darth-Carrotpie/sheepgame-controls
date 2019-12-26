import React from "react";
import styled from "styled-components";

//import menu_view from "../../images/menu_view.jpg";
import { useStateValue } from "../../store/StateContext";
import { ReadyCloud } from "../../components/Menu/Cloud";
import KingScreen from "../../components/Menu/King";
import MenuRow from "../../components/Menu/MenuRow";
import ArrowButton from "../../components/Menu/Arrow";
import ItemName from "../../components/Menu/ItemName";
import EmptyRow from "../Layout/EmptyRow";
import FlexColumn from "../Layout/FlexColumn";
import Margined from "../Layout/Margined";
import backgroundImg from "../../images/menu/SelectionScreen_prebackground.png";
import crownIcon from "../../images/menu/icon_crown.png";
import Typography from "../../components/Match/Typography";

const MenuWrapper = styled(FlexColumn)`
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background: url(${backgroundImg});
  background-color: ${props =>
    props.playerColor ? props.playerColor : "#42e7de"};
  background-repeat: no-repeat;
  background-size: cover;
  /*   opacity: 50%; */
`;
/* const FrontGround = styled(FlexColumn)`
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background: ${MenuFrontGround};
`; */
function MenuView() {
  const [{ menu, match }] = useStateValue();
  return (
    <div>
      {/*       {<img src={menu_view} alt="menu_view"
        style={{ maxWidth: "100%", maxHeight: "100vh", position: "absolute", opacity: "50%" }}/>}
 */}
      <MenuWrapper {...menu}>
        <MenuRow>
          <KingScreen></KingScreen>
        </MenuRow>

        <MenuRow>
          <Margined>
            <ItemName
              nameValue={menu.playerName}
              fontSize={24}
              height={7}
              playerColor={menu.playerColor ? menu.playerColor : "black"}
            ></ItemName>
          </Margined>
        </MenuRow>

        <MenuRow>
          <Typography icon={crownIcon} textColor={"white"}>
            {match.crowns}
          </Typography>
        </MenuRow>

        <MenuRow>
          <FlexColumn>
            <MenuRow>
              <ArrowButton
                elementMessage={"changeHat"}
                valueMessage={-1}
                left
              ></ArrowButton>
              <ItemName
                nameValue={menu.hat}
                fontSize={24}
                height={5}
              ></ItemName>
              <ArrowButton
                elementMessage={"changeHat"}
                valueMessage={1}
              ></ArrowButton>
            </MenuRow>

            <MenuRow>
              <ItemName
                nameValue={"unlocked at xxx crowns"}
                fontSize={12}
                height={3}
              ></ItemName>
            </MenuRow>

            <MenuRow>
              <EmptyRow rowHeight={2}></EmptyRow>
            </MenuRow>

            <MenuRow>
              <ArrowButton
                elementMessage={"changeScepter"}
                valueMessage={-1}
                left
              ></ArrowButton>
              <ItemName
                nameValue={menu.scepter}
                fontSize={24}
                height={5}
              ></ItemName>
              <ArrowButton
                elementMessage={"changeScepter"}
                valueMessage={1}
              ></ArrowButton>
            </MenuRow>
            <MenuRow>
              <ItemName
                nameValue={"unlocked at xxx crowns"}
                fontSize={12}
                height={3}
              ></ItemName>
            </MenuRow>

            <MenuRow>
              <EmptyRow rowHeight={3}></EmptyRow>
            </MenuRow>

            <MenuRow>
              <ReadyCloud></ReadyCloud>
            </MenuRow>
          </FlexColumn>
        </MenuRow>
      </MenuWrapper>
    </div>
  );
}

export default MenuView;
