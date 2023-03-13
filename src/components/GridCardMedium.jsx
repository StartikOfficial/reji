
export default function GridCardMedium(props) {
    return (
        props.imageBackground ? 
        <div className={props.className} style={{backgroundImage: `url(${props.imageBackground})`, backgroundRepeat: "no-repeat", backgroundSize:'cover'}}>  
        {props.children}
        </div>
        :
        <div className={props.className}>{props.children}</div>
    )
}