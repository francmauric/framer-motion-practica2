import { useState } from "react";
import { motion, Reorder} from "framer-motion";

const initialItems = ["Item 2", "Item 1", "Item 5", "Item 3", "Item 4"];

function DraggableList ( ) {
    const [items, setItems] = useState(initialItems);

    return (
        <Reorder.Group axis="y" values={items} onReorder={setItems} className="p-10">
            <h1 className="text-2xl pb-10 font-bold ">ARRASTRAR PARA ORDENAR</h1>
            {items.map((item) => (
                <Reorder.Item key={item} value={item} className="p-4 mb-2 bg-blue-500 text-white rounded cursor-pointer">
                    {item}
                </Reorder.Item>
            ))}
        </Reorder.Group>
    )
}

export default DraggableList;