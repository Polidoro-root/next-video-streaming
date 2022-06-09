declare global {
  namespace NodeJS {
    interface ProcessEnv {
      IMDB_API_KEY: string
    }
  }
}

export {}
