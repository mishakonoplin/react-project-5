import React from "react";
import Item from "./Item.js";

export default function ItemList(props) {
    const { items, onRemoveItem } = props
    const list = items.map((item) => (
        <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button className="item-button" onClick={() => onRemoveItem(item)}>
                Удалить
            </button>
        </li>));

    return (
        <>

            {items.length !== 0 ? (
                <ul className="ui-list">{list}</ul>
            ) : (
                <div>
                    <p className="ui-title">Добавьте первый товар</p>
                </div>
            )}
        </>
    );
}