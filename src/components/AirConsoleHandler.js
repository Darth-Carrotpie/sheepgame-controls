function SendAirConsole(data) {
  if (window.airconsole !== 'undefined') {
    window.airconsole.message(window.airconsole.SCREEN, data);
  } else {
    //console.log('would send AirConsole, but it was not found, data: ', data);
  }
}

export default SendAirConsole;
