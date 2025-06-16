import { useState } from "react"

const arr = [
    { id: '1', name: 'Avengers', rating: 4.5, year: 2012 },
    { id: '2', name: 'Avengers Age of Ultron', rating: 4.5, year: 2015 },
    { id: '3', name: 'Avengers Infinity War', rating: 4.5, year: 2018 },
    { id: '4', name: 'Avengers Endgame', rating: 4.5, year: 2019 },
]
const WithKey = () => {

    const [movies, setMovies] = useState(arr)

    const tableHeading = Object.keys(movies.length ? movies[0] : {})

    const handleDelete = (id: string) => {
        setMovies(movies.filter((movie: any) => movie.id !== id))
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        {tableHeading.map((key) => {
                            return <th key={key}>{key}</th>
                        })}
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.length ? movies.map((movie: any) => {
                        return (
                            <tr key={movie.id}>
                                {tableHeading.map((value: string) => {
                                    return <td key={value}>{movie[value]}</td>
                                })}
                                <td>
                                    <button onClick={() => handleDelete(movie.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }):<></>}
                </tbody>
            </table>
        </>
    )
}

const Key = () => {
    return (
        <div>
            <WithKey />
            <hr />
        </div>
    )
}

export default Key