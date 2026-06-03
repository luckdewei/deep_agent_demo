import { createSandbox } from './sandbox.js'

const sandbox = createSandbox({
    workspacePath: process.cwd(), // 当前目录
    outputDir: 'output'
})

// 写入根目录
sandbox.writeFile('note.md', '# 笔记')

// 写入子目录
sandbox.writeFile('reports/2026/report.md', '# 报告')

// 越界写入
sandbox.writeFile('../../package.json', 'hhhh')




