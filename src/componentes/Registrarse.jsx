import { useRef } from "react";

export function Registrarse (){
    const tipoid = useRef();
    const numeroid = useRef();
    const paisid= useRef();
    const departamentoid = useRef();
    const municipioid = useRef();
    const fechaid = useRef();
    const nombresid= useRef();
    const primerapellidoid = useRef();
    const segundoapellidoid = useRef();
    const generoid = useRef();
    const fechanacimiento = useRef(); 
    const paisnacimiento= useRef();
    const departamentonacimiento = useRef();
    const municiponacimiento = useRef();
    const usuarioid = useRef();
    const contraseña = useRef();
    
    let datosusuarios = [];

}

function Crearusuarios() {

    const tipid= tipoid.current.value;
    const numid= numeroid.current.value;
    const nomsid= nombresid.current.value;
    const primerapellido= primerapellidoid.current.value;
    const segundoapellido = segundoapellidoid.current.value;
    const genid=generoid.current.value;
    const fecnacid= fechanacimiento.current.value;
    const paisnac= paisnacimiento.current.value;
    


}