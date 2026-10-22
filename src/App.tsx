import { useState } from 'react';
import './styles/global.css';
import WelcomeScreen from './components/WelcomeScreen';
import InvitationContent from './components/InvitationContent';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <WelcomeScreen onOpen={() => setIsOpen(true)} />
      ) : (
        <InvitationContent />
      )}
    </>
  );
}

export default App;
