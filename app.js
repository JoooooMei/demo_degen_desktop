// const newListButton = document.querySelector('#new-list-button');
// const newItemButton = document.querySelector('#new-item-button');
// const newListForm = document.querySelector('#list-input');
// const newItemForm = document.querySelector('#item-input');

// // Vad som händer när man klickar på knappen "+ New List"
// newListButton.addEventListener('click', () => {
//   newListForm.style.display = 'block'; // Formuläret visas
//   newListForm.value = ''; // Imput value sätts till defaiult (Kanske inte nödvändigt??)
// });

// const list = [];
// // Vad som händer när man skapar ny lista via form
// newListForm.addEventListener('keydown', (e) => {
//   e.preventDefault();
//   const value = newListForm.value;

//   list.push(value);
//   console.log(list);
// });

// newItemButton.addEventListener('click', () => {
//   newItemForm.style.display = 'block';
//   newListForm.preventDefault(); // Detta skam ingte vara här!
//   newListForm.value = '';
// });

const newListButton = document.querySelector('#new-list-button');
const newItemButton = document.querySelector('#new-item-button');
const newListInput = document.querySelector('#list-input'); // Bytt till input
const newItemInput = document.querySelector('#item-input'); // Bytt till input

// Vad som händer när man klickar på knappen "+ New List"
newListButton.addEventListener('click', () => {
  newListInput.style.display = 'block'; // Visa inputfält
  newListInput.value = ''; // Rensa inputfältet
});

const list = [];

// När användaren trycker på Enter i inputfältet
newListInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Förhindra sidladdning
    const value = newListInput.value;

    if (value.trim() !== '') {
      list.push(value); // Lägg till värdet i listan
      console.log(list);
      newListInput.value = ''; // Nollställ inputfältet
      newListInput.style.display = 'none'; // Dölj input efter inmatning
    }
  }
});

// Klick på "+ New Item" knappen
newItemButton.addEventListener('click', () => {
  newItemInput.style.display = 'block'; // Visa item input
  newItemInput.value = ''; // Rensa item input
});
