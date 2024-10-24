export {}
declare global {
    namespace NodeJS{
        interface ProcessEnv{
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "staging" | "prod" | "test",
            BASEURL: string,
            HEAD: "true" | "false",
            TAGS: "@smoke" | "@regression",
            APIURL: string,
            LOGINPAYLOAD: string
        }
    }
}