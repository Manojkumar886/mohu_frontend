import { useEffect, useState } from "react";
import { Reading } from "./ArrayValues";

export let Readpage=(indexvalue)=>
{
    const[myvalues,setMyvalues]=useState({
        "studid":0,
        "studname":"",
        "studmark":0,
        "studsalary":""
    })

    const setttingvalues=()=>
    {
        setMyvalues(Reading(indexvalue.who));
    }

    useEffect(()=>
    {
        setttingvalues()
    })
    return(
        <>
         <>
                <div className="container text-center mt-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="bg-warning">
                                <h1>FindBYID (One User value)</h1>
                                <tr>
                                    <td>Student ID:<span className="ms-5">{myvalues.studid}</span></td>
                                </tr>
                                <tr>
                                    <td>Student NAME:<span className="ms-5">{myvalues.studname}</span></td>
                                </tr>
                                <tr>
                                    <td>Studnet MARK:<span className="ms-5">{myvalues.studmark}</span></td>
                                </tr>
                                <tr>
                                    <td>StudentSalary:<span className="ms-5">{myvalues.studsalary}</span></td>
                                   
                                </tr>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );  
}