import React, {
  useContext, createContext, useEffect, useState
} from 'react';

const UserContext = createContext();

export function UserProvider({ userListener, ...props }) {
  const [user, setUser] = useState();
  useEffect(() => {
    userListener(setUser);
  }, [userListener, setUser]);
  console.log(user);
  //   displayName: null
  // email: "abc@test.com"
  // emailVerified: false
  // photoURL
  return <UserContext.Provider value={user} {...props} />;
}

export function useUserContext() {
  return useContext(UserContext);
}
