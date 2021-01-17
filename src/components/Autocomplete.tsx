import React from 'react';
import '../style/main.scss';

interface IProps {
    value : any;
    onChange: any;
}

const Autocomplete : React.FC<IProps> = ({ value, onChange }) => {

    return (
        <React.Fragment>
            <form>
                <input 
              placeholder="name"
              type="text"
              value={value}
              onChange={onChange}
              />
            </form>
            <article>
                <h3>Opis działania:</h3>
                <h4>Aplikacja zaciąga userów, których lista jest następnie dostarczana do localStorage. Po kliknięciu na element wyrzucony z inputu, dodajemy ten element do drugiej listy. Usuwamy elementy z drugiej listy za pomocą kliknięcia w dany element. Jeśli chodzi o mechanizm szukania, wg założenia, żeby nie instalować dodatkowych bibliotek (chodzi mi o lodasha) użyłem starej, dobrej pętli for.</h4>
            </article>
        </React.Fragment>
    )
}
    export default Autocomplete;