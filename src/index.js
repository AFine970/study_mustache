import parseTemplateTokens from './parseTemplateTokens'
import renderTemplate from './renderTemplate'

const myTemplateEngine = {
    render(templateStr, data) {
        const tokens = parseTemplateTokens(templateStr)
        console.log('tokens', tokens)

        const domStr = renderTemplate(tokens, data)
        console.log('domStr', domStr)

        let container = document.getElementById('container')
        container.innerHTML = domStr // 上树
        container = null
    }
}

// 测试用例一
// const templateStr = '今天开始学习{{thing}}，我好{{mood}}啊'
// const data = {
//     thing: 'mustache',
//     mood: '开心'
// }


// 测试用例二
// const templateStr = `
//     <div>
//         <ol>
//             {{#students}}
//             <li class="students">
//                 学生{{.}}
//             </li>
//             {{/students}}
//         </ol>
//     </div>
// `
// const data = {
//     students: ['小明', '小强', '小王']
// }


// 测试用例三
// const templateStr = `
//     <div>
//         <ol>
//             {{#students}}
//             <li class="hobbies">
//                 学生{{name}}的爱好
//                 <ol>
//                     {{#hobbies}}
//                     <li>{{.}}</li>
//                     {{/hobbies}}
//                 </ol>
//             </li>
//             {{/students}}
//         </ol>
//     </div>
// `
// const data = {
//     students: [
//         {name: '小明', hobbies: ['游戏', '打球']},
//         {name: '小强', hobbies: ['吃饭', '睡觉']},
//         {name: '小王', hobbies: ['打豆豆', '游泳']}
//     ]
// }


// -----------------------------
// 增加循环的对象是对象

// 测试用例四
// const templateStr = `
//     <div>
//         <ol>
//             {{#hobbies}}
//             <div class="hobbies">
//                 <li>{{one}}</li>
//                 <li>{{two}}</li>
//             </div>
//             {{/students}}
//         </ol>
//     </div>
// `
// const data = {
//     hobbies: { one: '游戏', two: '打球' }
// }


// 测试用例五
const templateStr = `
    <div>
        <ol>
            {{#students}}
            <li class="hobbies">
                学生{{name}}的爱好
                <ol>
                    {{#hobbies}}
                    <li>{{one}}</li>
                    <li>{{two}}</li>
                    {{/hobbies}}
                </ol>
            </li>
            {{/students}}
        </ol>
    </div>
`
const data = {
    students: [
        {name: '小明', hobbies: { one: '游戏', two: '打球' }},
        {name: '小强', hobbies: { one: '游戏', two: '打球' }},
        {name: '小王', hobbies: { one: '游戏', two: '打球' }}
    ]
    
}

// 执行
myTemplateEngine.render(templateStr, data)