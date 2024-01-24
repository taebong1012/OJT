import { HttpResponse, http } from "msw";
import { addUserToDB, findUser, getIsPossibleId } from "@/utils/userDBUtils";
import {
  signInUserType,
  userInfoType,
  userProfileType,
} from "@/types/userType";
import { createResult, getResult } from "@/utils/resultDBUtils";

type userIdRequestType = {
  id: string;
};

export const handlers = [
  /** post: 회원가입 진행 */
  http.post("/signup", async ({ request }) => {
    try {
      const userData: userInfoType = (await request.json()) as userInfoType;

      await addUserToDB(userData);

      console.log("Users added successfully");

      return HttpResponse.json(null, { status: 200 });
    } catch (error) {
      console.error("Error adding users to DB:", error);
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
    } catch (error) {
      console.error("Error getIsPossibleId: ", error);
      return HttpResponse.json(null, { status: 500 });
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
    } catch (error) {
      return HttpResponse.json(null, { status: 500 });
    }
  }),

  /** get: id를 통해서 사용자의 정보를 가져오고 이름, 나이, 성취도 데이터 리턴
   * @param id: 정보 데이터를 받을 사용자 id
   * @return 사용자의 이름, 나이, 성취도
   */
  http.get("/userinfo/:id", async ({ params }) => {
    try {
      const id = params.id as string;

      const userInfo = await findUser(id);
      const userProfileInfo: userProfileType = {
        age: userInfo.age,
        name: userInfo.name,
        acheivement: userInfo.acheivement,
      };

      return HttpResponse.json(userProfileInfo, { status: 200 });
    } catch (error) {
      console.error("Error no userInfo: ", error);
      return HttpResponse.json(null, { status: 500 });
    }
  }),

  /** get: id를 통해서 사용자의 진단결과를 가져옴.
   * @param id: 결과 데이터를 받을 사용자 id
   * @return resultType의 객체
   */
  http.get("/result/:id", async ({ params }) => {
    try {
      const id = params.id as string;

      const resultData = await getResult(id);

      return HttpResponse.json(resultData, { status: 200 });
    } catch (error) {
      return HttpResponse.json(null, { status: 500 });
    }
  }),

  /** 회원가입 시 유저의 진단 결과 객체 생성 후 테이블에 삽입 */
  http.post("/makeUserResult", async ({ request }) => {
    try {
      const requestUserId: userIdRequestType =
        (await request.json()) as userIdRequestType;

      await createResult(requestUserId.id);

      return HttpResponse.json(null, { status: 200 });
    } catch (error) {
      console.error("Error adding result to DB:", error);
      return HttpResponse.json(null, { status: 404 });
    }
  }),
];
