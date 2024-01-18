import { userInfoType } from "@/types/userType";

/** indexedDB를 열고 users 테이블을 반환 */
const openDB = async (): Promise<IDBDatabase> => {
  const idxedDB = window.indexedDB;

  if (!idxedDB) {
    throw new Error("indexedDB를 지원하지 않는 브라우저입니다.");
  }

  return new Promise((resolve, reject) => {
    const request: IDBOpenDBRequest = window.indexedDB.open("jindan");

    request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      const db: IDBDatabase = (e.target as IDBOpenDBRequest)
        .result as IDBDatabase;
      db.createObjectStore("users", { keyPath: "id" });
    };

    request.onerror = () => reject(new Error("DB err"));

    request.onsuccess = () => resolve(request.result as IDBDatabase);
  });
};

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

    console.log("Transaction completed successfully");
  } catch (error: any) {
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
