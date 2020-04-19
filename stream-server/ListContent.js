function getAllContentList () {
    let jsonObj = {};
    jsonObj["status"] = "success";
    jsonObj["description"] = "list of movies";
    jsonObj["data"] = getAllCategory();

    return JSON.stringify(jsonObj);
}

function getAllCategory () {
    let dataObj = [];
    for(i = 0; i < 4; i++){
        let catdata = {}
        let category = {};
        category["categoryType"] = getCategory(i);
        category["description"] = getCategory(i);
        catdata["category"] = category
        catdata["content"] = getContentsForCategory(i)

        dataObj.push(catdata);
    }

    return dataObj;
}

function getContentsForCategory(categoryId){
    let contentsObj = [];
    for(idx = 0; idx < 15; idx++){
        let detailObj = {}
        detailObj["title"]="Avenger";
        detailObj["format"]= "mp4";
        detailObj["duration"]="30 mins";
        detailObj["size"]= "1G";
        detailObj["rating"]="4.5";
        detailObj["image"]= "http://localhost:5000/image/avenger-endgame.jpeg";
        detailObj["file"]="http://localhost:5000/video";
        detailObj["cast"]= "Robert Downey Jr. as Tony Stark / Iron Man:";
        detailObj["description"] = "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."
        contentsObj.push(detailObj);
    }
    
    return contentsObj;
}

function getCategory (id) {
    let ret = "";
    switch (id) {
        case 0:
            ret = "comedy";
            break;
        case 1:
            ret = "Action";
            break;
        case 2:
            ret = "Romantic";
            break;
        case 3:
            ret = "thriller";
            break;
        default:
            ret = "comedy";
    }

    return ret;
}

module.exports = {
    getAllContentList
}