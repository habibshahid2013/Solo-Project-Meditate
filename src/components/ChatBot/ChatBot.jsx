


function ChatBot(){

const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing){
        setInitializing(false)
      }
    });

    return unsubscribe;
  }, [])



  const signInWithGoogle = async () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage()

    try{
      await auth.signInWithPopup(provider)
    } catch (error) {
      console.error(error);
      
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error){
      console.log(error.message); 
    }
  };

  if (initializing) return 'loading....';

  return (
    <div>
      {user ? (
      <>
      <Button onClick={signOut}>Sign Out</Button>
      <Channel user={user} db={db} />
      </>
      ) : (
      <Button onClick={signInWithGoogle}>Sign In with Google</Button>
    )}
    </div>
  );
}



export default ChatBot;