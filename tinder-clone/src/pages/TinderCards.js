import './tinderCard.css';
import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from '../helpers/axios';

function TinderCards() {

    useEffect(() => {

        const fetchData = async () => {
            axios.get(`/tinder/cards`)
                .then(response => {
                    setPeople(response?.data);
                })
                .catch((error) => {
                    alert('something went wrong');
                })
        };

        fetchData();
    }, []);

    const [lastDirection, setLastDirection] = useState();
    console.log('lastDirection : ', lastDirection);
    
    const [people, setPeople] = useState([]);

    const swiped = (direction, nameToDelete) => {
        // console.log('removing : ' + nameToDelete);
        setLastDirection(direction);
    }

    const outOffFrame = (name) => {
        // console.log(name + ' left the screen')
    }

    return (<>
        <div className='tinder-cards'>
            <div className='tinderCards_cardContainer'>
                {
                    people?.map((person) => {
                        return (<>
                            <TinderCard
                                className='swipe'
                                key={person.name}
                                preventSwipe={["dp", "down"]}
                                onSwipe={(dir) => { swiped(dir, person.name) }}
                                onCardLeftScreen={() => { outOffFrame(person.name) }}
                            >
                                <div
                                    key={person.name}
                                    style={{ backgroundImage: `url(${person.imgUrl})`, backgroundRepeat: 'no-repeat' }}
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