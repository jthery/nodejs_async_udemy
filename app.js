console.log('début')
getMember((member) => {
    console.log(member)
})
console.log('fin')


function getMember() {
    setTimeout(() => {
        return 'Member 1'
    }, 1500)
}

// 3 paterns pour l'ASYNCHRONE
// Callbacks
// Promise
// Async / Await (nouvelle manière de gére l'asynchrone dans l'ES6)