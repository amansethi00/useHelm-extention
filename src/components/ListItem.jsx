import useHover from "../hooks/useHover";
import './index.css'

const ListItem = ({url, count, removeHandler}) => {
    const [ hoverRef ,isHovered ] = useHover();
    return <div className={`list-item`} ref={hoverRef}> 
            <div className="list-value" >
                <span className="url">{url} </span> 
                <span className="bold" >{count} </span>
            </div>
            {isHovered ? <button className="button highlight" onClick={removeHandler}>remove</button> : null}
        </div>
}
export default ListItem;