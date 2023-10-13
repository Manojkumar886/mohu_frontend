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

