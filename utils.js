const Table = require('cli-table')
const chalk = require('chalk')

const table = new Table({
    head: ['Template Name', 'Owner/Name', 'Branch'],
    style: {
        head: ['blue']
    }
})

function listTable(tempList, lyric) {
    const list = Object.keys(tempList)
    if (list.length) {
        list.forEach((key) => {
            table.push([key, tempList[key]['owner/name'], tempList[key]['branch']])
            if (table.length === list.length) {
                console.log(table.toString())
                if (lyric) {
                    console.log(chalk.green(`\u2714 ${lyric}`))
                }
                process.exit(0)
            }
        })
    } else {
        console.log(table.toString())
        if (lyric) {
            console.log(chalk.green(`\u2714 ${lyric}`))
        }
        process.exit(0)
    }
}

exports.listTable = listTable
