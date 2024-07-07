const fetchData = async (searchTerm)=> {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey: '3cec4470',
            s: searchTerm
        }
    });

    console.log(response.data);
}

const input = document.querySelector('input');

const debounce = (func, delay) => {
    let timeoutId;
    return () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func();
        }, delay);
    };
};


const onInput = debounce(event => {
   fetchData(event.target.value); 
});

input.addEventListener('input', debounce(onInput, 500));