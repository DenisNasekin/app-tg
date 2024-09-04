function getRandomCity(cities) {
    const index = Math.floor(Math.random() * cities.length);
    const randomCity = cities[index];
    return randomCity;
}

export default getRandomCity;