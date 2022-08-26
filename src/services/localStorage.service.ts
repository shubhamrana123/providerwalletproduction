

const getAccessToken = ()=>
{
   return localStorage.getItem("accessToken");
}

const localStorageService = {
    getAccessToken
}

export default localStorageService;