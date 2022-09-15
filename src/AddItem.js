import React from "react";


export default function AddItem(props) {
  const { item, onAddItemName, onAddItemDesc, onFormSubmit } = props
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={item.name}
            onChange={onAddItemName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={item.desc}
            onChange={onAddItemDesc}
          />
        </div>
        <div className="form-footer">
          {(item.name === "" || item.desc === "") && (
            <div className="validation">Поля не заполнены!</div>
          )}
          <input
            type="submit"
            className="ui-button"
            value="Добавить"
            disabled={item.name === "" || item.desc === ""}
          />
        </div>
      </form>
    </>)

}