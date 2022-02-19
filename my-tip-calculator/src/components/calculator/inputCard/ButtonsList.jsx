import "./ButtonList.css"
function ButtonsList(props){

  const btnHandler=(valueClicked)=>{
    props.savePercentage(valueClicked/100)
  }

    return(
        <div>
        <ul className="btn-list">
          <li>
            <button className="percentage-btn" onClick={()=>{btnHandler(5)}}>5%</button>
          </li>
          <li>
            <button className="percentage-btn" onClick={()=>{btnHandler(10)}}>10%</button>
          </li>
          <li>
            <button className="percentage-btn" onClick={()=>{btnHandler(15)}}>15%</button>
          </li>
          <li>
            <button className="percentage-btn" onClick={()=>{btnHandler(25)}}>25%</button>
          </li>
          <li>
            <button className="percentage-btn" onClick={()=>{btnHandler(50)}}>50%</button>
          </li>
          <li>
            <button className="percentage-btn" >Custom</button>
          </li>
        </ul>
      </div>
    )
}

export default ButtonsList;