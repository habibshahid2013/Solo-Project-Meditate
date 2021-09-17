import './chatbot.css';
import Chat from './Chat';
import SignIn from './SignIn';
import SignOut from './SignOut';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatBot() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default ChatBot;