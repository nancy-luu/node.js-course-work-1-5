const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // if (duplicateNotes.length === 0) 
    if (!duplicateNote) {
        notes.push({ 
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bold.green.inverse('New note added!'))
    } else {
        console.log(chalk.bold.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const keepNotes = notes.filter((note) => note.title !== title)

    if (notes.length > keepNotes.length) {
        console.log(chalk.bold.green.inverse('Removed: ' + title))
        saveNotes(keepNotes)
    } else {
        console.log(chalk.bold.red.inverse('Note not found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    console.log(chalk.bold.blue.inverse('Your notes:'))
    // console.log(notes.forEach((note) => console.log(note.title)))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const foundNote = notes.find((note) => note.title === title)

    if (foundNote) {
        console.log(chalk.bold.inverse(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.bold.red('Unable to find note!'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}