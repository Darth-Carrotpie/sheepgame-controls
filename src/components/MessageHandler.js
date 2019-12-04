import React, {useEffect} from 'react';
import { useStateValue } from '../store/StateContext';
import { announceReady } from '../store/actions';

function MessageHandler({children}) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function(from, data) {
        console.log("MessageHandler", from, data);
    };
  }, [])

  return (
    children
  );
}

export default MessageHandler;
