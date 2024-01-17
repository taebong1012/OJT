import { userType } from "@/types/userType";

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

export const addUserToDB = async (userData: userType) => {
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
  } catch (error) {
    throw error;
  }
};
