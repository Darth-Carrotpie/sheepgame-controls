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
  setHat, setScepter
} from '../store/actions';
function MessageHandler({
  children
}) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function (from, data) {
      console.log("MessageHandler", from, data);

      if (data["show_view"] != null && data["show_view"] != "") {
        if (data["show_view"] == "menu") {
          dispatch(changeScreenToMenu())
        }
        if (data["show_view"] == "match") {
          dispatch(announceReady())
          dispatch(changeScreenToMatch())
        }

        if (data["show_view"] == "victory") {
          dispatch(changeScreenToMenu())
        }
        if (data["show_view"] == "loss") {
          dispatch(changeScreenToMenu())
        }
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