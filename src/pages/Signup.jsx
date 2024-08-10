import FormSignup from "../components/FormSignup/FormSignup"
import './Pages.css'
import ImgSignup from "../components/ImgSignup/ImgSignup"

function SignupPage() {

    return (
        <div className= 'grid-signup'>


        <FormSignup></FormSignup>
        <ImgSignup> </ImgSignup>
          {/* <img className="logotripflowformsignup" src="/public/logotripflow.png" alt="Logo" /> */}


    
        </div>
    )
}

export default SignupPage