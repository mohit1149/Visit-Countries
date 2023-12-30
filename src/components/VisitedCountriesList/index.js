import './index.css'

const VisitedCountriesList = props => {
  const {eachInitialCountriesList, onClickVisitedCountryList} = props
  const {imageUrl, name, id} = eachInitialCountriesList
  const onClickRemoveButton = () => {
    onClickVisitedCountryList(id)
  }

  return (
    <li className="output-container">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="button-container">
        <p className="country-name-paragraph">{name}</p>
        <button
          className="remove-button"
          onClick={onClickRemoveButton}
          type="button"
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesList
