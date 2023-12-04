import { /*MouseEvent,*/ useState } from "react";

// { items: [], heading: string }
interface ListGroupProps
{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps)
{
    const [selectedIndex, setSelectedIndex] = useState(-1); // arr[0] - variable like selectedIndex; arr[1] - updater function

    // use a function is useful when you need to pass different parameters in different scenarios
    const getMessage = () => 
    {
        return items.length === 0 ? <p>No item found...</p> : null;
    }

    // event handler
    //const handleClick = (event: MouseEvent) => console.log(`Clicked in ${item} (${index})`);
    //onst handleClick = (event: MouseEvent) => console.log(event);

    return (
    <>
        <h1>{heading}</h1>
        {getMessage()}
        <ul className="list-group">
            {items.map((item, index) => (
                <li 
                    className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
                    key={item} 
                    onClick={ () => 
                    {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }}
                >
                    { item }
                </li>
            ))}
        </ul>
    </>
    );
}

export default ListGroup;