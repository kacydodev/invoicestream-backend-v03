// src/types/env.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MY_API_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
      PORT: number; // Or number if you parse it immediately
    }
  }
}

// This empty export ensures the file is treated as a module
// and its declarations are global.
export {};
