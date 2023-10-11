import gsap from 'gsap/all'
import React, { useState, useEffect, useRef } from 'react'
import logo from '../login/jwmjLogo.png'
import "./admin.css"
import book from './Candits/book.jpg';
import umbrella from './Candits/umbrella.jpg';
import { db } from '../Firebase'
import { query, where, collection, getDocs } from "firebase/firestore";

const Vote = (props) => {

    const position = props.position
    const candidate1 = props.candidate1
    const candidate2 = props.candidate2
    const candit1Image = props.candit1Image
    const candit2Image = props.candit2Image




    return (
        <div>

            <section className="officeBearer">
                <h1>{position}</h1>

                <div className="position">
                    <div className="candit">
                        <div className="officebearercandidate" style={{ backgroundImage: `url(${book})` }}></div>
                        <h3>{candidate1}</h3>
                        <p style={{fontSize: "30px", fontWeight: "bold", marginLeft: "15px", marginTop: "40px"}}>{props.number1}</p>
                    </div>
                    <div className="candit">
                        <div className="officebearercandidate" style={{ backgroundImage: `url(${umbrella})` }} ></div>
                        <h3>{candidate2}</h3>
                        <p style={{fontSize: "30px", fontWeight: "bold", marginLeft: "15px", marginTop: "40px"}}>{props.number2}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}



const McVote = (props) => {

    
    return (
        <div className="mc-candit-container">
            <div style={{ backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20%", cursor: "pointer" }}></div>

            <h3>{props.name}</h3>
            <p style={{fontSize: '30px', marginTop: '0px', fontWeight: 'bold'}}>{props.number}</p>

        </div>
    )
}



export const Admin = (props) => {

    const [president, setpresident] = useState();
    const [seniorvicepresident, setseniorvicepresident] = useState();
    const [vicepresident, setvicepresident] = useState();
    const [generalsecretary, setgeneralsecretary] = useState();
    const [seniorjointSecretary, setseniorjointSecretary] = useState();
    const [jointSecretary, setjointSecretary] = useState();
    const [treasurer, settreasurer] = useState();


    // MC_Members


    const [MuhammadYousufPeermohamed, setMuhammadYousufPeermohamed] = useState("");
    const [SalmanMuhammadSaleem, setSalmanMuhammadSaleem] = useState("");
    const [AbdulMajeedRangoonwala, setAbdulMajeedRangoonwala] = useState("");
    const [AbdulHannanGolden, setAbdulHannanGolden] = useState("");
    const [AbdulGhaniJamalHaji, setAbdulGhaniJamalHaji] = useState("");
    const [FurqanShafi, setFurqanShafi] = useState("");
    const [AbdulSamiSurmawala, setAbdulSamiSurmawala] = useState("");
    const [AbdulQadirBharambia, setAbdulQadirBharambia] = useState("");
    const [ObaidullahDurvesh, setObaidullahDurvesh] = useState("");
    const [MuhammadShahidWehvaria, setMuhammadShahidWehvaria] = useState("");
    const [AfreenPatel, setAfreenPatel] = useState("");
    const [MuhammadMunawarIbrahimJamal, setMuhammadMunawarIbrahimJamal] = useState("");
    const [MuhammadObaidRehmani, setMuhammadObaidRehmani] = useState("");
    const [FahimAbdulAzizMemon, setFahimAbdulAzizMemon] = useState("");
    const [ZulqarnainGhulamMuhammad, setZulqarnainGhulamMuhammad] = useState("");
    const [KhurramAbdusSamadDochki, setKhurramAbdusSamadDochki] = useState("");


    // MC_Members


    // President

    const [HafizMuhammadIlyas, setHafizMuhammadIlyas] = useState("");
    const [MuhammadYousufRangoonwala, setMuhammadYousufRangoonwala] = useState("");

    // President

    // Senior Vice President

    const[MuhammadAliNakhuda, setMuhammadAliNakhuda] = useState("");
    const[MuhammadSaeedMulla, setMuhammadSaeedMulla] = useState("");

    // Senior Vice President

    // Vice President

    const[MuhammadImranSuleman, setMuhammadImranSuleman] = useState("");
    const[JawadAhmedFarooq, setJawadAhmedFarooq] = useState("");

    // Vice President

    // General Secretary

    const[MuhammadAsifMuhammadAli, setMuhammadAsifMuhammadAli] = useState("");
    const[MuhammadImranWehvaria, setMuhammadImranWehvaria] = useState("");

    // General Secretary

    // Senior Joint Secretary

    const[AdnanYaqoob, setAdnanYaqoob] = useState("");
    const[MuhammadImranPatel, setMuhammadImranPatel] = useState("");

    // Senior Joint Secretary

    // Joint Secretary

    const[ShabbirAbdulWahid, setShabbirAbdulWahid] = useState("");
    const[DanishAshrafNakhuda, setDanishAshrafNakhuda] = useState("");

    // Joint Secretary

    // Treasurer

    const[ShahzadKamdar, setShahzadKamdar] = useState("");
    const[AbdulRaufRangoonwala, setAbdulRaufRangoonwala] = useState("")


    // Treasurer


    var j = 0;


    function getVote(){

        // President

        getDocs(query(collection(db, "President"), where("President", "==", "Hafiz Muhammad Ilyas"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setHafizMuhammadIlyas(j);
            console.log(HafizMuhammadIlyas);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "President"), where("President", "==", "Muhammad Yousuf Rangoonwala"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadYousufRangoonwala(j);
            console.log(MuhammadYousufRangoonwala);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // President

        // Senior Vice President

        getDocs(query(collection(db, "Senior Vice President"), where("Senior_Vice_President", "==", "Muhammad Ali Nakhuda"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadAliNakhuda(j);
            console.log(MuhammadAliNakhuda);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "Senior Vice President"), where("Senior_Vice_President", "==", "Muhammad Saeed Mulla"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadSaeedMulla(j);
            console.log(MuhammadSaeedMulla);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // Senior Vice President

        // Vice President

        getDocs(query(collection(db, "Vice President"), where("Vice_President", "==", "Muhammad Imran Suleman"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadImranSuleman(j);
            console.log(MuhammadImranSuleman);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "Vice President"), where("Vice_President", "==", "Jawad Ahmed Farooq"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setJawadAhmedFarooq(j);
            console.log(JawadAhmedFarooq);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // Vice President

        // General Secretary

        getDocs(query(collection(db, "General Secretary"), where("General_Secretary", "==", "Muhammad Asif Muhammad Ali"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadAsifMuhammadAli(j);
            console.log(MuhammadAsifMuhammadAli);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "General Secretary"), where("General_Secretary", "==", "Muhammad Imran Wehvaria"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadImranWehvaria(j);
            console.log(MuhammadImranWehvaria);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // General Secretary

        // Senior Joint Secretary

        getDocs(query(collection(db, "Senior Joint Secretary"), where("Senior_Joint_Secretary", "==", "Adnan Yaqoob"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setAdnanYaqoob(j);
            console.log(AdnanYaqoob);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "Senior Joint Secretary"), where("Senior_Joint_Secretary", "==", "Muhammad Imran Patel"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setMuhammadImranPatel(j);
            console.log(MuhammadImranPatel);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // Senior Joint Secretary

        // Joint Secretary

        getDocs(query(collection(db, "Joint Secretary"), where("Joint_Secretary", "==", "Shabbir Abdul Wahid"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setShabbirAbdulWahid(j);
            console.log(ShabbirAbdulWahid);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "Joint Secretary"), where("Joint_Secretary", "==", "Danish Ashraf Nakhuda"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setDanishAshrafNakhuda(j);
            console.log(DanishAshrafNakhuda);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // Joint Secretary

        // Treasurer

        getDocs(query(collection(db, "Treasurer"), where("Treasurer", "==", "Shahzad Kamdar"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setShahzadKamdar(j);
            console.log(ShahzadKamdar);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "Treasurer"), where("Treasurer", "==", "Abdul Rauf Rangoonwala"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                j++;
            });
            setAbdulRaufRangoonwala(j);
            console.log(AbdulRaufRangoonwala);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // Treasurer

        // MC_Members

        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Muhammad Yousuf Peermohamed"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Muhammad Yousuf Peermohamed"){
                        // console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setMuhammadYousufPeermohamed(j);
            console.log(MuhammadYousufPeermohamed);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Salman Muhammad Saleem"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Salman Muhammad Saleem"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setSalmanMuhammadSaleem(j);
            console.log(SalmanMuhammadSaleem);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Abdul Majeed Rangoonwala"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Abdul Majeed Rangoonwala"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setAbdulMajeedRangoonwala(j);
            console.log(AbdulMajeedRangoonwala);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Abdul Hannan Golden"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Abdul Hannan Golden"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setAbdulHannanGolden(j);
            console.log(AbdulHannanGolden);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Abdul Ghani Jamal Haji"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Abdul Ghani Jamal Haji"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setAbdulGhaniJamalHaji(j);
            console.log(AbdulGhaniJamalHaji);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Furqan Shafi"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Furqan Shafi"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setFurqanShafi(j);
            console.log(FurqanShafi);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });


        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Abdul Sami Surmawala"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Abdul Sami Surmawala"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setAbdulSamiSurmawala(j);
            console.log(AbdulSamiSurmawala);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Abdul Qadir Bharambia"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Abdul Qadir Bharambia"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setAbdulQadirBharambia(j);
            console.log(AbdulQadirBharambia);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Obaidullah Durvesh"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Obaidullah Durvesh"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setObaidullahDurvesh(j);
            console.log(ObaidullahDurvesh);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Muhammad Shahid Wehvaria"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Muhammad Shahid Wehvaria"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setMuhammadShahidWehvaria(j);
            console.log(MuhammadShahidWehvaria);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Afreen Patel"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Afreen Patel"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setAfreenPatel(j);
            console.log(AfreenPatel);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Muhammad Munawar Ibrahim Jamal"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Muhammad Munawar Ibrahim Jamal"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setMuhammadMunawarIbrahimJamal(j);
            console.log(MuhammadMunawarIbrahimJamal);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Muhammad Obaid Rehmani"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Muhammad Obaid Rehmani"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setMuhammadObaidRehmani(j);
            console.log(MuhammadObaidRehmani);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Fahim Abdul Aziz Memon"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Fahim Abdul Aziz Memon"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setFahimAbdulAzizMemon(j);
            console.log(FahimAbdulAzizMemon);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Zulqarnain Ghulam Muhammad"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Zulqarnain Ghulam Muhammad"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setZulqarnainGhulamMuhammad(j);
            console.log(ZulqarnainGhulamMuhammad);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });



        getDocs(query(collection(db, "mc_members"), where("MC_Members", "array-contains", "Khurram Abdus Samad Dochki"))).then((querySnapshot) => {
            j = 0;
            querySnapshot.forEach((doc) => {
                for(var i=0; i < 8; i++){
                    if(doc.data().MC_Members[i] == "Khurram Abdus Samad Dochki"){
                        console.log(doc.id, " => ", doc.data().MC_Members[i]);
                        j++;
                    }
                }
            });
            setKhurramAbdusSamadDochki(j);
            console.log(KhurramAbdusSamadDochki);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });

        // MC_Members

    }

    return (
        <div>
            <div className="voting-main">
                <nav className="votingPageId">
                    <img src={logo} width="50px" height="50px" />
                </nav>

                <div className="heading">
                    <h2>JAMNAGAR WEHVARIA MEMON JAMAT ELECTIONS 2021</h2>
                    <h1 style={{ marginTop: "5rem" }}>OFFICE BEARERS</h1>
                </div>

                <Vote setposition={setpresident} position={"President"} candidate1={"Hafiz Muhammad Ilyas"} candidate2={"Muhammad Yousuf Rangoonwala"} number1={HafizMuhammadIlyas} number2={MuhammadYousufRangoonwala}/>
                <Vote setposition={setseniorvicepresident} position={"Senior Vice President"} candidate1={"Muhammad Ali Nakhuda"} candidate2={"Muhammad Saeed Mulla"}  number1={MuhammadAliNakhuda} number2={MuhammadSaeedMulla}/>
                <Vote setposition={setvicepresident} position={"Vice President"} candidate1={"Muhammad Imran Suleman"} candidate2={"Jawad Ahmed Farooq"}  number1={MuhammadImranSuleman} number2={JawadAhmedFarooq}/>
                <Vote setposition={setgeneralsecretary} position={"General Secretary"} candidate1={"Muhammad Asif Muhammad Ali"} candidate2={"Muhammad Imran Wehvaria"}  number1={MuhammadAsifMuhammadAli} number2={MuhammadImranWehvaria}/>
                <Vote setposition={setseniorjointSecretary} position={"Senior Joint Secretary"} candidate1={"Adnan Yaqoob"} candidate2={"Muhammad Imran Patel"}  number1={AdnanYaqoob} number2={MuhammadImranPatel}/>
                <Vote setposition={setjointSecretary} position={"Joint Secretary"} candidate1={"Shabbir Abdul Wahid"} candidate2={"Danish Ashraf Nakhuda"}  number1={ShabbirAbdulWahid} number2={DanishAshrafNakhuda}/>
                <Vote setposition={settreasurer} position={"Treasurer"} candidate1={"Shahzad Kamdar"} candidate2={"Abdul Rauf Rangoonwala"}  number1={ShahzadKamdar} number2={AbdulRaufRangoonwala}/>

                <div className="heading">
                    <h1>MANAGING COMMITTEE</h1>
                </div>



                <div style={{ width: "100vw", display: "flex" }}>
                    <div className="managingCommittee" >

                        {/* {i} */}
                        <McVote name={"Muhammad Yousuf Peermohamed"} image={book} number={MuhammadYousufPeermohamed}/>
                        <McVote name={"Salman Muhammad Saleem"} image={umbrella} number={SalmanMuhammadSaleem}/>
                        <McVote name={"Abdul Majeed Rangoonwala"} image={book} number={AbdulMajeedRangoonwala}/>
                        <McVote name={"Abdul Hannan Golden"} image={umbrella} number={AbdulHannanGolden}/>
                        <McVote name={"Abdul Ghani Jamal Haji"} image={book} number={AbdulGhaniJamalHaji}/>
                        <McVote name={"Furqan Shafi"} image={umbrella} number={FurqanShafi}/>
                        <McVote name={"Abdul Sami Surmawala"} image={book} number={AbdulSamiSurmawala}/>
                        <McVote name={"Abdul Qadir Bharambia"} image={umbrella} number={AbdulQadirBharambia}/>
                        <McVote name={"Obaidullah Durvesh"} image={book} number={ObaidullahDurvesh}/>
                        <McVote name={"Muhammad Shahid Wehvaria"} image={umbrella} number={MuhammadShahidWehvaria}/>
                        <McVote name={"Afreen Patel"} image={book} number={AfreenPatel}/>
                        <McVote name={"Muhammad Munawar Ibrahim Jamal"} image={umbrella} number={MuhammadMunawarIbrahimJamal}/>
                        <McVote name={"Muhammad Obaid Rehmani"} image={book} number={MuhammadObaidRehmani}/>
                        <McVote name={"Fahim Abdul Aziz Memon"} image={umbrella} number={FahimAbdulAzizMemon}/>
                        <McVote name={"Zulqarnain Ghulam Muhammad"} image={book} number={ZulqarnainGhulamMuhammad}/>
                        <McVote name={"Khurram Abdus Samad Dochki"} image={umbrella} number={KhurramAbdusSamadDochki}/>

                    </div>
                </div>


                <div style={{ width: "100vw", alignItems: "center", display: "flex", flexDirection: "column" }}>

                    <div className="castvotebtn" onClick={getVote}>GET VOTE <i class="uit uit-arrow-circle-right"></i></div>

                </div>

            </div>



        </div >
    )
}