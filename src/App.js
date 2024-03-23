import React from 'react';
import Creators from './components/Creators_Home';
import HomeUser from './components/Home_User';
import EventOrganizer from './components/Event_organizer';
import DashBoard from './components/DashBoard';
import DashBoard2 from './components/DashBoard2';
import Chat from './components/Chat';
import PossibleHomePartner from './components/Possible_Home_Partner';
import Analytics from './components/Analytics';

const App = () => {
  return (
    <div>
      <Analytics />
      <Creators />
      <HomeUser />
      <EventOrganizer />
      <DashBoard />
      <DashBoard2 />
      <Chat />
      <PossibleHomePartner />
    </div>
  );
};

export default App;
