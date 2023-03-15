export default function GridCard(props) {
    return (
        props.imageBackground ? 
        <div className={props.className} style={{backgroundImage: `url(${props.imageBackground})`}}>  
        {props.children}
        </div>
        :
        <div className={props.className}>{props.children}</div>
    )
}