import { userInfoType } from "@/types/userType";
import openDB from "@/utils/openIndexedDB";

export const addUserToDB = async (userData: userInfoType) => {
  try {
    const db: IDBDatabase = await openDB();
    const transaction: IDBTransaction = db.transaction(["users"], "readwrite");
    const objStore: IDBObjectStore = transaction.objectStore("users");

    const addRequest: IDBRequest = objStore.add(userData);

    await new Promise<void>((resolve, reject) => {
      addRequest.onsuccess = () => {
        resolve();
      };
      addRequest.onerror = () => reject(new Error("Error adding user to DB"));
    });
  } catch (error) {
    console.error("Transaction Error: ", error);
  }
};

export const getIsPossibleId = async (id: string) => {
  const db: IDBDatabase = await openDB();
  const transaction: IDBTransaction = db.transaction(["users"]);
  const objStore: IDBObjectStore = transaction.objectStore("users");

  const getAllIdsRequest = objStore.getAllKeys();

  return new Promise<boolean>((resolve, reject) => {
    getAllIdsRequest.onsuccess = (e: Event) => {
      const allIds: string[] = (e.target as IDBRequest).result;

      /** 포함되어있다면 불가능, 포함되어 있지 않다면 가능 */
      const isPossibleId = !allIds.includes(id);

      resolve(isPossibleId);
    };

    getAllIdsRequest.onerror = (e: Event) => {
      reject((e.target as IDBRequest).error);
    };
  });
};

/** DB에서 id를 기준으로 유저의 정보 찾기
 * @param 유저의 아이디
 * @returns 해당 아이디의 유저 정보
 */
export const findUser = async (id: string) => {
  const db: IDBDatabase = await openDB();
  const transaction: IDBTransaction = db.transaction(["users"]);
  const objStore: IDBObjectStore = transaction.objectStore("users");

  const getUserInfo = objStore.get(id);

  return new Promise<userInfoType>((resolve, reject) => {
    getUserInfo.onsuccess = (e: Event) => {
      const userInfo: userInfoType = (e.target as IDBRequest).result;
      resolve(userInfo);
    };

    getUserInfo.onerror = (e: Event) => {
      reject((e.target as IDBRequest).error);
    };
  });
};

export const updateUser = async (requestData: userInfoType) => {
  const db: IDBDatabase = await openDB();
  const transaction: IDBTransaction = db.transaction(["users"], "readwrite");
  const objStore: IDBObjectStore = transaction.objectStore("users");

  /** 유저의 성취도 업데이트 */
  const addRequest: IDBRequest = objStore.put(requestData);

  await new Promise<void>((resolve, reject) => {
    addRequest.onsuccess = () => {
      resolve();
    };

    addRequest.onerror = () => {
      reject(new Error("IDB: Error adding update Result"));
    };
  });
};
