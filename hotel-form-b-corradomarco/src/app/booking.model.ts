import { Room } from './room.model';

export class Booking
{
    constructor(
        public room : Room,
        public   from: Date,
        public   to : Date,
        public   name : String,
        public   surname: String,
        public email : String ,
        public cLenzuola : String,
    ) {}
    
}