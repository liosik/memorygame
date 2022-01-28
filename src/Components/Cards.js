import { useState } from 'react';
import Card from './Card';
import {Howl, Howler} from 'howler';

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/html.png', stat: "", sound: "/sound/1.wav" },
        { id: 1, img: '/img/html.png', stat: "", sound: "/sound/1.wav" },
        { id: 2, img: '/img/css.png', stat: "", sound: "/sound/2.wav" },
        { id: 2, img: '/img/css.png', stat: "", sound: "/sound/2.wav" },
        { id: 3, img: '/img/js.png', stat: "", sound: "/sound/3.wav" },
        { id: 3, img: '/img/js.png', stat: "", sound: "/sound/3.wav" },
        { id: 4, img: '/img/scss.png', stat: "", sound: "/sound/4.wav" },
        { id: 4, img: '/img/scss.png', stat: "", sound: "/sound/4.wav" },
        { id: 5, img: '/img/react.png', stat: "", sound: "/sound/5.wav" },
        { id: 5, img: '/img/react.png', stat: "", sound: "/sound/5.wav" },
        { id: 6, img: '/img/vue.png', stat: "", sound: "/sound/6.wav" },
        { id: 6, img: '/img/vue.png', stat: "", sound: "/sound/6.wav" },
        { id: 7, img: '/img/angular.png', stat: "", sound: "/sound/7.wav" },
        { id: 7, img: '/img/angular.png', stat: "", sound: "/sound/7.wav" },
        { id: 8, img: '/img/nodejs.png', stat: "", sound: "/sound/8.wav" },
        { id: 8, img: '/img/nodejs.png', stat: "", sound: "/sound/8.wav" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const {Howl, Howler} = require('howler')
    const soundPlay = (src) =>{
        const sound = new Howl({
            src
        })
        sound.play();

    }


    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
            soundPlay(items[id].sound)
        }else{
            check(id)
            soundPlay(items[id].sound)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards