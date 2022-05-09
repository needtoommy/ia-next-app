import React from 'react'

function Post() {
    const [myfetch, setMyfetch] = React.useState([]);
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts ")
            .then((res) => res.json())
            .then((res) => setMyfetch(res))
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {myfetch && myfetch.map((data) => (
                        <>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.userId}</td>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Post