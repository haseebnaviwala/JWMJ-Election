import gsap from 'gsap/all'
import React, { useState, useEffect, useRef } from 'react'
import logo from '../login/jwmjLogo.png'
import "./Voting.css"
import book from './Candits/book.jpg'
import umbrella from './Candits/umbrella.jpg'
import { db } from '../Firebase'
import { collection, addDoc } from "firebase/firestore"; 

const Vote = (props) => {

    const [select1, setselect1] = useState(false);
    const [select2, setselect2] = useState(false);

    const position = props.position
    const [selected, setselected] = useState("no vote")
    props.setposition(selected)
    const candidate1 = props.candidate1
    const candidate2 = props.candidate2
    const candit1Image = props.candit1Image
    const candit2Image = props.candit2Image
    console.log(position)
    console.log(selected)

    // const [president, setPresident] = useState('');
    // const [vicePresident, setVicePresident] = useState('');
    // const [seniorVicePresident, setSeniorVicePresident] = useState('');
    // const [generalSeceratory, setGeneralSeceratory] = useState('');
    // const [seniorJointSecerotory, setSeniorJointSecerotory] = useState('');
    // const [jointSeceratory, setJointSeceratory] = useState('');
    // const [treasurer, setTreasurer] = useState('');

    // function castVote() {

    //     if (position === 'President') {
    //         setPresident(selected)
    //         console.log(president)
    //     }
    //     if (position === 'Senior Vice President') {
    //         setSeniorVicePresident(selected)
    //         console.log(seniorVicePresident)
    //     }
    //     if (position === 'Vice President') {
    //         setVicePresident(selected)
    //         console.log(vicePresident)
    //     }
    //     if (position === 'General Secretary') {
    //         setGeneralSeceratory(selected)
    //         console.log(generalSeceratory)
    //     }
    //     if (position === 'Senior Joint Secretary') {
    //         setSeniorJointSecerotory(selected)
    //         console.log(seniorJointSecerotory)
    //     }
    //     if (position === 'Joint Secretary') {
    //         setJointSeceratory(selected)
    //         console.log(jointSeceratory)
    //     }
    //     if (position === 'Treasurer') {
    //         setTreasurer(selected)
    //         console.log(treasurer)
    //     }
    // }



    // const [president, setpresident] = useState();
    // const [seniorvicepresident, setseniorvicepresident] = useState();
    // const [vicepresident, setvicepresident] = useState();
    // const [generalsecretary, setgenesecretary] = useState();
    // const [seniorjointSecretary, setseniorjointSecretary] = useState();
    // const [jointSecretary, setjointSecretary] = useState();
    // const [treasurer, settreasurer] = useState();

    // const [mc1, setmc1] = useState();
    // const [mc2, setmc2] = useState();
    // const [mc3, setmc3] = useState();
    // const [mc4, setmc4] = useState();
    // const [mc5, setmc5] = useState();
    // const [mc6, setmc6] = useState();
    // const [mc7, setmc7] = useState();





    return (
        <div>

            <section className="officeBearer">
                <h1>{position}</h1> 
                {/* <p>Selected: {selected}</p> */}

                <div className="position">
                    <div className="candit">
                        <div onClick={() => console.log("select1", select1) || setselect1(true) || setselect1(!select1) || setselect2(false) || select1 !== true ? setselected(candidate1) : setselected("no vote")} className="officebearercandidate" style={{ border: select1 == true ? "2px solid green" : "none", backgroundImage: `url(${book})` }}></div>
                        { }
                        <h3>{candidate1}</h3>

                        {console.log(select1, select2)}
                    </div>
                    <div className="candit">
                        <div onClick={() => console.log("select2", select2) || setselect2(true) || setselect2(!select2) || setselect1(false) || select2 !== true ? setselected(candidate2) : setselected("no vote")} className="officebearercandidate" style={{ border: select2 == true ? "2px solid green" : "none", backgroundImage: `url(${umbrella})` }} ></div>
                        <h3>{candidate2}</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}



const McVote = (props) => {

    const [isActive, setisActive] = useState()
    const index = props.selecteds.indexOf(props.name)
    console.log("index of", props.name, " ", index)

    function counting() {
        // console.log("jello")
        if (isActive !== true) {
            props.passi(props.i + 1)
        } else {
            props.passi(props.i - 1)
        }

        if (props.selecteds.includes(props.name) === false) {
            if (props.selecteds.length < 8) {
                props.selecteds.push(props.name)
            } else {
                alert("Please Select only 8 members")
            }
        } else {
            props.selecteds.splice(index, 1)
        }

        // props.selecteds.includes(props.name) !== true && props.selecteds.length < 8 ? props.selecteds.push(props.name) : alert("Please Select only 8 members") 
        // props.selecteds.includes(props.name) === true ? props.selecteds.splice(index, 1) : console.log("")
        // isActive !== true && props.i < 8 ? props.passi(props.i+1) : 
        // console.log(props.passi)
    }
    console.log(props.i)
    console.log(isActive)
    console.log(props.selecteds.indexOf(props.name))
    return (
        <div className="mc-candit-container">
            <div onClick={() => {
                setisActive(true) || console.log(isActive, "workingggg") || setisActive(!isActive) || counting()
            }} style={{ border: props.selecteds.includes(props.name) ? "2px solid green" : "none", backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20%", cursor: "pointer" }}></div>

            <h3>{props.name}</h3>
            {/* {props.i} */}

        </div>
    )
}


const ThanksForVoting = () => {
    return (
        <div>
            <div className="tfv" style={{ display: "flex", justifyContent: "center", width: "100vw", height: "100vh", flexDirection: "column", alignItems: "center", position: "absolute", top: "0", left: "0" }}>
                {/* <img style={{width:"10rem",height:"10rem",backgroundImage:`url(${jwmjLogo})`, backgroundPosition:"center", backgroundSize:"contain"}} /> */}
                <h1 style={{ color: "green" }}>YOUR VOTE HAS BEEN CASTED </h1>
                <h3>Thankyou for Voting and brining change to society</h3>

            </div>
        </div>
    )
}


export const Voting = (props) => {
    const [i, seti] = useState(0)
    const [oath, setoath] = useState(false)
    // let arr = new Array()
    const [arr, setarr] = useState([])
    // arr.length = 8
    console.log("arr", arr)

    const [president, setpresident] = useState();
    const [seniorvicepresident, setseniorvicepresident] = useState();
    const [vicepresident, setvicepresident] = useState();
    const [generalsecretary, setgeneralsecretary] = useState();
    const [seniorjointSecretary, setseniorjointSecretary] = useState();
    const [jointSecretary, setjointSecretary] = useState();
    const [treasurer, settreasurer] = useState();

    useEffect(() => {
        gsap.to(".thanks", 0, {
            display: "none"
        })
    }, [])

    function castVote() {

        if (oath === true) {
            if (arr.length !== 8) {
                alert('Please select 8 MC Members!')
            }
            else {
                addDoc(collection(db, "mc_members"), {
                    MC_Members: arr
                });
                // db.collection("mc_members")
                //     .add({
                //         MC_Members: arr
                //     })

                gsap.to(".voting-main", 0, {
                    display: "none"
                })
                gsap.to(".thanks", 0, {
                    display: "flex"
                })
            }

            // db.collection('President')
            //     .add({
            //         President: president
            //     })
            addDoc(collection(db, "President"), {
                President: president
            });
            // db.collection('Senior Vice President')
            //     .add({
            //         Senior_Vice_President: seniorvicepresident
            //     })
            addDoc(collection(db, "Senior Vice President"), {
                Senior_Vice_President: seniorvicepresident
            });    
            // db.collection('Vice President')
            //     .add({
            //         Vice_President: vicepresident
            //     })
            addDoc(collection(db, "Vice President"), {
                Vice_President: vicepresident
            });
            // db.collection('General Secretary')
            //     .add({
            //         General_Secretary: generalsecretary
            //     })
            addDoc(collection(db, "General Secretary"), {
                General_Secretary: generalsecretary
            });
            // db.collection('Senior Joint Secretary')
            //     .add({
            //         Senior_Joint_Secretary: seniorjointSecretary
            //     })
            addDoc(collection(db, "Senior Joint Secretary"), {
                Senior_Joint_Secretary: seniorjointSecretary
            });
            // db.collection('Joint Secretary')
            //     .add({
            //         Joint_Secretary: jointSecretary
            //     })
            addDoc(collection(db, "Joint Secretary"), {
                Joint_Secretary: jointSecretary
            });
            // db.collection('Treasurer')
            //     .add({
            //         Treasurer: treasurer
            //     })
            addDoc(collection(db, "Treasurer"), {
                Treasurer: treasurer
            });
        } else {
            alert('Please tick the check box below!')

        }
        return false;
    }


    return (
        <div>
            <div className="voting-main">
                <nav className="votingPageId">
                    <img src={logo} width="50px" height="50px" />
                    <div>
                        Voter ID:<p> {props.number} </p>
                    </div>
                </nav>

                <div className="heading">
                    <h2>JAMNAGAR WEHVARIA MEMON JAMAT ELECTIONS 2021</h2>
                    <h1 style={{ marginTop: "5rem" }}>OFFICE BEARERS</h1>
                    <div className="officeBearer-voting-instruction"> <p className="i-icon">i</p>Vote for any one candidate for each position. </div>

                </div>

                <Vote setposition={setpresident} position={"President"} candidate1={"Hafiz Muhammad Ilyas"} candidate2={"Muhammad Yousuf Rangoonwala"} />
                <Vote setposition={setseniorvicepresident} position={"Senior Vice President"} candidate1={"Muhammad Ali Nakhuda"} candidate2={"Muhammad Saeed Mulla"} />
                <Vote setposition={setvicepresident} position={"Vice President"} candidate1={"Muhammad Imran Suleman"} candidate2={"Jawad Ahmed Farooq"} />
                <Vote setposition={setgeneralsecretary} position={"General Secretary"} candidate1={"Muhammad Asif Muhammad Ali"} candidate2={"Muhammad Imran Wehvaria"} />
                <Vote setposition={setseniorjointSecretary} position={"Senior Joint Secretary"} candidate1={"Adnan Yaqoob"} candidate2={"Muhammad Imran Patel"} />
                <Vote setposition={setjointSecretary} position={"Joint Secretary"} candidate1={"Shabbir Abdul Wahid"} candidate2={"Danish Ashraf Nakhuda"} />
                <Vote setposition={settreasurer} position={"Treasurer"} candidate1={"Shahzad Kamdar"} candidate2={"Abdul Rauf Rangoonwala"} />

                <div className="heading">
                    <h1>MANAGING COMMITTEE</h1>
                    <h2>Selected: {arr.length} out of 8 </h2>
                    <div className="officeBearer-voting-instruction"> <p className="i-icon">i</p>Vote for exactly 8 members for managing committee.
                    </div>
                </div>



                <div style={{ width: "100vw", display: "flex" }}>
                    <div className="managingCommittee" >

                        {/* {i} */}
                        <McVote name={"Muhammad Yousuf Peermohamed"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Salman Muhammad Saleem"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Abdul Majeed Rangoonwala"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Abdul Hannan Golden"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Abdul Ghani Jamal Haji"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Furqan Shafi"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Abdul Sami Surmawala"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Abdul Qadir Bharambia"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Obaidullah Durvesh"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Muhammad Shahid Wehvaria"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Afreen Patel"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Muhammad Munawar Ibrahim Jamal"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Muhammad Obaid Rehmani"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Fahim Abdul Aziz Memon"} passi={seti} i={i} selecteds={arr} image={umbrella} />
                        <McVote name={"Zulqarnain Ghulam Muhammad"} passi={seti} i={i} selecteds={arr} image={book} />
                        <McVote name={"Khurram Abdus Samad Dochki"} passi={seti} i={i} selecteds={arr} image={umbrella} />

                    </div>
                    {/* <div style={{ width: "30vw" }}> */}
                    {/* <div style={{ width: "100vw", display: "flex", fontSize: "1rem", flexDirection: "column" }}>

                        {arr.map((val, ind) => (
                            <div style={{ marginLeft: "0.3rem" }}>{val}</div>
                        ))}

                    </div> */}
                    {/* </div> */}
                </div>


                <div style={{ width: "100vw", alignItems: "center", display: "flex", flexDirection: "column" }}>

                    <div onClick={castVote} className="castvotebtn">CAST VOTE <i class="uit uit-arrow-circle-right"></i></div>

                    <div className="oath">
                        <input style={{cursor:"pointer"}} onClick={() => setoath(!oath)} type="checkbox" />
                        <label>I, voter, hereby swear to Allah (SWT), that I have not rigged this election in any manner and voted for candidates according to my own free will.</label>
                    </div>

                </div>

            </div>

            <div className="thanks">
                <ThanksForVoting />
            </div>



        </div >
    )
}

{/* <ul>
                    <li>Muhammad Yousuf Peermohamed</li>
                    <li>Salman Muhammad Saleem</li>
                    <li>Abdul Majeed Rangoonwala</li>
                    <li>Abdul Hannan Golden</li>
                    <li>Abdul Ghani Jamal Haji</li>
                    <li>Furqan Shafi</li>
                    <li>Abdul Sami Surmawala</li>
                    <li>Abdul Qadir Bharambia</li>
                    <li>Obaidullah Durvesh</li>
                    <li>Muhammad Shahid Wehvaria</li>
                    <li>Afreen Patel</li>
                    <li>Muhammad Munawar Ibrahim Jamal</li>
                    <li>Muhammad Obaid Rehmani</li>
                    <li>Fahim Abdul Aziz Memon</li>
                    <li>Zulqarnain Ghulam Muhammad</li>
                    <li>Khurram Abdus Samad Dochki</li>
</ul> */}