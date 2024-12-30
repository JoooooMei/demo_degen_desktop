const newListButton = document.querySelector('#new-list-button');
const newItemButton = document.querySelector('#new-item-button');
const newListInput = document.querySelector('#list-input');
const newItemInput = document.querySelector('#item-input');

// Vad som händer när man klickar på knappen "+ New List"
newListButton.addEventListener('click', () => {
  newListInput.style.display = 'block'; // Visa inputfält
  newListInput.value = ''; // Rensa inputfältet
});

// Vad som händer när man klickar på knappen "+ New item"
newItemButton.addEventListener('click', () => {
  newItemInput.style.display = 'block'; // Visa item input
  newItemInput.value = ''; // Rensa item input
});

// Kod nedan får nog skrivas om. Listan ska hålla objekt eller listor
const list = [];

// När användaren trycker på Enter i inputfältet
newListInput.addEventListener('keydown', (e) => {
  // Keydown = valfri tangent trycks
  if (e.key === 'Enter') {
    // Om tangenten är enter
    e.preventDefault(); // Förhindra at formuläret försöker skickas / sidan läses in igen
    const value = newListInput.value;

    if (value.trim() !== '') {
      // Kontrollerar så input inte är tom. Kanske lite bakväd undantagshantering men jag tyckte det var smart.
      // Dock får man ingen feedbak på vad man gjort fel men jag tycker det är överflödigt här.
      list.push(value); // Lägg till värdet i listan
      newListInput.value = ''; // Nollställ inputfältet (Kanske onödigt?)
      newListInput.style.display = 'none'; // Dölj input-fältet efter inmatning
    }
  }
});
