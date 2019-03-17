

const testData = () => {
    let data = new Array(288); 

    for(let i = 0; i < data.length; i++){
        for(let j = 0; j < 5; j++){
            if(Array.isArray(data[i])){
                data[i].push(Math.floor(Math.random() * 80) + 30);
            } else {
                data[i] = [Math.floor(Math.random() * 80) + 30]
            }
        }
    }
    return data
}

export default testData;