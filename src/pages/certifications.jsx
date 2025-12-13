import { certifications } from "../lib/data";
import Header from "/src/components/header";
import { useState } from "react";
export default function Certifications() {
    const [showModal,setShowModal] = useState(false);
    return (
         <section className="min-h-screen w-screen flex flex-col justify-start items-center gap-4 p-2">
            <Header />
            <div className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <h1 className="text-2xl font-bold">Projects</h1>
                <div className="flex flex-col gap-2 justify-start items-start h-fit w-full p-2">
                    {certifications.map((certification,index)=>{
                        return(
                            <div onClick={()=>setShowModal(index)} key={index} className="relative flex flex-col justify-start items-start h-96 w-full border border-black/20 bg-black/10 rounded-lg shadow-lg">
                                <div className="h-1/2 w-full overflow-hidden rounded-t-lg">
                                    <img className="h-full w-full object-cover" src={certification.src} alt={certification.name} />    
                                </div>
                                <div className="flex flex-col gap-1 justify-start items-start h-1/2 w-full p-2">
                                    <h2 className="text-xl font-semibold">{certification.name}</h2>
                                    <p className="text-sm text-black/50">{certification.des}</p>
                                </div>
                                {
                                    showModal === index && (
                                        <div onClick={(e)=>{
                                            e.stopPropagation()
                                            setShowModal(null)
                                        }} className="bg-white/20 backdrop-blur-3xl absolute inset-0 h-full flex justify-center items-center rounded-lg">
                                            <div className="flex gap-2 justify-start items-start h-fit w-fit p-2">
                                                <a download={certification.name} className="px-4 py-2 border rounded-lg border-blue-600 bg-blue-500  shadow-lg text-black/50" href={certification.pdf}>Download</a>
                                                { certification.link && <a onClick={(e)=>e.stopPropagation()} className="px-4 py-2 border rounded-lg border-black/20 bg-black/10 shadow-lg text-black/50" href={certification.link} target="_blank" rel="noopener noreferrer">Open</a>}
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}