import React from 'react'

function Hero() {
    const [myfetch, setMyfetch] = React.useState([]);
    const [selectHero, setSelectHero] = React.useState("");

    React.useEffect(() => {
        fetch("http://localhost:3000/api/myHero")
            .then((res) => res.json())
            .then((res) => setMyfetch(res))
    }, [])

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