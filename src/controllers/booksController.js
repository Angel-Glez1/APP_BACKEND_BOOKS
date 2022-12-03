


const books = [
    { id: 1, name: 'Harry Potter' },
    { id: 2, name: 'Sin miedo a la verda' },
    { id: 3, name: 'Ingles para tontos' }
]



const findAllBooks = () =>  new Promise((resolve, reject) => resolve(books));



module.exports = {
    findAllBooks
}
