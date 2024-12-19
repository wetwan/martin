/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, ReactElement, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "@firebase/auth";
import { useNavigate } from "react-router";

type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  SignUP: () => void;
  logout: () => void;
  login: () => void;

  userDetails: UserDetails | undefined; // Change to UserDetails | undefined
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | undefined>>;

  fetchUser: () => void;
};

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
}

const initContext: AuthContextType = {
  user: null,
  setUser: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  loading: true,
  setLoading: () => {},
  SignUP: () => {},
  logout: () => {},
  login: () => {},
  userDetails: undefined,
  setUserDetails: () => {},
  fetchUser: () => {},
};

type Children = { children?: ReactElement | ReactElement[] };

export const AuthContext = createContext<AuthContextType>(initContext);

const AuthContextProvider = ({ children }: Children): ReactElement => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("adebayo.ridwan@ymgit addil.com");
  const [password, setPassword] = useState<string>("1234567890");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userDetails, setUserDetails] = useState<UserDetails | undefined>(
    undefined
  );

  const navigate = useNavigate();

  const SignUP = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      toast.error("You must be logged in to add a new user.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      toast.success("User added successfully!");
      if (user) {
        await setDoc(doc(db, "user", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
        });
      }
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User Logged Ssucessfully ");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const fetchUser = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "user", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const userData: UserDetails = docSnap.data() as UserDetails;
            setUserDetails(userData);
          } else {
            console.log("No user data found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user data:", error); // Handle errors
        }
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    setUser,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setEmail,
    email,
    password,
    setPassword,
    loading,
    setLoading,
    SignUP,
    logout,
    login,
    userDetails,
    setUserDetails,
    fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
