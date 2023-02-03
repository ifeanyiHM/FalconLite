import Logo from "../Assets/headerImg.svg"
import currency from "../Assets/curreny.svg"
import resend from "../Assets/resend.svg"

const Verification = () => {

    const handleKey = (e) => {
        e.target.value.length === 1? 
        e.target.nextElementSibling.focus() : 
        e.target.previousElementSibling.focus()
    }
    
    return ( 
        <div className="verification">
            <div className="ct_1">
                <div className="header">
                    <img src={Logo} alt="showing Logo" />
                </div>
                <div className="text">
                    <h1>Kindly enter Email verification code</h1>
                    <p>To Sign up, kindly enter the verification code sent to your email address</p>
                    <p>Jerryomonefe@gmail.com <a href="ll.vom">change Email</a></p>
                </div>
                <div className="verification_form">
                    <form action="">
                       <div>
                            <input 
                                type="text" 
                                maxLength={1}
                                onKeyUp={handleKey}
                                required 
                            />

                            <input 
                                type="text" 
                                maxLength={1}
                                onKeyUp={handleKey}
                                required
                            />

                            <input 
                                type="text" 
                                maxLength={1}
                                onKeyUp={handleKey}
                                required
                            />

                            <input 
                                type="text" 
                                maxLength={1}
                                onKeyUp={handleKey}
                                required
                            />
                            <input 
                                type="text" 
                                maxLength={1}
                                onKeyUp={handleKey}
                                required
                            />
                       </div>
                       <div className="ctr-1">
                            <p>Resend Verification Code</p>
                            <img src={resend} alt="resend code" />
                       </div>
                       
                        <div className="submit_btn">
                            <button type="submit">Proceed</button>
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
 
export default Verification;