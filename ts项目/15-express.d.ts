declare module 'express'{

    interface Router {
        get(path:string,cb:(res:any,req:any)=>void)
    }
    interface App {
        use(path:string,router:any):void
        listen(port:number,cb?:()=>void)
    }
    
    interface Express {
        ():App
        Router():Router
    }
    const express:Express
    export default express
}