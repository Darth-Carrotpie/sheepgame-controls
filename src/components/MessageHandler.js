import React, {
  useEffect
} from 'react';
import {
  useStateValue
} from '../store/StateContext';
import {
  announceReady,
  changeScreenToMatch,
  changeScreenToMenu,
  setHat, setScepter, setColor
} from '../store/actions';
function MessageHandler({
  children
}) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function (from, data) {
      console.log("MessageHandler", from, data);

      if (data["show_view"] != null && data["show_view"] != "") {
        //general
        if(data["element"] == "color"){
          dispatch((setColor(data["value"])));
        }
        if (data["element"] == "view") {
          dispatch(changeScreen(data["value"]))
        }
        if (data["view"] == "match") {
          dispatch(announceReady())
          dispatch(changeScreenToMatch())
        }
        if (data["view"] == "victory") {
          dispatch(changeScreenToMenu())
        }
        if (data["view"] == "loss") {
          dispatch(changeScreenToMenu())
        }
        //menu
        if(data["element"] == "changeHat"){
          dispatch((setHat(data["value"])));
        }
        if(data["element"] == "changeScepter"){
          dispatch((setScepter(data["value"])));
        }

        //match messages:
        if(data["element"] == "changeScepter"){
          dispatch((setScepter(data["health"])));
        }
      }
    };
  }, [])

  return (
    children
  );
}

export default MessageHandler;