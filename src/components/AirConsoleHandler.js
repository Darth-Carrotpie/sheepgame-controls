function SendAirConsole(data) {
  if (window.airconsole !== 'undefined') {
    //console.log("sending message to AirConsole, data: ", data);
    window.airconsole.message(window.airconsole.SCREEN, data);
  } else {
    console.log('would send AirConsole, but it was not found, data: ', data);
  }
}

export default SendAirConsole;
