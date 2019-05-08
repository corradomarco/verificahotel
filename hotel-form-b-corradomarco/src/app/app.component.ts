import { Component } from '@angular/core';
import { RoomList } from './roomLsit.model';
import { Room } from './room.model';
import { Booking } from './booking.model';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators

} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Benvenuti all'hotel degli alberi";
  rooms = RoomList;
  selectedRoom: Room;
  bookingList: Booking[];
  bookingForm: FormGroup;

  constructor(public fb: FormBuilder) { }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomControl: [RoomList[0]],
      nameControl: ['name',Validators.required],
      surnameControl: ['surname', Validators.required],
      fromControl: ['gg/mm/2019', Validators.required],
      toControl: ['gg/mm/2019', Validators.required],
      emailControl:['ciao@io', Validators.required],
      cLenzuola : ['rosse', Validators.required],


    });

    this.bookingList = new Array <Booking>();
  }


  onChange() {
    //In questo modo ottengo l'oggetto selezionato
    this.selectedRoom = this.bookingForm.controls['roomControl'].value;
  }

  onSubmit(): boolean {
    let room = this.bookingForm.controls['roomControl'].value;
    let name = this.bookingForm.controls['nameControl'].value;
    let surname = this.bookingForm.controls['surnameControl'].value;
    let from =  this.bookingForm.controls['fromControl'].value;
    let to =  this.bookingForm.controls['toControl'].value;
    let email = this.bookingForm.controls['emailControl'].value;
    let cLenzuola =  this.bookingForm.controls['cLenzuolaControl'].value;
    this.bookingList.push(new Booking(room, new Date(from), new Date(to), name, surname,email, cLenzuola));
    return false;
  }
}
