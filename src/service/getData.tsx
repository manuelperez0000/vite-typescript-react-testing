const getData = async (number: Number) => {
    const swapi = await (await fetch(`https://swapi.dev/api/people/${number}`)).json()
    return { name: swapi.name }
}

export default getData