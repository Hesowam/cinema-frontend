

class LocalStorageService {
    isActive(){
        return localStorage.getItem("user") ? true : false;
    }
}

export default LocalStorageService.prototype