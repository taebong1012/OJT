import { HttpResponse, http } from "msw";
import { addUserToDB, getIsPossibleId } from "@/utils/indexedDBUtils";
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

  http.get("/checkid/:id", async ({ request, params }) => {
    try {
      const id = params.id as string;

      const isPossibleId = await getIsPossibleId(id);

      // TODO: isPossible(boolean 값) response로 넘기기
    } catch (error: any) {
      console.error("Error getIsPossibleId: ", error.message);
    }
  }),
];
