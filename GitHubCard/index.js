/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/stephaniegatt")
  .then(response => {
    console.log("see response", response);
    // debugger
    cardMaker(response.data)
  })
const cardMaker = (data) => {
  const card = document.createElement("div")
  const cardImage = document.createElement("img")
  const infoContainer = document.createElement("div")
  const name = document.createElement("h3")
  const location = document.createElement("p")
  const profile = document.createElement("p")
  const profileLink = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")
  const userName = document.createElement("p")
  console.log("this is my profile", profileLink)

  card.appendChild(cardImage)
  card.appendChild(infoContainer)
  infoContainer.appendChild(name)
  infoContainer.appendChild(userName)
  infoContainer.appendChild(location)
  infoContainer.appendChild(profile)
  infoContainer.appendChild(followers)
  infoContainer.appendChild(following)
  infoContainer.appendChild(bio)
 

  card.classList.add('card')
  name.classList.add('name')
  userName.classList.add('userName')

  cardImage.src = data["avatar_url"]
  name.textContent = data.name
  location.textContent = data.location
  profile.textContent = "Profile: "
  profileLink.textContent = `https://github.com/${data.login}`
  profileLink.href = `https://github.com/${data.login}`
  followers.textContent = data.followers
  following.textContent = data.following
  bio.textContent = data.bio
  userName.textContent = data.login

  profile.appendChild(profileLink)

  document.querySelector(".cards").appendChild(card)
}

axios
.get("https://api.github.com/users/stephaniegatt/followers")
.then(response => {
  console.log("response", response)
  response.data.forEach((data) => {
    axios
    .get(`https://api.github.com/users/${data.login}`)
    .then(dataResponse => {
      cardMaker(dataResponse.data)
    })
  })
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = ["samanthagatt", "Elisa-Alvarez", "Khalil-Foulks", "dustinmyers", "bigknell"];

// followersArray.forEach((data) => {
//   axios
//   .get(`https://api.github.com/users/${data}`)
//   .then(response => {
//     // debugger
//     cardMaker(response.data)
//   }) 
// })




/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
