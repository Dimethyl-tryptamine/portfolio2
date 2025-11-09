

import React from 'react';
import { motion } from 'framer-motion';


interface DropdownProps {
    placeHolder: string;
    options?: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ placeHolder, options = [] }: DropdownProps) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }


    return (
        <>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <button onClick={toggleDropdown}>{placeHolder}</button>

                {isOpen && (
                    <motion.div
                        className="inline-block"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.12 }}
                        style={{
                            position: 'absolute',
                            top: '100%',   // place directly below the button
                            left: 0,
                            marginTop: 8,  // gap between button and dropdown
                            zIndex: 999,
                        }}
                    >
                        <ul style={{ margin: 0, padding: 0 }}>
                            {options.map((opt, i) => (
                                <li key={i} style={{ fontSize: '1rem' }}>{opt}</li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </>
    )
}

export default Dropdown;