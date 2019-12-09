import React from "react";
import styled from "styled-components";

import menu_view from "../../images/menu_view.png";
import { useStateValue } from "../../store/StateContext";
import { NameCloud, ReadyCloud } from "../../components/Menu/Cloud";
import KingScreen from "../../components/Menu/King";
import MenuRow from "../../components/Menu/MenuRow";
import ArrowButton from "../../components/Menu/Arrow";
import ItemName from "../../components/Menu/ItemName";
import FlexColumn from "../Layout/FlexColumn";
import Margined from "../Layout/Margined";

const MenuWrapper = styled(FlexColumn)`
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color ? props.color : "#42e7de"};
`;

function MenuView() {
  const [{ menu }] = useStateValue();
  return (
    <div>
      {/* <img
        src={menu_view}
        alt="menu_view"
        style={{ maxWidth: "100%", maxHeight: "100vh", position: "absolute" }}
      /> */}
      <MenuWrapper {...menu.color}>
        <MenuRow>
          <Margined>
            <NameCloud></NameCloud>
          </Margined>
        </MenuRow>

        <MenuRow>
          <KingScreen></KingScreen>
        </MenuRow>

        <MenuRow>
          <Margined>
            <FlexColumn>
              <MenuRow>
                <ArrowButton
                  elementMessage={"changeHat"}
                  valueMessage={-1}
                  left
                ></ArrowButton>
                <ItemName nameValue={menu.currentHat}></ItemName>
                <ArrowButton
                  elementMessage={"changeHat"}
                  valueMessage={1}
                ></ArrowButton>
              </MenuRow>
              <MenuRow>
                <ArrowButton
                  elementMessage={"changeScepter"}
                  valueMessage={-1}
                  left
                ></ArrowButton>
                <ItemName nameValue={menu.currentScepter}></ItemName>
                <ArrowButton
                  elementMessage={"changeScepter"}
                  valueMessage={1}
                ></ArrowButton>
              </MenuRow>
              <MenuRow>
                <ReadyCloud></ReadyCloud>
              </MenuRow>
            </FlexColumn>
          </Margined>
        </MenuRow>
      </MenuWrapper>
    </div>
  );
}

export default MenuView;
