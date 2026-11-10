

const EventReference = () => {
    const handleClick = () => {
        console.log('Clicked')
    }

    const handleClickEvent = (e: any) => {
        console.log(e)
    }

    const handleClickWithArgs = (id: number) => {
        console.log(id)
    }
  return (
    <>
        {/* Correct approach - without args */}
        <button onClick={handleClick}>Click</button>
        <button onClick={() => handleClick()}>Click</button>

        {/* Correct approach - with args */}
        <button onClick={(e) => handleClickEvent(e)}>Click</button>
        <button onClick={() => handleClickWithArgs(1)}>Click</button>
        

        {/* Wrong approach - will cause infinite loop if setState is called in handleClick*/}
        {/* <button onClick={handleClick()}>Click</button> */}


    </>
  )
}

export default EventReference