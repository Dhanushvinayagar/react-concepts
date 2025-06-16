import { memo } from "react";

const Child = ({ onSearch }: any) => {

    console.log("ChildComponent rendered");
    return <input type="text" onChange={(e) => onSearch(e.target.value)} />

}

export default memo(Child)
// mem is used to memorize the props value passed to the component