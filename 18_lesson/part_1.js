const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const obj1 = [
    {
        endPoint: 'todos',
        field: 'title',
    },
    {
        endPoint: 'comments',
        field: 'body',
    },
    {
        endPoint: 'users',
        field: ['name', 'email'],
    },
    {
        endPoint: 'posts',
        field: ['id', 'title'],
    },
]

function getData(instance) {
    let resultArray;
    fetch(`${BASE_URL}${instance.endPoint}`).then((response) => {
        return response.json();
    }).then((result) => {
        console.log(`data for endpoint: /${BASE_URL}${instance.endPoint}`, result.map((element) => {
            return element[instance.field];
        }));
    });
}

async function getDataAsync(instance) {
    const response = await fetch(`${BASE_URL}${instance.endPoint}`);
    const result = await response.json();
    console.log(`"ASYNC/AWAIT function" data for endpoint: /${BASE_URL}${instance.endPoint}`, result.map((element) => {
        return [element[instance.field[0]], element[instance.field[1]]];
    }));

}

for (let obj of obj1) {
    if (obj.field instanceof Array) {
        getDataAsync(obj);
    } else {
        getData(obj);
    }
}