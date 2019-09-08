import  React from "react"

import TodoItem from "./TodoItem"

export default class TodoList extends React.Component {
	render() {
		const todos = this.props.hahahatodos.map((todo, i)=>{
			// 一意（unique）なキー（i）を用意する
			return (
				<TodoItem 
					key={i}
					title={todo.title}
					desc={todo.desc}
					isDone={this.props.buttonchange}
				/>
			)
		})


		return(
			<ul>
				{todos}
			</ul>
		)
	}
}


{/* const arr = [1,2,3,4] */}

// const arr = [
// 	{one: 1, two: 2, three: 3},
// 	{four: 4, five: 5, six: 6}
// ]

// const newarr = arr.map(function(nums, i){
// 	return num*num
//  return nums.two
// })
// mapは仮引数を１つはとる、第一引数は関数

// [1, 4, 9, 16]

// もとの配列をいじるのではなく、新しい配列を返す