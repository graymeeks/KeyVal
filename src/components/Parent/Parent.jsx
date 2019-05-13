import React from 'react';
import styles from './Parent.scss';
import KeyValue from '../KeyValue';
import { Component } from 'react';

  
class Parent extends Component {
    constructor() {

        super();

        this.state = {  
            testList: [1, 2, 3, 4, 5],
            kvList: [{key:"", value:""}],
        };
    }

    handleChange = (e) => {
        if (["key", "value"].includes(e.target.className)) {
            let kvList = [...this.state.kvList]
            kvList[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ kvList })
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addKv = (e) => {
        this.setState((prevState) => ({
          kvList: [...prevState.kvList, {key:"", value:""}],

        }));
      }

    handleSubmit = (e) => { 
        console.log(this.state.kvList)
        e.preventDefault() 
        
    }
    

    render() { 
        let {kvList} = this.state;
        return  (

            <div data-test-hook="ParentPage" className={styles.parentComponent}>
               
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <h1>Parent Component</h1>
                    <img src="/src/assets/images/add.png" width="80" height="40" onClick={this.addKv}/>
                    <KeyValue kvList={kvList} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }


}
 
export default Parent;