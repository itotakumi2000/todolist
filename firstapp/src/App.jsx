import React from "react"

import Form from "./Form"
import TodoList from "./TodoList"

import styled from "styled-components"

const Container = styled.div`
	background-color: lightgreen;
`


// コンポーネント
// React.Componentの継承
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: [
				{
					title: "課題をやる！",
					desc: "testttdfghjkjhnbgfghjhgfg",
					isDone: false
				},
				{
					title: "課題をやる！",
					desc: "testttdfghjkjhnbgfghjhgfg",
					isDone: false
				}
			]
		}
	}
	handleSubmit(e){
		e.preventDefault()
		// 発生元の挙動をキャンセル、更新しなくなる

		// stateを書き換える処理
		// ①まずフォームに入力されたデータを取得する
		// const title = this.title.value(注：thisではイベントの発生元を参照できない！)
		const title = e.target.title.value
		// e.targetでFormを取得できる、targetはイベントの呼ぶだし元をさす
		// （e.targetでイベントの発生元（ここではform要素）を取得する）

		const desc = e.target.desc.value


		// 直接stateを書き換えない！
		// this.state.todos.push({
		// 	id: 3,
		// 	title: title,
		// 	desc: desc,
		// 	isDone: false
		// }) 

		// stateのtodosを取得してnewTodosにいれている
		// todosをコピーする（sliceを使って）
		// slice(3)は3つめ以降コピー、slice()はすべてコピー
		const newTodos = this.state.todos.slice()
		// thisは実行の呼び出し元を参照するため、Formコンポーネントを参照してしまう
		newTodos.push({
			title: title,
			desc: desc,
			isDone: false
		})
		
		// ②stateのtodosに、入力されたデータを追加する
		// 再レンダリングを行うために、必ずsetStateを使用する
		this.setState({
			// 新しいstateの内容を記述する
			todos: newTodos
		})
		// setStateを使うと、stateが更新されたことが各コンポーネントに伝わるため必ず使う

	}

	//以下のように、todosの何番目のtodoなのか、特定するためにkeyを引数で受け取りましょう。
	buttonChange(key){
		
		const newTodos = this.state.todos.slice()
		// const clickedTodo = newTodos[key] このように特定したい。
		if(this.state.todos.isDone = false){
			newTodos.isDone = true //このnewTodosはtodoの配列です。isDoneプロパティは持っていません。
			this.setState({
				todos:newTodos
			})
		}else {
			newTodos.isDone = false
			this.setState({
				todos:newTodos
			})
		}

	}
	render() {
		return(
		// divを使いたくない場合React.Fragmentを使う
			<Container>
				<Form hundleSubmit={this.handleSubmit.bind(this)}></Form>
				{/* thisはFormになってしまうため、bindでAppにする */}
				{/* この文脈でのthis（app）にthisを固定する */}

				{/* TodoListに、hahahatodosという名前で、=の後に指定したデータを送る(propsを経由して) */}
				<TodoList hahahatodos={this.state.todos} buttonchange={this.buttonChange.bind(this)}></TodoList>
			</Container>
		)
	}
}

export default App

// Formでappのstateを書き換えられない場合はイベントをFormで書いて、関数はappに記述、その関数をFormにpropsでFormに渡せばいい


// -------sample---------

/* <form>
	<input name="sample">
</form> */

// form.sampleでDOMが取得できる（FormのDOMを取得してから）


// dom.addEventListener("click", function(e){

// })
// 仮引数はイベントの様々な情報を取得できる

// ------------------------
// function hello() {
// 	return this.name
// }

// window.hello()
// ⇨.がないときはwinodwオブジェクト（グローバル）を参照

// var name = "たけみつ"

// const Beppu = {
// 	name: "べっぷ",
// 	hello: hello
// }

// Beppu.hello()
// べっぷがreturnされる

// const Tanoue = {
// 	name: "たのうえ"
// }

// Beppu.hello.call(Tanoue)
// ⇨"たのうえ"

// Beppu.hello.bind(Tanoue)
// bindはthisを固定するが、実行はしない

// Beppu.hello.bind(this)
// console.log(this)
// たけみつがなければundefined
// たけみつがかえされる



// --------------
// URLは見かけ上の名前
// method GET or POST

// a

