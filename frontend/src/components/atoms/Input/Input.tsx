import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({...rest}: InputProps) {
    return (
        <input {...rest} />
    )
}