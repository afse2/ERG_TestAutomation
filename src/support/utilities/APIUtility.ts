
export class APIUtility{

    
    static async getToken(apiContext:any,loginPayLoad:object)
     {
        const loginResponse =  await  apiContext.post(process.env.APIURL,
        {
            data:loginPayLoad
         } )//200,201,
        const loginResponseJson = await loginResponse.json();
        const token =loginResponseJson.token;
        return token;

    }
}

