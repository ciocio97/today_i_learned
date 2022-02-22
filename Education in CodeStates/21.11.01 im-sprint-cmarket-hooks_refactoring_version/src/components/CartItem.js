import React from 'react'

export default function CartItem({
  item,
  checkedItems,
  handleCheckChange,
  handleQuantityChange,
  handleDelete,
  quantity
}) {
  return (
    <li className="cart-item-body">
      <input
        type="checkbox"
        className="cart-item-checkbox"
        onChange={(e) => {
          handleCheckChange(e.target.checked, item.id)
        }}
        checked={checkedItems.includes(item.id) ? true : false} >
      </input>
      <div className="cart-item-thumbnail">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title" data-testid={item.name}>{item.name}</div>
        <div className="cart-item-price">{item.price} 원</div>
      </div>
      <input
        type="number"
        min={1}
        className="cart-item-quantity"
        value={quantity}
        onChange={(e) => {
          handleQuantityChange(item.id, Number(e.target.value))
        }}>
      </input>
      <button className="cart-item-delete" onClick={() => { handleDelete(item.id) }}>삭제</button>
    </li >
  )
}
