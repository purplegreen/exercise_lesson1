//Room Booking // exercise for WTMB: JavaScript Crash Course Vol.2 Lecture 1


var Accomodation = class {
    constructor(roomType){
        this.roomType=roomType
        this.guest = []
        console.log("type of accomodation available: " + roomType)
    }
    addGuest(guest){
        this.guest.push(guest)
        console.log("New Guest Request for", this.roomType, 'by', guest.name)

    }
       bookTheRoom(booking){
        this.booking.push(booking)
    }
}



var Guest = class {
    constructor(guestName){
        console.log ("We have new guests:", guestName)
    }

}



var doubleRoom = new Accomodation("Double Room")

var singleRoom = new Accomodation("Single Room")


var guest1 = new Guest("Gina")
doubleRoom.addGuest(guest1)

var guest2 = new Guest("Susy")
singleRoom.addGuest(guest2)

var guest3 = new Guest("Mario and Marta")
doubleRoom.addGuest(guest3)
