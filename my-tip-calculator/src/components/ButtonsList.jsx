import "./ButtonList.css"
function ButtonsList(){
    return(
        <div>
        <ul className="btn-list">
          <li>
            <button className="percentage-btn">5%</button>
          </li>
          <li>
            <button className="percentage-btn">10%</button>
          </li>
          <li>
            <button className="percentage-btn">15%</button>
          </li>
          <li>
            <button className="percentage-btn">25%</button>
          </li>
          <li>
            <button className="percentage-btn">50%</button>
          </li>
          <li>
            <button className="percentage-btn">Custom</button>
          </li>
        </ul>
      </div>
    )
}

export default ButtonsList;