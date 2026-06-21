const elements = document.querySelectorAll('.item');
console.log(`Number of categories: ${elements.length}`);
elements.forEach(element => {
    const title = element.querySelector('h2').textContent;
    const items = element.querySelectorAll('li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);
});