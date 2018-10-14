//Room Booking // exercise for WTMB: JavaScript Crash Course Vol.2 Lecture 1




var Guests = class {
    constructor(guestsName){
        this.guests=guestsName
        this.accomodations = []
        console.log ("We have new guests:", guestsName)
    }

    booked(Accomodation) {
       this.accomodations.push(Accomodation)
       Accomodation.booking.push(this)

    }
 
}




var Accomodation = class {
    constructor(name, price, guests){
        this.name=name
        this.price=price
        this.guests = []
        this.booking = []
        console.log("type of accomodation available: " + name, price)
    }
  addGuests(guests){
        this.guests.push(guests)
        console.log("New Guest Request for", this.name, 'by', guests.name)

}
}




var lia = new Guests("Lia")
singleRoom.addGuests(lia)

var susy = new Guests("Susy")
singleRoom.addGuests(susy)

var juno = new Guests ("Juno")
doubleRoom.addGuests(juno)




var loft = new Accomodation("Loft", 500)

var doubleRoom = new Accomodation("Double Room", 200)

var singleRoom = new Accomodation("Single Room", 100)

var cabin = new Accomodation("Cabin", 30)






  lia.booked(cabin)
  console.log(lia)


  susy.booked(doubleRoom)
  console.log(susy)


  juno.booked(loft)
  console.log(juno)
 