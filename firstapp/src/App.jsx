import React from "react"

import Form from "./Form"
import TodoList from "./TodoList"

import styled from "styled-components"

import image from "./corkboard.jpg"

const Container = styled.div`
	width: 800px;
	margin: 0 auto;
	text-align: center;
	padding: 30px 60px;
	background-image: url(${image});
`

const Subject = styled.h1`
	font-family: 'Courier';
	font-weight: normal;
	font-size: 50px;
	margin: 0;
	margin-bottom: 10px;
`


// コンポーネント
// React.Componentの継承
class App extends React.Component {
	constructor() {
		super()
		this.state = {
			todos: []
		}
	}

	componentDidMount() {
		this.fetchResponse()
	}

	handleSubmit(e) {
		e.preventDefault()
		// 発生元の挙動をキャンセル、更新しなくなる

		// stateを書き換える処理
		// ①まずフォームに入力されたデータを取得する
		// const title = this.title.value(注：thisではイベントの発生元を参照できない！)
		const title = e.target.title.value
		// e.targetでFormを取得できる、targetはイベントの呼ぶだし元をさす
		// （e.targetでイベントの発生元（ここではform要素）を取得する）

		const desc = e.target.desc.value
		e.persist()

		fetch("http://localhost:3001/api/todos", {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				title: title,
				desc: desc,
				isDone: false  //サーバー側の処理による
			})

		}).then(() => {
			// todo全てを更新
			e.target.title.value = ""
			e.target.desc.value = ""
			this.fetchResponse()
		})

		// // 直接stateを書き換えない！
		// // this.state.todos.push({
		// // 	id: 3,
		// // 	title: title,
		// // 	desc: desc,
		// // 	isDone: false
		// // }) 

		// // stateのtodosを取得してnewTodosにいれている
		// // todosをコピーする（sliceを使って）
		// // slice(3)は3つめ以降コピー、slice()はすべてコピー
		// const newTodos = this.state.todos.slice()
		// // thisは実行の呼び出し元を参照するため、Formコンポーネントを参照してしまう
		// newTodos.push({
		// 	title: title,
		// 	desc: desc,
		// 	isDone: false
		// })

		// // ②stateのtodosに、入力されたデータを追加する
		// // 再レンダリングを行うために、必ずsetStateを使用する
		// this.setState({
		// 	// 新しいstateの内容を記述する
		// 	todos: newTodos
		// })
		// // setStateを使うと、stateが更新されたことが各コンポーネントに伝わるため必ず使う


	}

	//以下のように、todosの何番目のtodoなのか、特定するためにkeyを引数で受け取りましょう。
	buttonChange(key, title, desc, isDone) {

		// let newTodos = this.state.todos.slice()
		// // const clickedTodo = newTodos[key] このように特定したい。
		// newTodos[key].isDone = !newTodos[key].isDone

		// this.setState({
		// 	todos: newTodos
		// })

		fetch("http://localhost:3001/api/todos/" + key, {
			method: "PUT",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				title: title,
				desc: desc,
				isDone: !isDone
			})

		}).then(() => {
			this.fetchResponse()
		})

	}


	buttonDelete(key) {
		fetch("http://localhost:3001/api/todos/" + key, {
			method: "delete"
		}).then(() => {
			// todo全てを更新
			this.fetchResponse()
		})
	}

	editComplete(e, key, isDone) {
		e.preventDefault()
		const title = e.target.title.value
		console.log(title)
		const desc = e.target.desc.value

		fetch("http://localhost:3001/api/todos/" + key, {
			method: "PUT",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				title: title,
				desc: desc,
				isDone: isDone
			})

		})

	}

	fetchResponse() {
		fetch("http://localhost:3001/api/todos")
			.then(res => res.json())
			.then(res => {
				// このresは上のres.jsonが入っている
				this.setState({
					todos: res
				})
			}).then(() => {
				this.fetchResponse()
			})
	}


	render() {
		return (
			// divを使いたくない場合React.Fragmentを使う
			<Container>
				<Subject>Todo List</Subject>
				<Form hundleSubmit={this.handleSubmit.bind(this)}></Form>
				{/* thisはFormになってしまうため、bindでAppにする */}
				{/* この文脈でのthis（app）にthisを固定する */}

				{/* TodoListに、hahahatodosという名前で、=の後に指定したデータを送る(propsを経由して) */}
				<TodoList todos={this.state.todos} buttonChange={this.buttonChange.bind(this)} buttonDelete={this.buttonDelete.bind(this)}></TodoList>
			</Container >
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

