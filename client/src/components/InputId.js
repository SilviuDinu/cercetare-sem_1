
export default function InputId(props) {
    const validateInput = event => {
        var reg = /\d+/;
        if (!reg.test(event.key) && event.keyCode !== 8 && event.keyCode !== 13) event.preventDefault();
    }
    return (
        <form onSubmit={event => props.onSubmit(event, props.id)}>
            <input type="text" value={props.id} onChange={props.onChange} onKeyDown={validateInput} placeholder="Insert ID..." />
            <button type="submit" className="search">{props.id ? 'Search by ID' : 'Search all records'}</button>
        </form>
    );
}