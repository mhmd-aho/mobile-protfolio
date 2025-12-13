import Navbar from "/src/components/navbar";

export default function Header() {
  return (
    <header className="
      w-full min-h-[22vh] 
      flex flex-col items-center justify-between
      border-b border-black/20
      px-3 py-4
    ">
      {/* Name */}
      <h1 className="
        text-2xl sm:text-3xl 
        font-bold text-black 
        text-center leading-tight
      ">
        Mohamad Abou Hamoud
      </h1>

      {/* Role */}
      <h2 className="
        text-blue-600 
        text-base sm:text-lg 
        font-medium 
        text-center
      ">
        Frontend Developer
      </h2>

      {/* Location */}
      <p className="
        text-xs sm:text-sm 
        text-black/60 
        text-center
      ">
        Saida, Lebanon
      </p>

      {/* Navigation */}
      <Navbar />
    </header>
  )
}
