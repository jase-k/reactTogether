import { useState } from "react"

function PersonCard(props){
    let {firstName, lastName, age: propsAge, hairColor} = props
    const [age, setAge] = useState(propsAge)
    function handleClick(){
        setAge(age + 1)
    }
    return(
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday Button</button>
        </div>
    )
}
export default PersonCard