import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, updateDoc, increment, onSnapshot } from "firebase/firestore";
import { auth, googleProvider, db } from "../lib/firebase";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [points, setPoints] = useState(0);

  // Variants untuk animasi tombol
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
      
      // Simpan data user ke Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        points: 0,
        lastLogin: new Date()
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const addPoints = async (amount: number) => {
    if (!user) return;
    
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      points: increment(amount)
    });
    setPoints(points + amount);
  };

  // Update poin secara real-time
  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
        setPoints(doc.data()?.points || 0);
      });
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <div className="container">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="header"
      >
        <h1>🪂 Revern</h1>
        {user ? (
          <div className="profile">
            <p>🔥 {points} Poin</p>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => addPoints(25)}
            >
              Follow Twitter (+25)
            </motion.button>
          </div>
        ) : (
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleGoogleLogin}
            className="google-btn"
          >
            Login with Google
          </motion.button>
        )}
      </motion.div>
    </div>
  );
        }
                        
