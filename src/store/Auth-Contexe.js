import { createContext, useCallback, useEffect, useState } from "react";
import { logout } from "../slices/auth";
import { useDispatch, useSelector } from "react-redux";
import eventBus from "../common/EventBus";


export const AuthStore = createContext({
    showModeratorBoard : false,
    showAdminBoard: false,
    currentUser :false,

  logOut: () => {},
});

const AuthProvider = ({ children }) => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const { user: currentUser } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
    useEffect(() => {
        if (currentUser) {
          setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
          setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
          setShowModeratorBoard(false);
          setShowAdminBoard(false);
        }  
    
        eventBus.on("logout", () => {
          logOut();
        });
    
        return () => {
          eventBus.remove("logout");
        };
      }, [currentUser, logOut]);

 
    
  return (
    <AuthStore.Provider
      value={{
        showModeratorBoard : showModeratorBoard,
    showAdminBoard: showAdminBoard,
    currentUser :currentUser,
       
        logOut: logOut,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
export default AuthProvider;
