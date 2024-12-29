import { EnvironmentVariable } from "@/types/envVaribaleTypes";
import dotenv from "dotenv";

dotenv.config();

const { env } = process as EnvironmentVariable;

// export all required environment variable here
export const PORT = env.PORT;
export const MONGO_DB_URI = env.MONGO_DB_URI;