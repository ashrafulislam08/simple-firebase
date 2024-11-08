import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => console.log(err));
  };

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSingOut}>Sing Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSingIn}>Login with Google</button>
          <button onClick={handleGithubSingIn}>Login with Github</button>
        </>
      )}

      <div>
        {user && (
          <div className="flex gap-2 items-center border rounded-md p-3 ml-2 mt-5">
            <img
              className="w-16 rounded-full"
              src={`${
                user.photoURL
                  ? user.photoURL
                  : "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              }`}
              alt=""
            />
            <div>
              <h2 className="text-lg font-semibold">{user.displayName}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
