import { useEffect } from 'react';
import { useStateValue } from '../store/StateContext';

function SendViewMessage(elementValue) {
  var data = { element: 'view', value: elementValue };
  console.log('sending view swiching confirmation: ', data);
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
          if (data['type'] !== 'playerProfile')
            console.log('MessageHandler', from, data);
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
    window.airconsole.onReady = function (_from, _data) {
      var translations = {};

      translations['ready'] = window.airconsole.getTranslation('ready');
      var play_again = window.airconsole.getTranslation('play again');
      translations['play_again'] = play_again;
      translations['waiting'] = window.airconsole.getTranslation('waiting');
      translations['victory'] = window.airconsole.getTranslation('victory');
      translations['defeat'] = window.airconsole.getTranslation('defeat');
      translations['back'] = window.airconsole.getTranslation('back');
      translations['upgrade'] = window.airconsole.getTranslation('upgrade');

      var tooltip_default = window.airconsole.getTranslation('tooltip_default');
      translations['tooltip_default'] = tooltip_default;
      var tooltip_upg = window.airconsole.getTranslation('tooltip_upg');
      translations['tooltip_upg'] = tooltip_upg;
      var tooltip_upg_alt = window.airconsole.getTranslation('tooltip_upg_alt');
      translations['tooltip_upg_alt'] = tooltip_upg_alt;
      var tooltip_grass = window.airconsole.getTranslation('tooltip_grass');
      translations['tooltip_grass'] = tooltip_grass;
      var tooltip_king = window.airconsole.getTranslation('tooltip_king');
      translations['tooltip_king'] = tooltip_king;
      var tooltip_smash = window.airconsole.getTranslation('tooltip_smash');
      translations['tooltip_smash'] = tooltip_smash;

      for (var i = 1; i <= 5; i++) {
        var slName = 'slide' + i + '_';

        translations[slName + 'title'] = window.airconsole.getTranslation(
          slName + 'title'
        );
        translations[slName + 'row1'] = window.airconsole.getTranslation(
          slName + 'row1'
        );
        translations[slName + 'row2'] = window.airconsole.getTranslation(
          slName + 'row2'
        );
        translations[slName + 'row3'] = window.airconsole.getTranslation(
          slName + 'row3'
        );
        translations[slName + 'row4'] = window.airconsole.getTranslation(
          slName + 'row4'
        );
      }
      Object.entries(translations).forEach((key, value) => {
        if (value === '') {
          delete translations[key];
        }
      });
      dispatch({ type: 'translations', value: translations });
    };
  }, []);

  return children;
}

export default MessageHandler;
