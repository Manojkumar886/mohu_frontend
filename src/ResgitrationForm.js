
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
export let RegistrationForm=()=>
{
    // const[getvariable,setfunction]=usestate(initialization)
    const[myvalues,setMyvalues]=useState({
        "studid":0,
        "studname":"",
        "studmark":0,
        "studsalary":""
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

    const register=()=>
    {
        alert(" Welcome to zealous college"+JSON.stringify(myvalues))
    }
    return(
        <>
            <form className='container text-center'>
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
                            <button className='btn btn-outline-success col-5 me-3' onClick={register}>Register</button>
                            <button className='btn btn-outline-danger col-5 ms-3'>Cancel</button>
                        </div>
                    </div>
                </div>  
            </form>
        </>
    );
}