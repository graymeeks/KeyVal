import React from 'react';
import styles from './KeyValue.scss';
import Parent from '../Parent';

const KeyValue = (props) => {

  var my_list = props.testList;
  console.log('hi');
  console.log(my_list);

  return (

      props.kvList.map((v, i)=> {

        var condRend = true;
        let keyId = `key-${i}`, valueId = `value-${i}`
        let id = `${i}`

        if (condRend) {
          return (
            <div key={i} >

              <input 
                placeholder="Key"
                type="text"
                name={keyId}
                data-id={i}
                id={keyId}
                value={props.kvList.key}
                className="key"
              />

              <input
                placeholder="Value"
                type="text"
                name={valueId}
                data-id={i}
                id={valueId}
                value={props.kvList.value}
                className="value"
              />

            <img src="/src/assets/images/remove.png" width="20" height="20" onClick={condRend => false}/>
            </div>
          )
      }
      })

  )

}

export default KeyValue;
