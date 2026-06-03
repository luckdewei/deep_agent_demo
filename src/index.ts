import { loadSkills, buildSkillsPrompt } from './skill-loader.js'

const skills = loadSkills('.hi/skills')
console.log(`[Agent] 加载了 ${skills.length} 个技能`)
// console.log(skills)
console.log(buildSkillsPrompt(skills))