import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({options, selected, onSelectedChange, defaultLabel}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = event => {
            if(ref.current.contains(event.target)) return;
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick, {capture: true})

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
    }, []);

    const renderedOptions = options.map(option => {
        if(selected != null && option.param === selected.param) return null;
        return(
            <div key={option.param} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        )
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`} 
                    onClick={() => setOpen(!open)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected != null ? selected.label : defaultLabel}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;