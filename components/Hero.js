import React from 'react'

function Hero() {
    // const [myfetch, setMyfetch] = React.useState([]);
    const [selectHero, setSelectHero] = React.useState("");

    const myfetch = ["11 Dr Nice", "12 necromancer", "13 Bombasto", "14 Celeritas", "15 Magneta", "16 RubberMan", "17 Dynama", "18 Dr IQ", "19 Magma", "20 Tornado"];

    // React.useEffect(() => {
    //     fetch("http://localhost:3000/api/myHero")
    //         .then((res) => res.json())
    //         .then((res) => setMyfetch(res))
    // }, [])


    const hanleClickHero = (hero) => {
        setSelectHero(hero);
    }

    return (
        <div>
            <h1>My Heros</h1>
            <ul>
                {myfetch && myfetch.map((data) => (
                    <>
                        <li onClick={() => hanleClickHero(data)}>{data}</li>
                    </>
                ))}

            </ul>
            <p>My hero is {selectHero}</p>
        </div>
    )
}

export default Hero