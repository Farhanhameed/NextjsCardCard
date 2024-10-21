import Image from "next/image"
import logo from "logo.jpg"
import footer from "./footer/page"

export default function Navbar() {
    return(
        <div>
            <header>
                <nav className="bg-blue-600 h-16 flex items-center justify-between">
                    <div className="flex items-center ml-6">
                        <Image src="/logo.jpg" alt="logo" height={80} width={80} className="ml-4 pt-16"/>
                        <h1 className="text-blue-300 ml-20 font-bold font-900 text-2xl">Governor Sindh IT Initiative</h1>
                    </div>
                    <ul className="flex space-x-12 text-white mr-6">
                        <li>Home</li>
                        <li>Apply</li>
                        <li>ContactUs</li>
                        <li>Result</li>
                        <li>
                            <select id="Course" name="Course" className="bg-blue-900 text-white border-none">
                                <option value="Course">TypeScript</option>
                                <option value="Course">Next.js</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="flex w-full justify-center mt-20 space-x-4 px-10">
              <div className="bg-red-600 h-60 w-4/12"></div>
              <div className="bg-pink-400 h-60 w-4/12"></div>
              <div className="bg-orange-500 h-60 w-4/12"></div>
            </div>
            <div className = "flex w-full justify-center mt-20 space-x-4 px-10">
              <div className = "bg-blue-400 h-60 w-6/12"></div>
              <div className = "bg-purple-400 h-60 w-6/12"></div>
            </div>
            <footer />
        </div>
              
      
    )
}