import React,{ useState} from "react";
import './Regform.css';

function Regform(){
const [firstname, setFirstname]= useState("")

const [ lastname,setLastname]= useState("")

const [mobilenumber,setMobilenumber]= useState("")
const [email,setEmail]= useState("")
const [password,setPassword]= useState("")
const [confpassword,setConfpassword]= useState("")
const [passworderror,setPassworderror]= useState("")
const [dob,setDob]= useState("")
const [gender,setSelectedoption]= useState('')
const [selectstate,setSelectstate]= useState("")
const [selectcourse,setSelectcourse]= useState("")

const [deliverymode,setSelecteddelivery]= useState("")
const [comments,setComments]= useState("")

const handleoptionchange=(event)=>{setSelectedoption(event.target.value);};

const handleoption=(event)=>{
    setSelecteddelivery(event.target.value);
};

const handlesubmit=(e)=>{e.preventDefault();
    if(password!==confpassword){
        setPassworderror(true);
    }else{
        setPassworderror(false);

        console.log("FirstName:",firstname);
        console.log("LastName:",lastname );
        console.log("MobileNumber:",mobilenumber );
        console.log("Email:",email);
        console.log("Password:",password);
        console.log("ConfirmPassword:",confpassword);
        console.log("Date Of Birth:",dob);
        console.log("Gender:",gender);
        console.log("Selected State:",selectstate);
        console.log("Selected Course:",selectcourse);
        console.log("Delivery Mode:",deliverymode);
        console.log("Comments:",comments);
       
        alert('Your Response Updated Successfuly : '+firstname);

    }
    // window.location.reload();

    //Add logic here to submit form data to backend
};

return(
    <>
       <form className="registration-form" onSubmit={handlesubmit}>
        <fieldset>
            <legend> Personal Information </legend>
            <div className="form-group">
                <label htmlFor="firstname">FirstName:</label>
                <input placeholder="Enter Your FirstName" type="text" 
                id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="lastname">LastName:</label>
                <input placeholder="Enter Your LastName" type="text" 
                id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="mobilenumber">MobileNumber:</label>
                <input placeholder="Enter Your MobileNumber" type="text" 
                id="mobilenumber" value={mobilenumber} onChange={(e)=>setMobilenumber(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input placeholder="Enter Your Email Id" type="text" 
                id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input placeholder="Enter Password" type="password" 
                id="password" name="password"value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="confpassword">Confirm Password:</label>
                <input placeholder="Confirm Password" type="password" 
                id="confpassword" name="confpassword" value={confpassword}
                 onChange={(e)=>setConfpassword(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="dob">Date Of Birth:</label>
                <input  type="date"  
                id="dob" value={dob} onChange={(e)=>setDob(e.target.value)} required />
            </div>

            <div className="form-group1">
                <label htmlFor="gender">Gender:</label>
                <input className="gender" type="radio" 
                value="Male" checked ={gender==="Male"} onChange={handleoptionchange}  />
                <label>Male</label>

                <input className="gender" type="radio" 
                value="Female" checked ={gender==="Female"} onChange={handleoptionchange}  />
                <label>Female</label>

                <input className="gender" type="radio" 
                value="Others" checked ={gender==="Others"} onChange={handleoptionchange}  />
                <label>Others</label>

            </div>


            <div className="form-group">
                <label htmlFor="selectstate">Select State:</label>
                <select id ="selectstate"
                value={selectstate}  onChange={(e)=>setSelectstate(e.target.value)} required >

                <option></option>
                <option>Maharashtra</option>
                <option>Gujarat</option>
                <option>Rajasthan</option>
                <option>Karnataka</option>  
                
                </select> 
                
                </div>

        </fieldset>       

        <fieldset> <legend>Course Information</legend>

        <div className="form-group">
                <label htmlFor="selectcourse">Select Course:</label>
                <select id ="selectcourse"
                value={selectcourse}  onChange={(e)=>setSelectcourse(e.target.value)} required >

                <option></option>
                <option>Java Full Stack</option>
                <option>Python Full Stack</option>
                <option>Software Testing</option>
                <option>Data Science</option>  
               
                </select>
                
                </div>
            
                <div className="form-group1">
                <label htmlFor="deliverymode">Delivery Mode:</label>
                <input className="delivery" type="radio" 
                value="online" checked ={deliverymode==="online"} onChange={handleoption}  />
                <label>Online</label>

                <input className="delivery" type="radio" 
                value="Offline" checked ={deliverymode==="Offline"} onChange={handleoption}  />
                <label>Offline</label>
               </div>
            
            <div className="form-group">
                 <label htmlFor="comments">Comments:</label>
                 <textarea id="comments" value={comments} onChange={(e)=>setComments(e.target.value)} required ></textarea>
            </div>


            </fieldset>        <br></br>

            {passworderror && <p className="warning">*Password do not Match*</p>}
            <button type="submit">Register</button>
         

       </form>

    </>
);



}export default Regform;
       