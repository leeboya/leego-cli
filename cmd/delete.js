const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { listTable } = require(`${__dirname}/../utils`)
const chalk = require('chalk')

let tempList = require(`${__dirname}/../templates`)

const question = [
    {
        type: 'input',
        name: 'name',
        message: chalk.gray('Which template you want to delete（输入你想删除的模板名称）:'),
        validate(val) {
            if (tempList[val]) {
                return true
            } else if (val === '') {
                return chalk.yellow('Name is required!（模板名称是必须的）')
            } else if (!tempList[val]) {
                return chalk.yellow('This template doesn\'t exists（不存在此模板，请输入正确的模板名称）')
            }
        }
    }
]

module.exports = prompt(question).then(({ name }) => {
    delete tempList[name]

    writeFile(`${__dirname}/../templates.json`, JSON.stringify(tempList), 'utf-8', (err) => {
        if (err) {
            console.log(chalk.red(err))
        }
        listTable(tempList, 'Template has been deleted successfully!（模板删除成功！）')
    })
})
