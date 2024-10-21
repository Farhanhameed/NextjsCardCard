export default function footer() {
    return(
        <div>
            <h1>footer here</h1>
            <ul className="flex space-x-12 text-black mr-6">
                        <li>Home</li>
                        <li>Career</li>
                        <li>ContactUs</li>
                        <li>Result</li>
                        <li>
                            <select id="Course" name="Course" className="bg-blue-900 text-white border-none">
                                <option value="Course">TypeScript</option>
                                <option value="Course">Next.js</option>
                            </select>
                        </li>
                    </ul>
        </div>
    )
}