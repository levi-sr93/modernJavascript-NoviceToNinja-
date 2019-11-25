const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2"> Delete </button>
        </li>
    `;

    list.innerHTML += html;

}

//GET documents one time (need to refresh)

// db.collection('recipes').get().then(snapshot => {
//     //when we have the data/response
//     snapshot.docs.forEach(doc => {
//         addRecipe(doc.data(), doc.id);
//     })
// }).catch(err => {
//     console.log(err)
// })

//Deleting Recipe in the template
const deleteRecipe = id => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    })
}

//GET documents - Real Time listeners
const unsub = db.collection('recipes').onSnapshot( snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id)
        } else if(change.type === 'removed'){
            deleteRecipe(doc.id)
        }
    })
})

//ADD Documents
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(recipe).then(() => {
        console.log('Recipe added');
    }).catch(err => {
        console.log(err)
    })
})

//DELETING documents
list.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON"){
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('Recipe deleted')
        });
    }
})


//unsub from database changes 
button.addEventListener('click', () => {
    unsub();
    console.log('Unsubscribed from collection changes');
})