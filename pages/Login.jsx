import { use } from "react";
import { AuthContext } from "../context/AuthProvider";


function Login() {
    const { user, login } = use(AuthContext);
    const [formData ,setFormData]= useState({
        email:"",
        password:"",
    });
}

