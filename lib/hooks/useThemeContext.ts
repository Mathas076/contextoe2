import { useContext } from "react";
import { ThemeContext } from "../contexts/theme/ThemeContext"

export const useThemeContext=()=>{
    const theme = useContext(ThemeContext);
    if(theme===undefined)
        throw new Error("useContext debe ser utilizado dentro de un ContextProvider");
    return theme;
}
