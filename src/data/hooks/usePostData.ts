import { ref, set } from "firebase/database";
import { db } from "../../lib/Firebase";

export const usePostData = () => {
  const postData = async (path: string, data: any) => {
    try {
      await set(ref(db, path), data);
    } catch (error) {
      console.log(error);
    }
  };

  return { postData };
};
