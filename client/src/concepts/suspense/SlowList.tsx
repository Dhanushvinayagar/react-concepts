import { memo } from "react";

const SlowList = memo(function SlowList() {

    let items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={i} />);
    }

    return (
        <ul className="items">
            {items}
        </ul>
    );
});

function SlowItem({ text }: any) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
    }

    return (
        <li className="item">
            Text: {text}
        </li>
    )
}

export default SlowList