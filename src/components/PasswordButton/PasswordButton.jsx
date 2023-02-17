import { useState } from "react";

export default function PasswordButton( {toggle} ) {

    const change = (e) => {
        toggle(e.target.value);
    }

    return (
        <button onClick={change}/>
    )
}