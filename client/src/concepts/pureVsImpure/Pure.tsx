

const Pure = ({data}:{data:string}) => {
    // Pure component - Render only when props or state is changed
  return (
    <>
        <h1>Pure</h1>
        <p>{data}</p>
    </>
  )
}

export default Pure