import React, { useEffect, useState } from 'react'
import "./Login.css"
import bgImg from "./background.jpeg"
import { gsap, TweenMax, TimelineLite, Power3, Circ } from 'gsap';
import LockIcon from '@mui/icons-material/Lock';
import CardIcon from '@mui/icons-material/CreditCard';
import logo from './jwmjLogo.png'
import { db } from '../Firebase'
import axios from 'axios'
import { send } from 'emailjs-com'
import { Voting } from '../voting/Voting'
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

export const Login = () => {

    const [number, setNumber] = useState("");
    const [otpNumber, setOtpNumber] = useState("");
    const [toSend, setToSend] = useState({
        message: '',
        to_email: '',
    });
    const [ip, setIp] = useState('');
    const [loader, setLoader] = useState(false);

    // Random Number Generator

    const min = 1000;
    const max = 10000;
    const rand = Math.round(min + Math.random() * (max - min));
    toSend.message = rand.toString();

    // Random Number Generator


    // Time

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    // Time




    // IP Address

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        // console.log(res.data)
        setIp(res.data.IPv4)
    }

    useEffect(() => {
        getData()
    }, [])

    // IP Address


    function login() {




        
        // doc(db, "user_data", number)
        getDoc(doc(db, "user_data", number)).then((docu) => {
                if (docu.exists()) {
                    if (docu.data().IP_Address === ip) {
                        getDoc(doc(db, "user_otp_generator", number)).then((docu) => {
                                if (docu.exists()) {
                                    // console.log(doc.data().Otp);
                                    if (docu.data().Otp === otpNumber) {
                                        setDoc(doc(db, "Sign_in_users", number), {
                                                Time: formatAMPM(new Date())
                                            })
                                        console.log('User Signed In');
                                        // animation for page change

                                        const t3 = gsap.timeline()

                                        t3.to(".homepage-main-container", 0, {
                                            display: "none"
                                        }).to(".voting", 0, {
                                            display: "flex"
                                        })

                                        // animation for page change
                                        deleteDoc(doc(db, "user_otp_generator", number)).then(() => {
                                            console.log("Document successfully deleted!");
                                        }).catch((error) => {
                                            console.error("Error removing document: ", error);
                                        });
                                    }
                                    else {
                                        alert('Wrong Otp');
                                    }
                                }
                                else {
                                    alert('Otp not generated yet');
                                }
                            })
                            .catch((error) => {
                                alert(error.message);
                            })
                    }
                    else {
                        alert('IP Not Matched');
                    }
                } else {
                    alert("You are not registered");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        setOtpNumber("");
    }
















    // PUT YOUR FIREBASE OTP GENERATE METHOD INSIDE THIS FUNCTION
    function generateOTP() {

        // e.preventDefault();

        // getDoc(doc(db, "cities", "SF")).then(docSnap => {
        //     if (docSnap.exists()) {
        //       console.log("Document data:", docSnap.data());
        //     } else {
        //       console.log("No such document!");
        //     }
        //   })

        getDoc(doc(db, "user_data", number)).then((docu) => {
                if (docu.exists()) {
                    console.log(docu.data())
                    toSend.to_email = docu.data().Email
                    if (docu.data().IP_Address === ip) {
                        getDoc(doc(db, "user_otp", number)).then((docu) => {
                                if (docu.exists()){
                                    alert("Your OTP has generated before!!");
                                    console.log(docu)
                                }
                                else {
                                    setDoc(doc(db, "user_otp", number), {
                                        Number: number,
                                        Otp: toSend.message,
                                        Time: formatAMPM(new Date())
                                    });
                                    // db.collection("user_otp").doc(number)
                                    //     .set({
                                    //         Number: number,
                                    //         Otp: toSend.message,
                                    //         Time: formatAMPM(new Date())
                                    //     })
                                    setDoc(doc(db, "user_otp_generator", number), {
                                        Number: number,
                                        Otp: toSend.message,
                                        Time: formatAMPM(new Date())
                                    });
                                    // db.collection("user_otp_generator").doc(number)
                                    //     .set({
                                    //         Number: number,
                                    //         Otp: toSend.message,
                                    //         Time: formatAMPM(new Date())
                                    //     })

                                    // console.log(toSend.message);
                                    send(
                                        'service_s76hede',
                                        'template_8sjimtk',
                                        toSend,
                                        'mn00pvI2Rt9CAZIn2'
                                    )
                                        .then((response) => {
                                            console.log('SUCCESS!', response.status, response.text);
                                        })
                                        .catch((err) => {
                                            console.log('FAILED...', err);
                                        });
                                    alert("Your OTP has been generated to your email!!");
                                    const t1 = gsap.timeline();
                                    t1.to(".backgroundImage", 1.25, {
                                        css: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", transition: "all ease 0s" },
                                        ease: Power3.easeInOut
                                    }).to(".backgroundImage", 1.25, {
                                        css: { clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" },
                                        ease: Power3.easeInOut,
                                        delay: -0.25
                                    })


                                    if (window.innerWidth <= 600) {

                                        gsap.to(".loginMain", 0, {
                                            display: "none"
                                        })
                                        gsap.to([".otpMain", ".content"], {
                                            display: "flex",
                                        })

                                    }
                                }
                            }).catch((error) => {
                                console.log("Error getting document:", error);
                            });
                            }
                    else {
                        alert('IP Not Matched');
                    }
                } else {
                    alert("You are not registered");
                }
              }).catch((error) => {
                    console.log("Error getting document:", error);
                });

        // ignore //

        // const t1 = gsap.timeline();
        // t1.to(".backgroundImage", 1.25, {
        //     css: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", transition: "all ease 0s" },
        //     ease: Power3.easeInOut
        // }).to(".backgroundImage", 1.25, {
        //     css: { clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" },
        //     ease: Power3.easeInOut,
        //     delay: -0.25
        // })


        // if (window.innerWidth <= 600) {

        //     gsap.to(".loginMain", 0, {
        //         display: "none"
        //     })
        //     gsap.to([".otpMain", ".content"], {
        //         display: "flex",
        //     })

        // }


        // ignore //




        // PUT YOUR FIREBASE OTP GENERATE METHOD HERE





    }

    return (

        <div>

            <div className="pageChange"></div>

            <div className="voting" style={{ display: "none" }}>
                <Voting number={number}/>
            </div>

            <div className="homepage-main-container">


                <div className="backgroundImage">
                    <h1 style={{ width: "50vw", fontSize: "3rem", color: "white" }}>
                        Welcome to <br />
                        the first ever <br />
                        online elections <br />
                        of <br />
                        JAMNAGAR WEHVARIA <br />
                        MEMON JAMAT <br />
                    </h1>

                    <h1 style={{ fontSize: "3rem", color: "white" }}>
                        We tend to bring <br />
                        FREE, FAIR and UNBIASED <br />
                        elections with the <br />
                        help of technology. <br />
                    </h1>

                    <div style={{ position: "absolute", zIndex: "-10", width: "100vw", height: "100vh", backgroundColor: "black", opacity: "0.3" }}></div>
                </div>


                <section className="otpMain">

                    <nav className="otpNav">
                        <div >
                            {/* <i class="uit uit-arrow-circle-left"></i> */}
                        </div>
                        <div>
                            Voter ID:<p> {number}</p>
                        </div>
                    </nav>

                    <section className="content">
                        <h1>Check Your Registered Email!</h1>
                        <div>
                            <h2 style={{ borderBottom: "1.5px solid #282828", fontWeight: "300", marginBottom: "3rem" }}>OTP</h2>

                            <section >
                                <p style={{ margin: "0", fontSize: "0.8rem" }}>Enter OTP :</p>
                                <div className="inputField">

                                    <LockIcon />
                                    <input onChange={(e) => setOtpNumber(e.target.value)} value={otpNumber} type="number" required placeholder="0000" />
                                </div>
                            </section>
                            <div className="loginButton" onClick={login}>Login</div>

                            <div className="otp-instruction"> <p className="i-icon">i</p> An OTP will be recieved on your registered email. Please enter that OTP code here to login to your account. </div>

                        </div>
                    </section>

                    <div className="footer">
                        <h4>FREE AND FAIR ELECTIONS</h4>
                    </div>
                </section>




                <section className="loginMain">

                    <section className="loginContent">
                        <img src={logo} className="logo" />
                        <div>
                            <h2 style={{ borderBottom: "1.5px solid #282828", fontWeight: "300", marginBottom: "3rem" }}>Login</h2>

                            <section >
                                <p style={{ margin: "0", fontSize: "0.8rem" }}>Member Id :</p>
                                <div className="inputField">

                                    <CardIcon />
                                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" required placeholder="0000" />
                                </div>
                            </section>
                            <div onClick={generateOTP} className="generateOtp" >GENERATE OTP</div>

                            <div className="id-instruction"> <p className="i-icon">i</p> Enter your member id & click on GENERATE OTP. An OTP will be sent to your registered email.  </div>

                        </div>
                    </section>

                    <div style={{ left: "75%", transform: "translate(-50%,0)" }} className="footer">
                        <h4>FREE AND FAIR ELECTIONS</h4>
                    </div>
                </section>
            </div>
        </div>
    )
}
