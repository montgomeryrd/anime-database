import AnimeCard from './AnimeCard';

const MainContent = ({ handleSearch, search, setSearch, animeList }) => {

    const list = animeList.map(anime => <AnimeCard anime={anime} key={anime.mal_id} />);
    return (
        <main>
            <div className="main-head">
                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="search for an anime..."
                        required
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div className="anime-list">
                {list}            
            </div>
        </main>
    )
}

export default MainContent;