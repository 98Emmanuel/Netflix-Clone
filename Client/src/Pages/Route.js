import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Netflix from './Netflix';
import Netfix2 from './Netflix2';
import NetDet from './NetDet';
import PlayMov from './PlayMov';


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path = '/' element = {<Netflix />} />
        <Route path = '/netflix2' element = {<Netfix2 />} />
        <Route path = '/NetDet' element = {<NetDet />} />
        <Route path = '/PlayMov' element = {<PlayMov />} />
        
        </Routes>
        </BrowserRouter>
    )
}

export default Router;