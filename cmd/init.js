const { prompt } = require('inquirer')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

let tempList = require(`${__dirname}/../templates`)

const question = [
    {
        type: 'input',
        name: 'name',
        message: chalk.gray('Template name（模板名称）:'),
        validate(val) {
            if (tempList[val]) {
                return true
            } else if (val === '') {
                return chalk.yellow('Name is required!（模板名是必须的）')
            } else if (!tempList[val]) {
                return chalk.yellow('This template doesn\'t exists（不存在这个模板，请输入正确的模板）')
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: chalk.gray('Project name（项目名称）:'),
        validate(val) {
            if (val !== '') {
                return true
            }
            return chalk.yellow('Project name is required!（项目名称是必须的哦！）')
        }
    },
    {
        type: 'input',
        name: 'place',
        message: chalk.gray('Where to init the project（指定一个初始化模板路径，默认在当前目录下）:'),
        default: './temp'
    }
]

module.exports = prompt(question).then(({ name, project, place }) => {
    const gitPlace = tempList[name]['owner/name']
    const gitBranch = tempList[name]['branch']
    const spinner = ora('Downloading template（下载模板中）...')

    spinner.start()

    download(`${gitPlace}#${gitBranch}`, `${place}/${project}`, (err) => {
        if (err) {
            console.log(chalk.red(err))
            process.exit()
        }
        spinner.stop()
        console.log(chalk.green('\u2714 New project has been initialized successfully!（新项目已经初始化下载完毕！）'))
    })
})
