const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}