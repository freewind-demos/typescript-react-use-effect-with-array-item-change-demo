import React, {useEffect, useState} from 'react'
import cloneDeep from 'lodash/cloneDeep';

export default function Hello() {

  const [data, setData] = useState([
    {name: 'typescript'}
  ])

  useEffect(() => {
    console.log('### data is changed', data);
  }, [data])

  return <div>
    <h1>Hello React</h1>
    <input type='text' defaultValue={data[0].name} onChange={event => {
      const value = event.target.value;
      // FIXME change object directly doesn't trigger useEffect
      data[0].name = value
      setData(cloneDeep(data));
    }}/>
  </div>
};
