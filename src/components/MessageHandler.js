import React, {useEffect} from 'react';
import { useStateValue } from '../store/StateContext';
import { announceReady, changeScreenToMatch } from '../store/actions';

function MessageHandler({children}) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function(from, data) {
        console.log("MessageHandler", from, data);

        if (data["show_view"] != null && data["show_view"] != ""){
            if (data["show_view"] == "match"){
                dispatch(announceReady())
                dispatch(changeScreenToMatch())
            }
        }
    };
  }, [])

  return (
    children
  );
}

export default MessageHandler;
