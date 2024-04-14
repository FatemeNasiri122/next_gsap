"use client";
import { useState } from "react"
import DropDownMenu from "./DropDownMenu"

const DropDownContainer: React.FC = () => {
    const [select, setSelected] = useState("");

    return <>
        <div className="w-5/6 md:w-80 p-4">
            <DropDownMenu
                placeholder='select'
                options={[
                    { option: "item 1", action: () => setSelected("item 1") },
                    { option: "item 2", action: () => setSelected("item 2") },
                    { option: "item 3", action: () => setSelected("item 3") },
                    { option: "item 4", action: () => setSelected("item 4") },
                    { option: "item 5", action: () => setSelected("item 5") },
                ]} />
        </div>

    </>
}

export default DropDownContainer;