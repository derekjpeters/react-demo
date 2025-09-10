import { Component } from "react";

let renderCount = 0;

export default class LifeCycleDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);

        console.log("%cLifeCycleDemo - Constructor", "font-weight:bold")
        console.log("LifeCycleDemo - Initial Props", props);
        console.log("LifeCycleDemo - initial state:", this.state);

    }

    handleClick() {
        console.log("LifeCycleDemo - handleClick > SetState(+1)")
        this.setState((s) => ({clicks: s.clicks + 1}));
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("LifeCycleDemo - getDerivedStateFromProps with hook")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleDemo - The component did Mount")
        console.log("LifeCycleDemo - DOM is ready, good place to fetch/timers/subscriptions")
    }

    shouldComponentUpdate(nextProps, nextState) {
        const should = true;
        console.log("LifeCycleDemo - Should Component Update", { nextProps, nextState, should})
        return should;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleDemo - getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.clicks !== this.state.clicks) {
            console.log (`LifeCycleDemo clicks: ${prevState.clicks} - ${this.state.clicks}`);
        }
        if (prevProps.title !== this.props.title) {
            console.log(`LifeCycleDemo title: "${prevProps.title}" - "${this.props.title}"`);
        }
    }
    
    componentWillUnmount() {
        console.log("LifeCycleDemo componentWillUnmount")
    }

    render() {
        renderCount += 1;
        console.log(`LifeCycleDemo render #${renderCount}`)
        console.log("LifeCycleDemo current state in render", this.state);
        console.log("LifeCycleDemo current props in render", this.props);

        return(
            <div style={{ padding: "1rem", border: "1px solid #333", borderRadius: 8}}>
                <h3>{this.props.title}</h3>
                <p>Clicks: {this.state.clicks}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }


}