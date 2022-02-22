import React from "react";

class ClassCount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrimet = this.incrimet.bind(this)
        this.dicriment = this.dicriment.bind(this)
    }
    incrimet() {
        this.setState({ count: this.state.count += 1 })
    }
    dicriment() {
        this.setState({ count: this.state.count -= 1 })
    }
    render() {
        return (
            <>
                <h1>{this.state.count}</h1>

                <button onClick={this.incrimet}>Incrimet</button>
                <button onClick={this.dicriment}>Dicriment</button>
            </>
        )
    }
}
export default ClassCount