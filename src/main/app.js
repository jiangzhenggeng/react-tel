/**
 * Created by jiangzg on 2017/5/10.
 */

import React,{Component} from 'react';

import Header from '../component/Header';
import '../style/less/main.less';

const style = {
    backgroundColor:'green'
};

class App extends Component{

    render(){
        return (
            <div style={style}>
                <Header/>
            </div>
        );
    }

}

export default App;