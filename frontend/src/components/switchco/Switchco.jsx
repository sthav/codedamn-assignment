import { useState } from "react";
import Switch from "react-switch";

const Switchco = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (newChecked) => {
        setChecked(newChecked);
    };

    return (
        <label>
            <Switch onChange={handleChange} checked={checked} height={20} width={50} handleDiameter={10} />
        </label>
    );
};

export default Switchco;



