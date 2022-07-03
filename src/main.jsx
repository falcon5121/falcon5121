import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from './Cards/Cards'
import './index.css'
import './Cards/Cards.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import menu from "./Menu/Menu"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />,
     <div className='container1'> {/* Classe de organização dos cards */}
     <ArrowBackIosIcon className='setas'/>
    <Card imagem="https://github.com/falcon5121.png" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae" ></Card>
    <Card imagem="https://github.com/falcon5121.png" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae" ></Card>
    <Card imagem="https://github.com/falcon5121.png" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id enim et diam fringilla bibendum. Aenean vestibulum feugiat ipsum. Etiam faucibus turpis id tellus gravida, tempor ornare felis suscipit. Nulla in leo quis nulla sollicitudin tempus blandit ut justo. Nullam luctus risus id placerat ullamcorper. Nam nulla nulla, fermentum in nulla vel, mollis molestie neque. Proin placerat dui ut sem condimentum condimentum. Cras malesuada mauris sed nulla ultrices, vel egestas leo tristique. Vivamus mollis eu quam eu tempor. Phasellus scelerisque, sem vitae" ></Card>
     <ArrowForwardIosIcon className='setas'/>
    </div>
  </React.StrictMode>
)
