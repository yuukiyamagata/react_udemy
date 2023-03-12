import { getItems, getItem } from '../functions/item';

const GetItemComponent = () => {
  const items = getItems();
  const item = getItem(2);

  return (
    <>
      <ul>
      {items.map(item => {
        return (
          <li key={item.id} >{ item.name }</li>
        )
      })}
    </ul>
    { item.name }
    </>
  )
}

export default GetItemComponent;