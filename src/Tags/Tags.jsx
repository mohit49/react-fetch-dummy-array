export default function Header(props) {
 return <header>{props.children}</header>
}
export function Main(props) {
    return <main>{props.children}</main>
}
export function MoviList(props) {
    return <li>
        <h3>{props.movieName}</h3>
        <div className='movie-container'>
            <img alt='' src={props.moviePoster}/>
        </div>
        <div className='duration'>{props.movieDuration}</div>
    </li>
}