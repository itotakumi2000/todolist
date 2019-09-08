import  React from "react"

export default class TodoItem extends React.Component {
	render() {
		const buttonText =  this.props.isDone?"戻す":"完了"
		// sample.isDone?"戻す":"完了"
		// 三項演算子

		return(
			<li>
				<p>タイトル: {this.props.title}</p>
				<p>詳細: {this.props.desc}</p>
				<button　onclick={this.props.buttonchange}>{buttonText}</button>
			</li>
		)
	}
}

// Reduxは倉庫に入れて、それから全て取り出す

// sample.desc

