const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const { listTable } = require(`${__dirname}/../utils`)
const chalk = require('chalk')

let tempList = require(`${__dirname}/../templates`)

const question = [
    {
        type: 'input',
        name: 'name',
        message: chalk.gray('Set the custom name of the template（给模板设置一个优雅的名字吧）:'),
        validate(val) {
            if (tempList[val]) {
                return chalk.yellow('Template is existed!（模板已经存在，换个名称试试吧！）')
            } else if (val === '') {
                return 'Name is required!（模板名称是必须的哦！）'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'place',
        message: chalk.gray('Owner/name of the template（模板仓库地址）:'),
        validate(val) {
            if (val !== '') {
                return true
            }
            return chalk.yellow('Link is required!（地址是必须的哦！）')
        }
    },
    {
        type: 'input',
        name: 'branch',
        message: chalk.gray('Branch of the template（分支）:'),
        default: 'master'
    }
]

module.exports = prompt(question).then(({ name, place, branch }) => {
    tempList[name] = {}
    tempList[name]['owner/name'] = place
    tempList[name]['branch'] = branch

    writeFile(`${__dirname}/../templates.json`, JSON.stringify(tempList), 'utf-8', (err) => {
        if (err) {
            console.log(chalk.red(err))
        }
        listTable(tempList, 'New template has been added successfully!（新模板添加成功！）')
    })
})
