import './index.css'

const VisitCountriesItem = props => {
  const {eachInitialCountries, onClickVisitedCountryList} = props
  const {name, id, isVisited} = eachInitialCountries
  const onClickAddButton = () => {
    onClickVisitedCountryList(id)
  }

  return (
    <li className="listed-item">
      <p className="country-name-heading">{name}</p>
      {isVisited ? (
        <p className="is-visit-button">Visited</p>
      ) : (
        <button
          type="button"
          className="visit-button"
          onClick={onClickAddButton}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default VisitCountriesItem
