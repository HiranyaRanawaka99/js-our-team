
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'h',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
]

//MILLESTONE 1
console.log(team[0]);
console.log(team[1]);
console.log(team[2]);
console.log(team[3]);
console.log(team[4]);
console.log(team[5]);

//MILLESTONE 2 + BONUS 2


for (const member of team) {
    const cardsContainer = document.getElementById('cards-container');
    
    cardsContainer.innerHTML += `
    
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src='' alt=""> ${member.foto}
      <div class="card-body">
        <h5 class="card-title"> Member </h5>
        <p class="card-text">${member.nome} <br> ${member.ruolo}</p>
      </div>
    </div>
    
    `

}


