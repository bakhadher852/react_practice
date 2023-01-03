import './Items.css'
const Items = (props) => {
  let listContent = <p style={{ textAlign: 'center' }}>Not added Yet</p>
  if (props.list.length > 0) {
    listContent = props.list.map((item) => {
      item.key = item.id
      return <p>{` ${item.name} (${item.age} years old)`}</p>
    })
  }
  return <div className="listItemStyle">{listContent}</div>
}
export default Items
