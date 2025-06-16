import { memo, useDeferredValue, useState } from "react";

const UsedeferredValue = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const deferredValue = useDeferredValue(searchQuery);

    return (
        <>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
            />
            <SlowList text={deferredValue} />
        </>
    );
};

const SlowList = memo(function SlowList({ text }: any) {

    let items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }

    return (
        <ul className="items">
            {items}
        </ul>
    );
});

function SlowItem({ text }: any) {
    let startTime = performance.now();
    while (performance.now() - startTime < 3) {
    }

    return (
        <li className="item">
            Text: {text}
        </li>
    )
}

export default UsedeferredValue;
