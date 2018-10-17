
// FORum A Discussion Platform developed at WTM Berlin 2018 //


var Post = class {
     constructor (title, entry){
        this.title = title
        this.entry = entry

         }
}




var User = class {
      constructor (name, profileicon) {
          this.name = name
          this.profileicon = profileicon
          this.posts = []
      }

      posted(Post){
      this.posts.push(Post)
      }

      thumb(interact)
      this.type.push(interact)

}



var Interaction = class {
       constructor (type) {
       this.type = type
       }

}





var loveit = new Interaction ("Love It")
var notreally = new Interaction ("Not Really")
var checkmypost = new Interaction ("I have something to say")


var deh = new User ('DehLix', '^_^')
var stella = new User ('Stella', ';)')
var juno = new User ('Juno', ':)')


var post1 = new Post ("Disposable", "We produce 300million tons of plastic every year and half of it is meant to be used only once.")
var post2 = new Post ("Bring Your Own", "I think most of us are now familiar with this tip. Instead of buying a new plastic bag from the cashier every time you do your groceries, bring your own !")
var post3 = new Post ("Toothbrushes", "Take a bamboo one ! You will just have to remove the bristles before putting them into a recycling bin.")
var post4 = new Post ("Sponges", "those eco-friendly solutions work better than traditional sponges.")
var post5 = new Post ("Lifestyle", "In fact, most of our plastic litter is currently floating around in the sea and at least 8 million tons of plastic ads up every year. Yum !")


console.log(post1)

stella.posted(post1)
console.log(stella)