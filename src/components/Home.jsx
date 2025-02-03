import React from 'react'
import '../styles/Home.css'

const Home = () => {
    const cardData=[{
        title:"Text Utils",
        logoImage:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
        description:"This is a simple text utility app which can be used to convert the text into various formats.",
        link:"/text-util"
    },
    {
        title:"Dummy Files",
        logoImage:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
        description:"This is a simple text utility app which can be used to convert the text into various formats.",
        link:"/dummy-files"
    },
    {
        title:"Word Cloud",
        logoImage:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
        description:"This is a simple text utility app which can be used to convert the text into various formats.",
        link:"/word-cloud"
    },
    {
        title:"QR Code Generator",
        logoImage:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
        description:"This is a simple text utility app which can be used to convert the text into various formats.",
        link:"/QRcode-genrator"
    },
    {
        title:"Base64 Converter",
        logoImage:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
        description:"This is a simple text utility app which can be used to convert the text into various formats.",
        link:"/Base64Converter"
    },
    {
        title:"Json Formatter",
        logoImage:"https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
        description:"This is a simple text utility app which can be used to convert the text into various formats.",
        link:"/Json-formatter"
    },
]
  return ( 
  
    <div>
        <h3 style={{alignItems:"center", display:"flex"}}> Choose your App</h3>
        <div className="container">
            <div className="row">
            {cardData.map((data,index)=>{
                return(
                <div className="card" key={index}>
                   
                        <h5 style={{marginLeft:"90px"}}>{data.title}</h5>
                        <img style={{height:"70px", width:"60px",marginLeft:"90px",boxShadow: "10px 10px 20px rgba(243, 234, 234, 0.3)"}} src={data.logoImage} alt="logo" />
                        <p className="" >{data.description}</p>
                        
                        <a href={data.link} style={{color:"blue"}} className="btn btn-primary">Open</a>
                   
                   
                </div>
                )
            })}
            </div>
        </div>

    </div>
  )
}

export default Home