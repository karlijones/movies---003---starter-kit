const fetchData = async ()=> {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey: '3cec4470',
            i: 'tt0848228'
        }
    });

    console.log(response.data);
}
