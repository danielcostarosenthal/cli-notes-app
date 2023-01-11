import chalk from 'chalk'

const successMsg = (txt) => {
	return console.log(chalk.green.italic.bold(txt))
}

const errorMsg = (txt) => {
	return console.log(chalk.red.italic.bold(txt))
}

export { successMsg, errorMsg }
