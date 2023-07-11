import mongoose from "mongoose";
import { PORT } from "./constants";

import * as serverService from "./services/server.service";

(async () => {
  try {
    await mongoose.connect(
      "mongodb://mongo:vN9unVwuTF6wkhT25KPj@containers-us-west-136.railway.app:6130"
    );
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log("Сервер ожидает подключения...");
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  process.exit();
});
