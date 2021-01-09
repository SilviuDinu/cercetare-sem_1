export default function Loader(props) {
    return (
        props.loader ? <div className="loader"></div> : null
    );
}