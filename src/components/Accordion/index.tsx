'use client'

import { useState } from "react"

export function Accordion() {

    const [isOpen, setIsOpen] = useState(false)

    function handleAccordionOpen() {
        setIsOpen(!isOpen)
    }
    
    return (
        <li className="flex flex-col cursor-pointer">
            <header className="w-full border-2 border-emerald-500 p-4 flex items-center justify-between" onClick={handleAccordionOpen}>
                <h4 className="font-bold">Lorem ipsum dolor sit?</h4>
                <span className="font-bold text-emerald-500">+</span>
            </header>
            <p
                className="border-2 border-emerald-500 p-4"
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, blanditiis ratione amet voluptate voluptatem alias sapiente assumenda corporis ipsam accusamus, eaque architecto neque reprehenderit perspiciatis veniam vel natus? Porro, provident?
            </p>
        </li>
    )
}