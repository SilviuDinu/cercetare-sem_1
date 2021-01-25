export default function Error(props) {
    return (
        props.message ? <div className="error"><p>{props.message}</p></div> : null
    );
}