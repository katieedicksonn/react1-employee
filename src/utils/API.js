import axios from "axios";
const API = {
    getEmp:function(){
        return axios("https://randomuser.me/api/?results=200&nat=us")
    },
}
export default API;