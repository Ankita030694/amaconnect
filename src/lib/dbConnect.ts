import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // Verify existing connection is actually open (readyState === 1)
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // If connection dropped or is disconnecting, reset cache
  if (mongoose.connection.readyState !== 1 && mongoose.connection.readyState !== 2) {
    cached.conn = null;
    cached.promise = null;
  }

  const opts: mongoose.ConnectOptions = {
    bufferCommands: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 8000,
    socketTimeoutMS: 45000,
    retryWrites: true,
    retryReads: true,
  };

  let lastError: unknown;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, opts);
      }
      cached.conn = await cached.promise;
      return cached.conn;
    } catch (e) {
      lastError = e;
      cached.conn = null;
      cached.promise = null;
      if (attempt < 2) {
        await new Promise((r) => setTimeout(r, 250));
      }
    }
  }

  throw lastError;
}

export default dbConnect;
