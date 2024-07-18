import { IonDatetime } from "@ionic/react";

//Creacion de props
interface CalendarProps {
    //con el signo de pregunta al final hacemos que no sea obligatorio
    value?: string;
    min?: string;
    max?: string;
}

//Creamos funcion y establecemos que le van a llegar parametros de la interfaz CalendarProps y establecemos cuales
const Calendar: React.FC<CalendarProps> = ({ value, min, max }) => {
    return <IonDatetime value={value} min={min} max={max}></IonDatetime>;
};

export default Calendar;