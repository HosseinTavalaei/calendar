import { CLdAppointmentRepeat } from "../enums/appointment-repeat";

export interface ICldAppointment {
    id?: number;
    title?: string;
    dueDate?: Date;
    startTime?: Date;
    endTime?: Date;
    allDaye?: boolean;
    repeat?: CLdAppointmentRepeat 
}