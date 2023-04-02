import './Search.css'

function Search(){
    return(
        <div className="search_container">
            <div className="search_text_container">
                 <div className="search_text">
                   Поиск по номеру
                 </div>
                 <div className="search_text">
                   Поиск по марке
                 </div>
                 <div className="search_text">
                    Поиск по названию товара
                 </div>
            </div>
            <div className="search_form_container">
        <form className="search_form" action="" method="get">
        <input className="search_input" name="s" placeholder="Искать здесь..." type="search"/>
        <button className="search_button" type="submit">Искать</button>
        </form>
            </div>
        </div>
    )
}

export default Search