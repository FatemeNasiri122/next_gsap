import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

type options = { option: string, action: () => void };

interface Props {
    label?: string;
    placeholder?: string;
    options?: options[];
    handleSelect?: () => void;
}

const DropDownMenu: React.FC<Props> = ({ label, placeholder, options }) => {
    const [selected, setSelected] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const select = (op: options): void => {
        setSelected(op.option);
        setOpen(false);
        op.action();
    }

    return (<div className="flex flex-col">
        <label className="block text-gray-100 mb-2">{label}</label>
        <div className="relative">
            <button type="button"
                className="w-full flex justify-between items-center py-2 px-4 bg-midnight-300  rounded"
                onClick={() => setOpen(prev => !prev)}
            >
                <span className="text-primary">{selected ? selected : placeholder || "please select"}</span>
                <span className={`transition text-color-body ${open ? "rotate-180" : "rotate-0"}`}>
                    <RiArrowDropDownLine className="text-gray-100" size="30" />
                </span>
            </button>
            {open && <ul className={`absolute z-10 top-14 mt w-full bg-midnight-300 rounded transition-all duration-700 origin-top max-f-72 overflow-auto [&>*]:border-b [&>*]:border-midnight-100 cursor-pointer`}>
                {options?.map(op => <li
                    key={op.option}
                    className="px-4 py-2 text-gray-100"
                    onClick={() => select(op)}
                >
                    {op.option}
                </li>)}
            </ul>}

        </div>
    </div>)
}

export default DropDownMenu;