import React from "react";

class App4 extends React.Component {

    state = {
        count: 0,
    };

    add = () => {

        console.log('add');
        this.setState(cnt1 => ({count: cnt1.count+1}));
    };

    minus = () => {
        this.setState(cnt1 => ( {count: cnt1.count-1}));
    };

    componentDidMount(){
        console.log('2.did 마운트 -> 컴포넌트 렌더링');
    }

    componentDidUpdate(){
        console.log('3.did 업데이트 -> 화면 업데이트');
    }

    componentWillUnmount() {
        console.log('4.did Un마운트 -> 화면 떠날때');
    }

    render(){
        console.log('1.화면 그리기 렌더링~~!');
        return(
            <div>
                <h1>현재 카운터 : {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App4;