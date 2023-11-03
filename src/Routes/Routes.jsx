import {Routes,Route} from 'react-router-dom';
import FakeStore from '../Pages/FakeStore'
import Poke from '../Pages/Poke'
import Rickandmorty from '../Pages/Rickandmorty'
import Movie from '../Pages/Movie'
import Marvel from '../Pages/Marvel'



export function Hola() {
    return (
        <Routes>
            <Route path='/fake' element={<FakeStore/>} />
            <Route path='/poke' element={<Poke/>} />
            <Route path='/rick' element={<Rickandmorty/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/marvel' element={<Marvel/>}/>

        </Routes>
    )
}


