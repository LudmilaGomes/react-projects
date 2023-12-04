import {ReactNode} from "react";

interface Props
{
    children: ReactNode;
    // ? indicates that it is a optional parameter
    // we indicate only three possible options to color; for anything that is different, will appear an error
    color?: 'warning' | 'primary' | 'secondary'
    onClick: () => void;
}

// color have a default value
const Button = ({children, color = 'primary', onClick}: Props) =>
{
    return (
        <button type="button" className={`btn btn-${color}`} onClick={onClick}>{children}</button>
    );
}

export default Button;