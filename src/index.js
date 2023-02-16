// Your code here
fetch("http://localhost:3000/characters")
.then(response => response.json())
.then(flatData => {
//console.log(flatData)
//flatData has all the data for the flatacuties
renderCuties(flatData)
//renderCuties will show the flatData on the page
characterDetails(flatData[0])
//getCharacters will retrieve the rest of the data on the page
addVotes()
//this will, you guessed it, add votes
})

function renderCuties(flatData){
    let characterBar = document.querySelector('#character-bar');
    //console.log(characterBar);
    flatData.forEach(item => {
        let characterBarItem = document.createElement('span');
        //console.log(characterBarItem);
        characterBarItem.textContent = item.name;
        characterBar.appendChild(characterBarItem)

        characterBarItem.addEventListener('click', () =>{
        characterDetails(item)
        })
    }) 

}

function characterDetails(character){
    currentDetails = character;
    //character allows us to zero in on each character details
    //console.log(currentDetails);
    //console.log(character.image);

    let characterImage = document.querySelector('#image');
    //console.log(characterImage)
    let characterName = document.querySelector('#name');
    //console.log(characterName);
    let characterVote = document.querySelector('#vote-count');
    //console.log(characterVote);

    characterImage.src = character.image;
    characterName.textContent = character.name;
    characterVote.textContent = character.votes;


}

function addVotes(){
    
    let addToVoteForm = document.querySelector('#votes-form')
    //this is targeting the votes form 
    addToVoteForm.addEventListener('submit', (event) => {
        event.preventDefault();
    currentDetails.votes += parseInt(event.target['votes'].value);
    //we targeted 'votes' because that's where the votes should go
    characterDetails(currentDetails);
    addToVoteForm.reset()
    //console.log(event.target['votes'].value)
    
    })
}