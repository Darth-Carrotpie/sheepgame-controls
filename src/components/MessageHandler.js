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

function MessageHandler({ children }) {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    window.airconsole.onMessage = function (from, data) {
      if (from === window.AirConsole.SCREEN) {
        if (data['type'] !== null && data['type'] !== '') {
          //if (data['type'] !== 'playerProfile')
          //console.log('MessageHandler', from, data);
          dispatch(data);
        }
        if (data['type'] === 'changeView') SendViewMessage(data['value']);
        if (data['important'] !== null) {
          if (data['important'] === true) {
            ReplyImportant(data);
          }
        }
      }
    };
    window.airconsole.onReady = function (_data) {
      console.log('window.airconsole.onReady');
      console.log(window.airconsole.translations);
      var translations = window.airconsole.translations;
      Object.entries(translations).forEach((key, value) => {
        if (value === '') {
          delete translations[key];
        }
      });
      dispatch({ type: 'translations', value: translations });
      var tr_alt = {};
      tr_alt['ready'] = window.airconsole.getTranslation('ready') + '_';
      dispatch({ type: 'translations', value: tr_alt });
    };
    window.airconsole.onDisconnect = function (device_id) {
      console.log('window.airconsole.onDisconnect:' + device_id);
      if (device_id == 0) {
        console.log('screen disconnected!');
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
