const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

const textHeader = document.querySelectorAll('.item h2');
const totalElement = document.querySelectorAll(`.item ul`);

for (let i = 0; i < textHeader.length; i += 1) {
    console.log(`Category: ${textHeader[i].textContent}`);
    console.log(`Elements: ${totalElement[i].children.length}`);
};