import React, {Component} from 'react';

class Counter extends Component {
    state = {
        number: 0,
        fidxedNumber: 0
    };
    /*constructor(props) {
        super(props);
        this.state = { 
            number: 0,
            fidxedNumber: 0
        };
    }*/
    render() {
        const { number, fidxedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fidxedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            ()=> {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;