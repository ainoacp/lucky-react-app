import { useState } from "react";

export default function PasswordButton() {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <button onClick={togglePassword}/>
    )
}