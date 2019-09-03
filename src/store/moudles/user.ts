import {observable,action} from 'mobx'
interface LoginForm{
    user_name:String,
    user_pwd:String
}
class User {
    @observable isLogin:boolean=false

    @action async login (form:LoginForm):Promise<Object>{
        if(form.user_name==='chenmanjie'&&form.user_pwd==='Chenmanjie123!'){
            return {code:1}
        }else{
            return {code:0}
        }
    }
}
export default User