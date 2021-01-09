const Sidebar = ({ topAnime }) => {

    const list = topAnime.map(anime => (
        <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">
            {anime.title}
        </a>
    ));

    return (      
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {list}         
            </nav>
        </aside>
    )
}

export default Sidebar;