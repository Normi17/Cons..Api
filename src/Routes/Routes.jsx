import {Routes,Route} from 'react-router-dom';
import FakeStore from '../Pages/FakeStore'
import Poke from '../Pages/Poke'
import Rickandmorty from '../Pages/Rickandmorty'
import Movie from '../Pages/Movie'
import Marvels from '../Pages/Marvels'


export function Hola() {
    return (
        <Routes>
            <Route path='/fake' element={<FakeStore/>} />
            <Route path='/poke' element={<Poke/>} />
            <Route path='/rick' element={<Rickandmorty/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/marvels' element={<Marvels/>}/>

        </Routes>
    )
}


