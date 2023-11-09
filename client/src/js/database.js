import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {
  try {
    // Create connection to the database and the version
    const jateDb = await openDB("jate", 1);

    // Create new trasaction and data privileges
    const tx = jateDb.transaction("jate", "readwrite");

    // Open the object store
    const store = tx.objectStore("jate");

    // Add the stored data
    const request = store.add({ content });

    const result = await request;
    console.log("Data saved to the database", result);
  } catch (error) {
    console.error("Could not save to database:", error);
  }
};

export const getDb = async () => {
  try {
    // Create connection to the database and the version
    const jateDb = await openDB("jate", 1);

    // Create new trasaction and data privileges
    const tx = jateDb.transaction("jate", "readonly");

    // Open the object store
    const store = tx.objectStore("jate");

    // getAll DOES NOT WORK

    const request = store.getAll();

    // get(1) DOES WORK
    // const request = store.get(1);
    const result = await request;
    console.log("Results:", result);
    return result;
  } catch (error) {
    console.error("Could not GET database:", error);
  }
};

initdb();
