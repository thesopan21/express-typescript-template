import app from "./app";
import connectToMongodb from "./database/connectToDatabase";



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectToMongodb()
  console.log(`Server is running on port http://localhost:${PORT}`);
});