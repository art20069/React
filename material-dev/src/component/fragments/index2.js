import React from 'react'

function index2() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>test2</h2>
            <button onClick={count +1}>Add</button>
        </div>
    )
}

export default index2
