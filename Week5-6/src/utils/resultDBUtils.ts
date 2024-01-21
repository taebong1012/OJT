import { resultType } from "@/types/resultType";
import openDB from "@/utils/openIndexedDB";

/** DB에서 id를 기준으로 진단 결과 찾기
 * @param 유저의 아이디
 * @returns 해당 등급의 실시 일자, 학습 시간, 성취도
 */
export const getResult = async (id: string) => {
  const db: IDBDatabase = await openDB();
  const transaction: IDBTransaction = db.transaction(["results"]);
  const objStore: IDBObjectStore = transaction.objectStore("results");

  const getUserInfo = objStore.get(id);

  return new Promise<resultType | null>((resolve, reject) => {
    getUserInfo.onsuccess = (e: Event) => {
      const userInfo: resultType = (e.target as IDBRequest).result;

      /** 학습결과가 있다면 */
      if (userInfo) {
        resolve(userInfo);
      } else {
        /** 학습결과가 없다면 null 리턴 */
        resolve(null);
      }
    };

    getUserInfo.onerror = (e: Event) => {
      reject((e.target as IDBRequest).error);
    };
  });
};
