import waves from '../assets/waves.jpg'
import {useForm} from 'react-hook-form'

const Form = () => {

    const {register, handleSubmit, watch , formState:{errors}} = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Sign in</h2>
                    <span>Register and Enjoy</span>
                    <form id='form' className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("username")} placeholder="Username"></input>
                        <input type="password" {...register("password")} placeholder="password"></input>
                        <input type="password" {...register("confirmPassword")} placeholder="confirm password"></input>
                        <input type="text" {...register("mobile", {required:true, maxLength:11, minLength:11})}placeholder="mobile"></input>
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "maxLength" && "Mobile Number has exceeded 11 digits"}
                        {errors.mobile?.type === "minLength" && "Mobile Number must be 11 digits"}
                        <button className="btn">Sign in</button>
                    </form>
                </div>
                <div className="col-2">
                    <img src={waves} alt=""></img>
                </div>
            </div>
        </section>
    )
}
export default Form 