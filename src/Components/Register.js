import Logo from "../Assets/headerImg.svg"
import currency from "../Assets/curreny.svg"
import visible from "../Assets/visible.svg"
import invisible from "../Assets/invisible.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Register = () => {

    const [form, setForm] = useState({
        firstname: '',
        email: '',
        phonenumber: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value})
    }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        postForm();
    }

    const nav = useNavigate();

    const postForm = () => {
        fetch('https://falconlite.com/v1/api/send-email',{
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }).then(()=>{
            console.log("verification email sent")
            nav('/verification');
        })
    }

    const [icon, setIcon] = useState(visible);
    const[type, setType] = useState('password');
    const toggleIcon = () => {
        if (type === 'password') {
            setIcon(invisible);
            setType('text');
        } else {
            setIcon(visible);
            setType('password');
        }
    }

    return ( 
        <div className="register">
           <div className="ct_1">
                <div className="header">
                    <img src={Logo} alt="showing Logo" />
                </div>
                <div className="text">
                    <h1>Create an account</h1>
                    <p>Register on our website with your correct email address and information</p>
                </div>
                <div className="form">
                    <form action="" onSubmit={formSubmit}>
                        <div>
                            <label htmlFor="firstName">First name</label><br/>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstname" 
                                value={form.firstname} 
                                onChange={handleChange} 
                                placeholder="Jeremiah"
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label><br/>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={form.email} 
                                onChange={handleChange} 
                                placeholder="Fame@gmail.com"
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label><br/>
                            <input 
                                type="number" 
                                id="PhoneNumber" 
                                name="phonenumber" 
                                value={form.phonenumber} 
                                onChange={handleChange} 
                                placeholder="+2348103769079"
                                required 
                            />
                        </div>
                        <div className="ct_p">
                            <label htmlFor="password">Password</label><br/>
                            <input 
                                type={type} 
                                id="password" 
                                name="password" 
                                value={form.password} 
                                onChange={handleChange} 
                                placeholder="**********"
                                required 
                            />
                            <img className="pass_word" src={icon} onClick={toggleIcon} alt="visible" />
                        </div>
                        <div className="checked">
                            <input type="checkbox" id="Check" />
                            <label htmlFor="check">Remember me</label>
                            <span className="custom_check"></span>
                        </div>
                        <div className="submit_btn">
                            <button type="submit">Sign up</button>
                            <span className="spant">Already have an account? <a href="www.i.com">Sign in</a></span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="ct_2">
                <img src={currency} alt="Showing currency operation" />
            </div>
        </div>
    );
}
 
export default Register;