import Parent from './Parent'
import Child from './Child'


const Compose = () => {
  return (
    // Parent can be used as a template that accept n number of children element
    <Parent>
        <Child text="Compose1" />
        <Child text="Compose2" />
    </Parent>
  )
}

export default Compose