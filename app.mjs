import yargs from 'yargs'
import { addNote, removeNote, listNotes, readNote } from './src/notes.mjs'

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		addNote(argv.title, argv.body)
	}
})

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		removeNote(argv.title)
	}
})

// Create list command
yargs.command({
	command: 'list',
	describe: 'List out all notes',
	handler() {
		listNotes()
	}
})

// Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		readNote(argv.title)
	}
})

yargs.parse()
