import React, { useState, useEffect } from 'react';
import '../style/main.scss';
import { usePrev } from '../hooks/usePrev';

interface IProps {
    value: any;
    onChange: any;
}
const Autocomplete: React.FC<IProps> = ({ value, onChange }) => {
    const [string, setString] = useState('');
    const [index, setIndex] = useState(0);
    const description = 'Aplikacja zaciąga userów, których lista jest następnie dostarczana do localStorage. Po kliknięciu na element wyrzucony z inputu, dodajemy ten element do drugiej listy. Usuwamy elementy z drugiej listy za pomocą kliknięcia w dany element. Jeśli chodzi o mechanizm szukania, wg założenia, żeby nie instalować dodatkowych bibliotek (chodzi mi o lodasha) użyłem starej, dobrej pętli for. Mogę powiedzieć, że wszystkie rozwiązania js-owe są moim pomysłem :)'
    
    const prevString = usePrev(string);
    const modification = description.split('');
   
    const randomTime : number = Math.random() * (250-50) + 50;
    const timeout = (array : any) => {
        return setTimeout(()=>{

            let str = string + array[index]
            setIndex(index+1)
            setString(str)
        },randomTime)
    }
useEffect(() => {
    if (prevString !== string && index < modification.length){
        timeout(modification)
    } 
})


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
                <h4>
                    {description}
                </h4>
            </article>
        </React.Fragment>
    )
}
export default Autocomplete;