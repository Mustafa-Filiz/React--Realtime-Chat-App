import { ref, child, get } from "firebase/database";
import { db } from "../../lib/Firebase";

export const useGetData = () => {
  const dbRef = ref(db);

  const getData = async (path: string) => {
    try {
      const snapshot = await get(child(dbRef, path));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getData };
};
