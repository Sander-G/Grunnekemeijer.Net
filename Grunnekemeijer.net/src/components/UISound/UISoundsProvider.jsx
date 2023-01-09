import React, { useEffect, useState } from 'react';
import { UISoundsContext } from './UISoundsContext';

function UISoundsProvider({ children, muteState, setMuteState }) {
  useEffect(() => {
    // Toggle the mute state of all UI sounds when the global mute state changes
    toggleUISoundsMute(muteState);
  }, [muteState]);

  return (
    <UISoundsContext.Provider value={{ muteState, setMuteState }}>
      {children}
    </UISoundsContext.Provider>
  );
}


// Define the toggleUISoundsMute function
function toggleUISoundsMute(muteState) {
  // Loop through all of the UI sound objects in your application
  for (const sound of uiSounds) {
    // Set the mute state of the sound object
    sound.setMute(muteState);
  }
}


export default UISoundsProvider;