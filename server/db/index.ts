import { connect } from "mongoose";
import env from "../utils/env";

(async () => {
  try {
    const db = (await connect(`${env.dbHost}/${env.bbdd}`)).set(
      "strictQuery",
      false
    );
    console.log("DB connected", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
