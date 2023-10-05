import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';


export let Operator=()=>
{
    const[userinput,setUserinput]=useState("nothing");//summer ,winter,spring

    const[output,setOutput]=useState(""); //display the output

    const[change,setChange]=useState({backgroundColor:'black'});

    const input=(temp)=>
    {
        setUserinput(temp.target.value);
    }

    const ternaryOperator=()=>
    {
        (userinput==="summer")?
        setChange({color:'yellow',textShadow:'3px 5px 6px 7px black'}):
        (userinput==="winter")?
        setChange({color:'blue',textShadow:'3px 5px 6px 7px black'}):
        (userinput==="spring")?
        setChange({color:'seagreen',textShadow:'3px 5px 6px 7px black'}):

        setChange({backgroundColor:'black'})

        setOutput(userinput);
    }

    return(
        <>
            <div className='row justify-content-center col-5'>
                    <input className='fomr-control' onChange={input} />
                    <button className='btn btn-outline-warning' onClick={ternaryOperator}>click me show your favoriate season</button>
                    <b style={change}>
                        {output}
                    </b>
            </div>
        </>
    );
}