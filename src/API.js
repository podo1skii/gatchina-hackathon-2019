export default function getNextRoute(array){
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