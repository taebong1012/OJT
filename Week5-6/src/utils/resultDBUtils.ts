import { initResult } from "@/data/initResult";
import { resultInterface } from "@/types/resultType";
import openDB from "@/utils/openIndexedDB";

/** DB에서 id를 기준으로 진단 결과 찾기
 * @param 유저의 아이디
 * @returns 해당 등급의 실시 일자, 학습 시간, 성취도 등
 */
export const getResult = async (id: string) => {
  const db: IDBDatabase = await openDB();
  const transaction: IDBTransaction = db.transaction(["results"]);
  const objStore: IDBObjectStore = transaction.objectStore("results");

  const resultData = objStore.get(id);

  return new Promise<resultInterface | null>((resolve, reject) => {
    resultData.onsuccess = (e: Event) => {
      const resultInfo: resultInterface = (e.target as IDBRequest).result;

      /** 학습결과가 있다면 */
      if (resultInfo) {
        resolve(resultInfo);
      } else {
        /** 학습결과가 없다면 null 리턴 */
        resolve(null);
      }
    };

    resultData.onerror = (e: Event) => {
      reject((e.target as IDBRequest).error);
    };
  });
};

/** 초기 결과 객체 데이터 생성 후 테이블에 삽입 */
export const createResult = async (inputId: string) => {
  const db: IDBDatabase = await openDB();
  const transaction: IDBTransaction = db.transaction(["results"], "readwrite");
  const objStore: IDBObjectStore = transaction.objectStore("results");

  /** id가 들어간 초기 객체 생성 */
  const addRequest: IDBRequest = objStore.add({
    id: inputId,
    F: null,
    E: null,
  });

  await new Promise<void>((resolve, reject) => {
    addRequest.onsuccess = () => {
      resolve();
    };

    addRequest.onerror = () => {
      reject(new Error("Error adding initResult"));
    };
  });
};
