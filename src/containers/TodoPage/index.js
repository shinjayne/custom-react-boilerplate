import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';


import { getStaged, makeGetKey, getFilteredList, getID } from './selectors';
import {updateStaged, addTodo, increaseK} from "./actions";

class TodoPage extends React.Component{
    render(){
        const {filteredList,ikey, staged } = this.props ;

        let listview = (<div></div>);
        listview = this.props.filteredList.map((v,k)=><li key={k}>{v}</li>).toList();

        return (
            <div>
                todo page
                <h2>input stage</h2>
                <input onChange={this.props.onChangeStaged} type="text"  placeholder="this is staged value" value={staged}/>
                <button onClick={this.props.onClickAdd(this.props.idkey ,staged)}>Click to add</button>
                <h2>filtered list</h2>
                <ul>
                {listview}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        onChangeStaged : (evt) => dispatch(updateStaged(evt.target.value)),
        onClickAdd : (key,content)=> (evt) => {dispatch(addTodo(key,content)); dispatch(increaseK());}
    }
}

const mapStateToProps = createStructuredSelector({

        staged : getStaged,
        filteredList: getFilteredList,
        idkey : getID
    });

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage) ;

