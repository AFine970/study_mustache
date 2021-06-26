import parseTemplateTokens from './parseTemplateTokens'

const myTemplateEngine = {
    render(templateStr, data) {
        const tokens = parseTemplateTokens(templateStr)
        console.log('tokens', tokens)
    }
}

// 测试用例一
// const templateStr = '今天开始学习{{thing}}，我好{{mood}}啊'

// 测试用例二
const templateStr = `
    <div>
        <ol>
            {{#students}}
            <li>
                学生{{item.name}}的爱好
                <ol>
                    {{#item.hobbies}}
                    <li>{{.}}</li>
                    {{/item.hobbies}}
                </ol>
            </li>
            {{/students}}
        </ol>
    </div>
`
const data = {}

myTemplateEngine.render(templateStr, data)