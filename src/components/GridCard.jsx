export default function GridCard(props) {
    return (
        props.imageBackground ? 
        <div className="grid-card" style={{backgroundImage: `url(${props.imageBackground})`}}>  
        {props.children}
        </div>
        :
        <div className="grid-card">{props.children}</div>
    )
}