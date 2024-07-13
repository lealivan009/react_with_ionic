import { IonDatetime } from "@ionic/react";

interface CalendarProps {
    value?: string;
    min?: string;
    max?: string;
}

const Calendar: React.FC<CalendarProps> = ({ value, min, max }) => {
    return <IonDatetime value={value} min={min} max={max}></IonDatetime>;
};

export default Calendar;