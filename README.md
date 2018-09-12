![leego-cli Logo](./logo.png)

# leego-cli
A simple CLI for creating your web projects / Front End Env.

# Installation
```
npm install leego-cli -g
```

# Usage
Open your terminal and type `leego` or `leego -h` , you'll see the help infomation below:
```
  Usage: leego <command>

Options:

  -V, --version  output the version number
  -h, --help     output usage information

Commands:

  add|a          Add a new template（添加一个新的模板）
  list|l         List all the templates（列出所有模板）
  init|i         Generate a new project（初始化生成一个新的项目）
  delete|d       Delete a template（删除一个模板）
  map|m          Place files to diffirent position（替换文件到不同位置）
```

# Commands
### add | a

```
$ leego add

? Set the custom name of the template（给模板设置一个优雅的名字吧）: test
? Owner/name of the template（模板仓库地址）: simple-template
? Branch of the template（分支）: master
┌───────────────┬─────────────────┬────────┐
│ Template Name │ Owner/Name      │ Branch │
├───────────────┼─────────────────┼────────┤
│ test          │ simple-template │ master │
└───────────────┴─────────────────┴────────┘
✔ New template has been added successfully!（新模板添加成功！）

```

### list | l
Show templates list.
```
$ leego list

┌───────────────┬─────────────────┬────────┐
│ Template Name │ Owner/Name      │ Branch │
├───────────────┼─────────────────┼────────┤
│ test          │ simple-template │ master │
└───────────────┴─────────────────┴────────┘

```

### init | i
Generate your own project by template.
```
$ leego init

? Template name（模板名称）: test
? Project name（项目名称）: simpleTemp
? Where to init the project（指定一个初始化模板路径，默认在当前目录下）: ./temp
/ Downloading template（下载模板中）...
New project has been initialized successfully（新项目已经初始化下载完毕！）!
```

### delete | d
Delete a template
```
$ leego delete

? Which template you want to delete（输入你想删除的模板名称）: test
┌───────────────┬────────────┬────────┐
│ Template Name │ Owner/Name │ Branch │
└───────────────┴────────────┴────────┘
✔ Template has been deleted successfully!（模板删除成功！）
```

# Template
Such like https://github.com/leeboya/simple-template

Create your own templates repository.

# License
MIT









