import { useEffect } from 'react';
import { useStateValue } from '../store/StateContext';

function SendViewMessage(elementValue) {
  var data = { element: 'view', value: elementValue };
  //console.log('sending view swiching confirmation: ', data);
  window.airconsole.message(window.airconsole.SCREEN, data);
}
function ReplyImportant(elementValue) {
  var data = {
    important: true,
    token: elementValue['token'],
    deviceId: elementValue['deviceId'],
    element: '',
    value: '',
  };
  window.airconsole.message(window.airconsole.SCREEN, data);
}

function GetTranslations(dispatch) {
  var translations = window.airconsole.translations;
  Object.entries(translations).forEach((key, value) => {
    if (value === '') {
      delete translations[key];
    }
  });
  dispatch({ type: 'translations', value: translations });
}

function MessageHandler({ children }) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function (from, data) {
      if (from === window.AirConsole.SCREEN) {
        if (data['type'] !== null && data['type'] !== '') {
          dispatch(data);
        }
        if (data['type'] === 'changeView') SendViewMessage(data['value']);
        if (data['important'] !== null) {
          if (data['important'] === true) {
            ReplyImportant(data);
          }
        }
        if (data['type'] === 'translationsReady') {
          GetTranslations(dispatch);
        }
      }
    };
    /*    window.airconsole.onReady = function (_data) {
             console.log('window.airconsole.onReady');
      console.log(window.airconsole.translations);
      GetTranslations(dispatch);
    }; */
    window.airconsole.onDisconnect = function (device_id) {
      if (device_id == 0) {
        var data = {};
        data['type'] = 'changeView';
        data['value'] = 'disconnected';
        dispatch(data);
      }
    };
  }, []);

  return children;
}

export default MessageHandler;
