import './tinderCard.css';
import { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [lastDirection, setLastDirection] = useState();

    const [people, setPeople] = useState([
        {
            name: 'Iron Man',
            url: 'https://images.hdqwalls.com/download/i-am-iron-man-4k-ky-1920x1080.jpg'
        },
        {
            name: 'Captain America',
            url: 'https://images.hdqwalls.com/download/captain-america-2020-4k-2z-1920x1080.jpg'
        },
        {
            name: 'Black Panther',
            url:'https://www.pixelstalk.net/wp-content/uploads/images6/Comic-Black-Panther-Wallpaper-HD.jpg'
        },
        {
            name:'Hulk',
            url:'https://wallpaperaccess.com/full/146393.jpg'
        },
        {
            name:'vision',
            url:'https://wallpapercave.com/wp/wp2407171.jpg'
        },
        {
            name:'Hawkeye',
            url:'https://c4.wallpaperflare.com/wallpaper/774/478/463/the-film-jeremy-renner-the-avengers-hawkeye-wallpaper-preview.jpg'
        },
        {
            name:'Thor',
            url:'https://wallpaperaccess.com/full/222132.jpg'
        },
        {
            name:'Black Widow',
            url:'https://wallpaperaccess.com/full/430398.jpg'
        },
        {
            name:'Loki',
            url:'https://wallpaperaccess.com/full/8225103.jpg'
        },
        {
            name:'Doctor Strange',
            url:'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/06/doctor-strange-2-1654255586.jpg'
        },
        {
            name:'Wong',
            url:'data:image/jpeg;base64,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'
        },
        {
            name:'Wanda',
            url:'https://i.pinimg.com/736x/d8/19/5a/d8195ae6c0eb7c2ddc26e329aec25c5a.jpg'
        },
        {
            name:'Bat Man',
            url:'https://images.hdqwalls.com/wallpapers/2020-batman-ben-affleck-4k-9i.jpg'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log('removing : ' + nameToDelete);
        setLastDirection(direction);
    }

    const outOffFrame = (name) => {
        console.log(name + ' left the screen')
    }


    return (<>
        <div className='tinder-cards'>
            <div className='tinderCards_cardContainer'>
                {
                    people.map((person) => {
                        return (<>
                            {/* <h1>{person.name}</h1> */}
                            <TinderCard
                                className='swipe'
                                key={person.name}
                                preventSwipe={["dp", "down"]}
                                onSwipe={(dir) => { swiped(dir, person.name) }}
                                onCardLeftScreen={() => { outOffFrame(person.name) }}
                            >
                                <div
                                    style={{ backgroundImage: `url(${person.url})`, backgroundRepeat: 'no-repeat' }}
                                    className='card'
                                >
                                    <h3>{person.name}</h3>
                                </div>
                            </TinderCard>
                        </>)
                    })
                }
            </div>
        </div>
    </>);
}

export default TinderCards