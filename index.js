const fetchData = async ()=> {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey: '3cec4470',
            s: 'avengers'
        }
    });

    console.log(response.data);
}
