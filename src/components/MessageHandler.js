import { useEffect } from "react";
import { useStateValue } from "../store/StateContext";

function SendViewMessage(elementValue) {
  var data = { element: "view", value: elementValue };
  console.log("sending view swiching confirmation: ", data);
  window.airconsole.message(window.airconsole.SCREEN, data);
}
function ReplyImportant(elementValue) {
  var data = {
    important: true,
    token: elementValue["token"],
    deviceId: elementValue["deviceId"],
    element: "",
    value: "",
  };
  window.airconsole.message(window.airconsole.SCREEN, data);
}

function MessageHandler({ children }) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function (from, data) {
      if (from === window.AirConsole.SCREEN) {
        if (data["type"] !== null && data["type"] !== "") {
          if (data["type"] !== "playerProfile")
            console.log("MessageHandler", from, data);
          dispatch(data);
        }
        if (data["type"] === "changeView") SendViewMessage(data["value"]);
        if (data["important"] !== null) {
          if (data["important"] === true) {
            ReplyImportant(data);
          }
        }
      }
    };
  }, []);

  return children;
}

export default MessageHandler;
