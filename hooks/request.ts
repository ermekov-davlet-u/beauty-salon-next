
interface IBodyType{
    [ key: string ]: any
} 
type BodyType = IBodyType | null

export function fetchRequest() {

    const requestApi = async(url: string, method: string = "GET", body: any = null) => {
        try {
            if(body){
                body = JSON.stringify(body)
            }
            
            console.log("test");
            // const authToken = localStorage.getItem("authToken")
            const res = await fetch("http://localhost:5000/" + url, {   
            method: method,
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": "Bearer " + authToken
            },
            mode: "cors",
            body
            }).then(res => res.json())
            if(res.status >= 400){
                throw new Error("Вы не авторизованы!");
            }
            return res

        } catch (error: any) {
            
            return error.message

        }
        
    }

    return {
        requestApi
    }
}