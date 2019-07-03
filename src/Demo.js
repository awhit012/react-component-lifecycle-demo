import React from 'react';

class Demo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {someState: 0}
		console.log(`constructor method fired for ${this.props.id}!`)
	}

	componentWillMount() {
		console.log(`componentWillMount method fired for ${this.props.id}!`)
	}

	componentDidMount() {
		console.log(`componentDidMount method fired for ${this.props.id}!`)
  }

  shouldComponentUpdate() {
		console.log(`shouldComponentUpdate method fired for ${this.props.id}!`)
		return this.props.update
  }

  componentWillUpdate() {
		console.log(`componentWillUpdate method fired for ${this.props.id}!`)
  }

  componentDidUpdate() {
  	console.log(`componentDidUpdate method fired for ${this.props.id}!`)
  }

  handleClick = () => {
  	this.setState({
  		someState: this.state.someState + 1
  	})
  }

	render() {
		console.log(`render method fired for ${this.props.id}!`)

		return <button onClick={this.handleClick}>{this.props.id}: THE CIRCLE OF LIFE: {this.state.someState}</button>
	}
}

export default Demo