const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <img src={props.src}></img>
            <h5>{props.description}</h5>
            <a href={props.link}>Click me!</a>
        </div>
    );
}

export default Card