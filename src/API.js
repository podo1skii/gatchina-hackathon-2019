import museum from './Images/bank-2.svg';
import monument from './Images/greek-column.svg';


export function getNextRoute1(array){
    let path = '/';
    let stackParams = [];
    if (array[1] === 1) {
        path = path + 'meals/';
    }else{
        path = path + 'duration/';
    }
    for (let i = 0; i < array.length; i++) {
        if (i != 1 && array[i] === 1){
            switch (i) {
                case 0:
                    stackParams.push('like');
                    break;
                case 2:
                    stackParams.push('bike');
                    break;
                case 3:
                    stackParams.push('car');
                default:
                    break;
            }
        }
    }
    path = path + stackParams.join('&');
    return path;
}

export function getNextRoute(array) {
    let path = '/';
    if (array[1] === 1) {
        path = path + 'meals/';
    }else{
        path = path + 'duration/';
    }
    path = path + array.join('');
    return path;
}


export function getTypeOfPlace(type){
    switch (type) {
        case "museum":
            return museum;
        case "monument":
            return monument;
    
        default:
            break;
    }

}

export function getInfoPlace(id){
    return 'http://157.230.116.199:8008/point='+ id;
}

export function getRoute(arrayThemes, arrayFood, duration){
    arrayThemes = arrayThemes.join('');
    arrayFood = arrayFood('');
    duration = duration + '';
    return 'http://157.230.116.199:8008/params='+ arrayThemes + '&'+ arrayFood + '&'+ duration;
}

let headers = new Headers({
    'Access-Control-Allow-Origin': 'localhost:3000'
})

let options = {
    'Authorization': `Bearer 6ab4f96f0c8479258b57a00d86b3a7b1220d8041c9dc6c391c41cfa8b0239a14`,
    'Content-Type': 'application/json',
    headers:{
        headers
    }
}



export function serverResponse(urlRequest) {
    return fetch(urlRequest, options).then(function(response) {
        return response.json();
    })
}

export function serverResponseOld(urlRequest) {
    let request = new XMLHttpRequest();
    request.open('GET', urlRequest, false);
    request.send();
    if (request.status !== 200) {
        // console.log(request.status + ': ' + request.statusText);
    } else {
        let response = request.responseText;
        response = JSON.parse(response);
        return response;
    }
}