import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICldAppointment } from '../models/cld-appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private storageKey = 'appointments'
  appointments: ICldAppointment[];

  constructor() { 
      this.appointments = this.getDataFromStorage();
  }

  getAllAppointments(): Observable<ICldAppointment[]>{
    return of(
      this.appointments
    );
  }

  getAppointment( appointmentId : number): Observable<ICldAppointment | undefined>{
    const item = this.appointments.find((item) => item.id === appointmentId);
    return of(
      item
    )
  }

  createNewAppointment(newData: Omit<ICldAppointment, 'id'>): Observable<void>{

    const min = 100000;
    const max = 999999;
    const randomId = Math.round(Math.random() * (max - min + 1)) + min;
    const newUser = { id: randomId, ...newData};
    this.appointments.push(newUser)
    this.updateStorage();
    return of()
    
  }

  deleteAppointment( appointment: ICldAppointment): Observable<void>{
    const index = this.appointments.findIndex(value => value === appointment)
    this.appointments.splice(index, 1)
    this.updateStorage();
    return of(
      
    )
  }


  getDataFromStorage(): ICldAppointment[] | []{
    const data = JSON.parse(localStorage.getItem(this.storageKey) ?? '[]'); 
    return data
  }

  updateStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.appointments));
  }
}
