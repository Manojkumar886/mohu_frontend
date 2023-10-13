let studentdetails=[
    {
        "studid":1001,
        "studname":"Yusuf",
        "studmark":454,
        "studsalary":"8.9"
    },
    {
        "studid":1002,
        "studname":"Mohanavel",
        "studmark":456,
        "studsalary":"8.9"
    },
    {
        "studid":1003,
        "studname":"Manojkumar",
        "studmark":434,
        "studsalary":"2.6"
    },
    {
        "studid":1004,
        "studname":"Annamalai",
        "studmark":467,
        "studsalary":"5.6"
    }
]

export let creation=(studentdetail1)=>
{
    studentdetails.push(studentdetail1);
}

export let listing=()=>
{
    return studentdetails;
}

export let Reading=(index)=>
{
    return studentdetails[index];//studentdetails[1]
}


export let Fetchingvalues=(name)=>
{
    const temp=studentdetails.filter((data)=>
    {
        return data.studname===name;
    })
    return temp[0];
}

export const altervalues=(newvalues,index)=>
{
    studentdetails[index]=newvalues;//studentdetails[3]=newstudentdetails;
}


export const removing=(ind)=>
{
    const ques=prompt("if you want to delete (yes/no)");

    if(ques==="yes")
    {
        studentdetails=studentdetails.filter((data,pos)=>
        {
            return pos!==ind;
            // 0!==2;
        })
        return studentdetails;
    }
    else if(ques==="no")
    {
        alert(" your value is not deleted in my database")
        return studentdetails;
    }
    else{
        alert(" Pooda Mairu")
    }

}