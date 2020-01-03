import React from "react";
import styled from "styled-components";

//import menu_view from "../../images/menu_view.jpg";
import { useStateValue } from "../../store/StateContext";
//import { ReadyCloud } from "../../components/Menu/Cloud";
import KingScreen from "../../components/Menu/King";
import MenuRow from "../../components/Menu/MenuRow";
import ArrowButton from "../../components/Menu/Arrow";
import ItemName from "../../components/Menu/ItemName";
import EmptyRow from "../Layout/EmptyRow";
import FlexColumn from "../Layout/FlexColumn";
import Margined from "../Layout/Margined";
import defeatImg from "../../images/post/deafeat_prebackground.png";
import victoryImg from "../../images/post/vicotry_prebackground.png";
import crownIcon from "../../images/menu/icon_crown.png";
import Typography from "../../components/Match/Typography";
import PreBackground from "../../components/PreBackground";

const FreeSpaceInsert = styled.div`
  height: 5vh;
  background-color: red;
  opacity: 30%;
`;

function MenuView() {
  const [{ post, menu }] = useStateValue();
  return (
    <div>
      {/*       {<img src={menu_view} alt="menu_view"
        style={{ maxWidth: "100%", maxHeight: "100vh", position: "absolute", opacity: "50%" }}/>}
 */}
      <PreBackground {...menu} preBckgImage={post.win ? victoryImg : defeatImg}>
        <FreeSpaceInsert>abc insert</FreeSpaceInsert>{" "}
        {
          //push elements down to start listing below center
        }
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
        <MenuRow></MenuRow>
      </PreBackground>
    </div>
  );
}

export default MenuView;
