import { DefaulTitle, UnorderedList } from "../RepeatComponent/Repeat";
import {ReactComponent as Magnify} from '../Assets/svg/_Magnifyingglass.svg'
import {ReactComponent as Mic} from '../Assets/svg/_Mic.svg'
import {ReactComponent as Filter} from '../Assets/svg/filter.svg'
;

const programFilterData = [
  {
    id: 1,
    name: "Most Popular",
    value: "Popular"
  },
  {
    id: 2,
    name: "Most Current",
    value: "Current"
  },
  {
    id: 3,
    name: "From New to Old",
    value: "New"
  },
  {
    id: 4,
    name: "From Old to New",
    value: "Old"
  },
]

export function SelectResponse({data}){
  const filterItem = data.map((item) => {
    return(
      <option value={item.value}>{item.name}</option>
    )
  })
  return(
    <select name="filter" id="filter-select" defaultValue="Current">
      {filterItem}
    </select>
  )
}

export function Search(){
  return(
    <div className="search">
      <div className="search-group">
        <input type="text" className="search-input" placeholder="Enter keyword..."/>
        <div className="search-btn-group">
          <button className="search-submit" type="submit" title="search...">
            <Magnify/>
          </button>
          <button className="search-mic">
            <Mic/>
          </button>
        </div>
      </div>
      <div className="filter-group" data-mode="mobile">
        <input type="checkbox" className="filter-toggle" id="filter-toggle"/>
        <label htmlFor="filter-toggle" className="filter-toggle-label"><Filter/></label>
        <div>
          <UnorderedList className="filter" data={programFilterData}/>
        </div>
      </div>
      <div className="filter-group" data-mode="desktop">
        <SelectResponse data={programFilterData}/>
      </div>
    </div>
  )
}



export default function Program(){
  return(
    <section className="program">
      <div className="program-container">
        <DefaulTitle title="Our Program" subtitle="Our program consists of healthcare check-up, elderly training/workshops, tai chi, and many more. Let’s explore below."/>
        <Search/>
      </div>
    </section>
  )
}