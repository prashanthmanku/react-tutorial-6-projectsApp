import './index.css'

const TabItem = props => {
  const {tabDetails, updateactivetabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClicktabItem = () => {
    updateactivetabId(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClicktabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
