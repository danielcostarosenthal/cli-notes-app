import fs from 'fs'
import path from 'path'
import { successMsg, errorMsg } from '../utils/utils.mjs'

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)

	if (duplicateNote) {
		errorMsg('Note title taken!')
	} else {
		notes.push({
			title: title,
			body: body
		})

		saveNotes(notes)
		successMsg('New note added!')
	}
}

const removeNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter((note) => note.title !== title)

	if (notes.length === notesToKeep.length) {
		errorMsg('Note title not found!')
	} else {
		saveNotes(notesToKeep)
		successMsg('Note removed!')
	}
}

const listNotes = () => {
	const notes = loadNotes()
	notes.forEach((note, idx) => {
		successMsg(`${idx + 1}: ${note.title}`)
	})
}

const readNote = (title) => {
	const notes = loadNotes()
	const note = notes.find((note) => note.title === title)

	if (note) {
		successMsg(`Title: ${note.title}`)
		successMsg(`Body: ${note.body}`)
	} else {
		errorMsg('Note title not found!')
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync(path.join('public', 'notes.json'), dataJSON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync(path.join('public', 'notes.json'))
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (err) {
		return []
	}
}

export { addNote, removeNote, listNotes, readNote }
