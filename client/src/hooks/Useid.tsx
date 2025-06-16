import { useId } from 'react'

//assign unique id to each element
const UseId = () => {
    const id = useId()
    return <div>Useid : {id}</div>
}

const Useid = () => {

    return (<>
        {[1, 2, 3, 4, 5].map((item) => <UseId key={item} />)}
    </>)
}

export default Useid