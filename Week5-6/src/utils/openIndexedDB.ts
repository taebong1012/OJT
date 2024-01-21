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

      // "results" 객체 스토어 생성
      if (!db.objectStoreNames.contains("results")) {
        db.createObjectStore("results", { keyPath: "id" });
      }

      // "users" 객체 스토어 생성
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id" });
      }
    };

    request.onerror = () => reject(new Error("DB err"));

    request.onsuccess = () => resolve(request.result as IDBDatabase);
  });
};

export default openDB;
