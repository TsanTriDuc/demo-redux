/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars

import "./index.scss"

function Button({ children, type = "primary", onClick }) {
    //primary => blue color
    //danger => red color
    //BEM => Block Element Modifier

    //button--primary => right rule BEM
    //button--danger
    return (
    <button onClick={onClick} className={`button button--${type}`}>{children}</button>
  )
}

export default Button