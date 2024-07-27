export {}
declare global {
    namespace NodeJS{
        interface ProcessEnd{
            BROWSER: "chromium" | "firefox" | "webkit",
            ENV: "staging" | "prod" | "test",
            BASEURL: string,
            HEAD: "true" | "false" 
        }
    }
}