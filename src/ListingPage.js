import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { listing } from './ArrayValues';
import { RegistrationForm } from './ResgitrationForm';
import { Readpage } from './Readpage';

export let Listingpage=()=>
{

    const [temparray,setTemparray]=useState([])
    const[createpage,setCreatepage]=useState(false);
    const[readpage,setReadpage]=useState(false);
    const[pos,setPos]=useState(0);

    const gettingvalues=()=>
    {
        setTemparray(listing());
    }
    useEffect(()=>
    {
        gettingvalues()
    })

    return(
        
        <>
        <div className='container row justify-content-center '>
        <div className='table-responsive-md'>
            {
                (createpage)?
                <>
                <RegistrationForm/>
                <button className='btn btn-outline-dark text-light col-2 mt-2 mb-3'
                onClick={()=>
                {
                    setCreatepage(false)
                }}
                >BACK</button>
                </>
                :
                (readpage)?
                <>
                <Readpage who={pos} />
                <button 
                onClick={()=>
                {
                   setReadpage(false)
                }}
                >BACK</button>
                </>
                :
                <>
                <button className='btn btn-outline-info col-2 mt-2 mb-3'
                onClick={()=>
                {
                    setCreatepage(true)
                }}
                >RegistrationForm
                </button>
                <table className='table table-striped table-primary col-lg-8 col-md-10 col-sm-12'>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>student NAME</th>
                            <th>Student MARK</th>
                            <th>Student SALARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temparray.map((data,index)=>
                            (
                                <>
                                <tr>
                                    <td onClick={()=>
                                    {
                                        setReadpage(true);
                                        setPos(index)
                                    }}>{data.studid}</td>
                                    <td>{data.studname}</td>
                                    <td>{data.studmark}</td>
                                    <td>{data.studsalary}</td>
                                </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
                </>
                }
                </div>
            </div>
        </>     
    );
}