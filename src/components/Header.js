import React from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { togggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        console.log(photoURL);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleSignInSignOut = () => {
    //console.log(user.email.current.value);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser());
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearch = () => {
    // Toggle GPT Search Button
    dispatch(togggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    // Change Language
    //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <header className="absolute w-full bg-gradient-to-b from-black h-[120px] z-10">
      <div className="container w-[1200px] mx-auto h-24 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Netflix" className="w-36 h-10 object-contain" />
        </Link>
        <div className="flex justify-end items-center gap-3">
          {user?.email ? (
            <div className="flex justify-start items-start gap-3">
                {showGptSearch && <select className="bg-gray-800 text-white px-4 py-1 rounded-md cursor-pointer" onChange={handleLanguageChange}>
                  {/* <option value="en">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="telugu">Telugu</option>
                  <option value="kannada">Kannada</option> */}
                  {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
              <button className="bg-red-900 text-white px-4 py-1 rounded-md" onClick={handleGPTSearch}>{showGptSearch ? "Home" : "GPT Search"}</button>
              <img
                src={user?.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white">Welcome, {user?.displayName}</span>
            </div>
          ) : (
            ""
          )}
          <button
            className="bg-red-600 text-white px-4 py-1 rounded-md"
            onClick={handleSignInSignOut}
          >
            {user?.email ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
