import { HttpResponse, http } from "msw";
import { addUserToDB } from "@/utils/indexedDBUtils";
import { userType } from "@/types/userType";

export const handlers = [
  /** post: 회원가입 */
  http.post("/signup", async ({ request }) => {
    try {
      const userData: userType = (await request.json()) as userType;

      await addUserToDB(userData);

      console.log("Users added successfully");
    } catch (error: any) {
      console.error("Error adding users to DB:", error.message);
    }
  }),
];
