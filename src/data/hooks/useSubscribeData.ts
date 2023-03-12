import { ref, onValue } from "firebase/database";
import { db } from "../../lib/Firebase";

export const useSubscribeData = () => {
  const subscribeData = async (path: string, callback: any) => {
    try {
      onValue(ref(db, path), (snapshot) => {
        const data = snapshot.val();
        callback(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { subscribeData };
};
