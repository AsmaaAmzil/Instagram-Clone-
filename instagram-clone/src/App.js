import Authentification from "./authentification/Authentification";
import Homepage from "./homepage/Homepage";
import './App.css';
import { useSelector,useDispatch } from "react-redux";
import { loginUser,setLoading } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return  (
    <div className="app">
      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authentification/>}</>
      )}
    </div>
  );
}

export default App;
