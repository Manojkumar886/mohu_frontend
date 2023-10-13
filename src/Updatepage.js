import { useState } from "react"
import { altervalues } from "./ArrayValues";

export const Updatepage=(replaceing)=>
{

    const[pos,setPos]=useState(replaceing.who);
    const[myvalues,setMyvalues]=useState({
        "studid":replaceing.studentdet.studid,
        "studname":replaceing.studentdet.studname,
        "studmark":replaceing.studentdet.studmark,
        "studsalary":replaceing.studentdet.studsalary
    })

    const track=(datas)=>
    {
        const{name,value}=datas.target
        setMyvalues((getting)=>
        {
            return{
                ...getting,
                [name]:value
            }
        })
    }
    const updating=()=>
    {
        altervalues(myvalues,pos);
        alert(" your values is updated successfully");
        alert(JSON.stringify(myvalues));
    }
    return(
        <>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <h1 className='text-center'>StudentRegistrationForm</h1>
                    <div className='col-lg-8 col-md-10 col-sm-12'>
                        <div className='form-group'>
                            <label className='form-label'>Enter your Regno</label>
                            <input
                            placeholder='Enter your regno'
                            type='number'
                            name='studid'
                            onChange={track}
                            value={myvalues.studid}
                            className='form-control'
                             />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Enter your Name</label>
                            <input
                            placeholder='Enter your Fullname'
                            type='text'
                            name='studname'
                            onChange={track}
                            value={myvalues.studname}
                            className='form-control'
                             />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Enter your 10th MARK</label>
                            <input
                            placeholder='Enter your 10thMARK'
                            type='number'
                            name='studmark'
                            onChange={track}
                            value={myvalues.studmark}
                            className='form-control'
                             />
                        </div>
                        <div className='form-group mt-2'>
                            <label className='form-label'>Enter your Expected Salary</label>
                            <input
                            placeholder='Enter your salary'
                            type='text'
                            name='studsalary'
                            onChange={track}
                            value={myvalues.studsalary}
                            className='form-control'
                             />
                        </div>
                        <div className='row justify-content-center mt-5'>
                            <button className='btn btn-outline-success col-5 me-3' onClick={updating}>Update</button>
                            <button className='btn btn-outline-danger col-5 ms-3'>Cancel</button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}