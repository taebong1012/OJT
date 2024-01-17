import { HttpResponse, http } from "msw";
import { addUserToDB, getIsPossibleId } from "@/utils/indexedDBUtils";
import { userType } from "@/types/userType";

export const handlers = [
  /** post: 회원가입 진행 */
  http.post("/signup", async ({ request }) => {
    try {
      const userData: userType = (await request.json()) as userType;

      await addUserToDB(userData);

      console.log("Users added successfully");

      return HttpResponse.json(null, { status: 200 });
    } catch (error: any) {
      console.error("Error adding users to DB:", error.message);
      return HttpResponse.json(null, { status: 404 });
    }
  }),

  /** get: id가 이미 사용중인 아이디인지 아닌지 확인
   * @params id: 이미 사용중인 아이디인지 판별할 아이디
   */
  http.get("/checkid/:id", async ({ params }) => {
    try {
      const id = params.id as string;

      const isPossibleId = await getIsPossibleId(id);

      return HttpResponse.json(isPossibleId, { status: 200 });
    } catch (error: any) {
      console.error("Error getIsPossibleId: ", error.message);
      return HttpResponse.json(null, { status: 404 });
    }
  }),
];
