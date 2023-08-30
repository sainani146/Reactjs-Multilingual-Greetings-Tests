import './index.css'

const Buttons = props => {
  const {data, onChangeTab, tab} = props
  const {buttonText, id} = data

  const onButton = () => {
    onChangeTab(id)
  }

  const tabStyle = tab === id ? 'activeButton' : ''

  return (
    <li className="buttonsList">
      <button type="button" className={`btn ${tabStyle}`} onClick={onButton}>
        {buttonText}
      </button>
    </li>
  )
}
export default Buttons
