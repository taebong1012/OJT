import { HttpResponse, http } from "msw";
import { addUserToDB, findUser, getIsPossibleId } from "@/utils/indexedDBUtils";
import { signInUserType, userInfoType } from "@/types/userType";

export const handlers = [
  /** post: 회원가입 진행 */
  http.post("/signup", async ({ request }) => {
    try {
      const userData: userInfoType = (await request.json()) as userInfoType;

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
      return HttpResponse.json(null, { status: error.status });
    }
  }),

  /** post: 아이디와 비밀번호를 받고 db와 일치하는지 판별
   * @return status: 200 - 일치하므로 로그인 진행
   * @return status: 400 - 일치하지 않으므로 로그인 진행 X
   */
  http.post("/signin", async ({ request }) => {
    const inputUser: signInUserType = (await request.json()) as signInUserType;

    try {
      const userInfo: userInfoType = await findUser(inputUser.id);

      if (userInfo && userInfo.password === inputUser.password) {
        return HttpResponse.json(null, { status: 200 });
      } else {
        return HttpResponse.json(null, { status: 400 });
      }
    } catch (error: any) {
      return HttpResponse.json(null, { status: error.status });
    }
  }),
];
