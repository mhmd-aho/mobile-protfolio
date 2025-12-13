import Header from "/src/components/header";
import { contactApp } from "/src/lib/data";
export default function Contacts() {
    return (
       <section className="min-h-screen w-screen flex flex-col justify-start items-center gap-4 p-2">
            <Header />
        <div className=" flex flex-col gap-4 justify-center items-center h-3/4 w-full">
            <div className="flex flex-col gap-2 justify-start items-start h-fit w-full">
                <h2 className="text-2xl font-bold ">Get in touch</h2>
                <p className="text-[12px] text-black/50 w-full text-start">
                  Have a project in mind or just want to say hello?<br/>
                  I'm here to help!
                </p>
            </div>
            <form className="flex flex-col gap-2 justify-center items-center h-fit w-full px-4" action="">
                <input className="border border-black/20 bg-black/10 p-3 w-full text-black/50 rounded-lg" type="text" placeholder="Name" />
                <input className="border border-black/20 bg-black/10  p-3 w-full text-black/50 rounded-lg" type="email" placeholder="Email" />
                <textarea className="border border-black/20 bg-black/10 p-3 w-full text-black/50 rounded-lg" name="message" id="message" placeholder="Message"></textarea>
                <button className="border border-blue-600 bg-blue-500 py-3 w-full text-black/50 rounded-lg" type="submit">Send</button>
            </form>
            <div className="flex justify-between items-center w-full">
                <div className="h-px w-1/4 bg-black/20 rounded-full"/>
                <p className="text-[12px] text-black/50 w-1/2 text-center ">Or reach me directly at</p>
                <div className="h-px w-1/4 bg-black/20 rounded-full"/>
            </div>
        <div className="flex justify-center items-center gap-6 w-full">
          {
            contactApp.map((app,index)=>(
              <a key={index} href={app.link} className="h-12 w-12 p-2 bg-black/10 duration-300 rounded-full flex justify-center items-center">
                <img loading="lazy" src={app.icon} alt="icon" className="h-8 w-8" />
              </a>
            ))
          }
        </div>
        
      </div>
        </section>
    )   
}