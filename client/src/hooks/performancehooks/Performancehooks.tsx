import { memo, useCallback, useMemo, useState } from "react";


// memo is used to memoize the component props value
const ListItem = memo(({ item, onClick }: any) => {
    console.log('Rendering:', item);
    return <li onClick={() => onClick(item)}>{item}</li>;
});

const Performancehooks = () => {

    const [count, setCount] = useState(0);
    const [items] = useState(['Item 1', 'Item 2', 'Item 3']);

    // though we wrap this function in memo unless we use useCallback it will be rendered again and again due to fn reference change
    const handleClick = useCallback((item: any) => {
        console.log('Item clicked:', item);
    }, []); 

    //used to memoize the expensive calculation in derived state
    const expensiveCalculation = useMemo(() => {
        console.log('Expensive Calculation...');
        return items.length * 2;
    }, [items]);

    return (
        <div>
            <h2>Expensive calculation result: {expensiveCalculation}</h2>
            <ul>
                {items.map((item) => (
                    <ListItem key={item} item={item} onClick={handleClick} />
                ))}
            </ul>

                {/* count has no relation with expensiveCalculation and listItem 
                unless we use usememo expensiveCalculation will be calculated again and again
                unless we use useCallback it will be rendered again and again due to fn reference change
                */}
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
}

export default Performancehooks