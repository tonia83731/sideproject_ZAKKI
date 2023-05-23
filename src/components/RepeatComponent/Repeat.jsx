



// unordered list
export function UnorderedList({className, data}){
  const listItems = data.map((item) => {
    return(
      <li className={`${className}-item`} key={item.id}>
        <a href={item.herf} className={`${className}-link`}>{item.name}</a>
      </li>
    )
  })
  
  return(
    <ul className={`${className}-list`}>
      {listItems}
    </ul>
  )
}

// default input (form)
export function DefaulInput({className, label, type, placeholder, isImportant, inputValue}){
  return(
    <div className={`input-group ${className}`}>
      <div className="input-label">
        {label}
        {isImportant ? <b className="important red">*</b> : "" }
      </div>
      <input type={type || 'text'} placeholder={placeholder || ''} />
    </div>
  )
}

// checkbox input (form)
export function CheckBoxInput({className, id, value, name}){
  return (
    <div className={`input-group ${className}`}>
      <input type="checkbox" id={id} name={id} value={value}/>
      <label for={id} className="input-label">{name}</label>
    </div>
  )
}
