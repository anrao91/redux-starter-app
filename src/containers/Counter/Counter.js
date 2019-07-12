import React, { Component } from "react";
import { connect } from "react-redux";
// connect is not really Higher Order Component but a function which returns a function

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import * as ActionCreators from "../../store/Actions/actions";

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = (action, value) => {
        switch (action) {
            case "inc":
                this.setState(prevState => {
                    return { counter: prevState.counter + 1 };
                });
                break;
            case "dec":
                this.setState(prevState => {
                    return { counter: prevState.counter - 1 };
                });
                break;
            case "add":
                this.setState(prevState => {
                    return { counter: prevState.counter + value };
                });
                break;
            case "sub":
                this.setState(prevState => {
                    return { counter: prevState.counter - value };
                });
                break;
            default:
                break;
        }
    };
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl
                    label="Increment"
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl
                    label="Decrement"
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl
                    label="Add 5"
                    clicked={this.props.onAddCounter}
                />
                <CounterControl
                    label="Subtract 5"
                    clicked={() => this.props.onSubtractCounter(5)}
                />
                <hr />
                <button
                    onClick={() => this.props.onStoreResult(this.props.ctr)}
                >
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map(strResult => {
                        return (
                            <li
                                key={strResult.id}
                                onClick={() =>
                                    this.props.onDeleteResult(strResult.id)
                                }
                            >
                                {strResult.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
// Because Redux Store's updated state values should be accessed in any component as props
// We mention here which state values from Redux Store do we need in our component
// This mapStateToProps is a function - which takes redux store state and returns a Javascript object which is a map of prop names and slices of state stored in React Redux Store.
// Prop names are completely up to our choice.
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter, //Here state => Global state managed by redux
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(ActionCreators.increment()),
        onDecrementCounter: () => dispatch(ActionCreators.decrement()),
        onAddCounter: () => dispatch(ActionCreators.add()),
        onSubtractCounter: val => dispatch(ActionCreators.subtract(val)),
        onStoreResult: res => dispatch(ActionCreators.storeResult(res)),
        onDeleteResult: id => dispatch(ActionCreators.deleteResult(id))
    };
};

// This is the way of Subscribing to the Redux Store
// connect passes the props such as ctr here inside the Counter Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
