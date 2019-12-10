import { useEffect } from "react";
import { useStateValue } from "../store/StateContext";
function MessageHandler({ children }) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function(from, data) {
      if (from === window.AirConsole.SCREEN){
        if (data["type"] !== null && data["type"] !== "") {
          console.log("MessageHandler", from, data);
          dispatch(data);
        }
      }
    };
  }, []);

  return children;
}

export default MessageHandler;
