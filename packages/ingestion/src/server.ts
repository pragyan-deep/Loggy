import app from "./app";
import { LogReceiverService } from "./services/log-receiver.service";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ingestion Module running on port ${PORT}`);

  const logReceiver = new LogReceiverService();
  logReceiver.start();
});
