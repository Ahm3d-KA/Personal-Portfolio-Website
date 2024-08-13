import React from "react"

const Experience = () => {
    return (
        <div className="py-10 bg-[#232325]">
            <h2 className="mb-8 text-3xl text-white text-center">
                My <span>Experience</span>
            </h2>
            <div className="mb-[20]px text-white relative bg-gray-700/20 
            p-4 rounded-3xl max-w-[600px] mx-auto">
                <p>First Company</p>
                <p className="text-gray-400">(2020 - Present)</p>
                <p className="text-gray-500">
                    Explain the experience
                </p>
            </div>
            <div className="h-[50]px w-[2px] bg-slate-400 relative my-1 mx-auto"></div>
        </div>
    )
}

export default Experience