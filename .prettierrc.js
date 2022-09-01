//.prettierrc.js

module.exports = {
	// 超过120就换行（默认80）
	printWidth: 120,
	// 每个tab相当于多少个空格（默认2）
	tabWidth: 4,
	// 是否使用tab进行缩进（默认false）
	useTabs: false,
	// 使用单引号（默认false）
	singleQuote: true,
	// 声明结尾使用分号(默认true)
	semi: false,
	// 多行使用拖尾逗号（默认none）
	trailingComma: 'es5',
	// 对象字面量的大括号间使用空格 (默认true)  true: { foo: bar } , false:{foo: bar}
	bracketSpacing: true,
	// 尽可能省略箭头函数参数的括号
	arrowParens: 'avoid',
	// 文件行位默认格式
	endOfLine: 'auto',
}
