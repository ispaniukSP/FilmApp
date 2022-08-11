export default function updateFilmTitle(data){
    const isWordArr = data["Title"].split(" ");
    const result = isWordArr.map((word) => word[0].toUpperCase()+word.slice(1)).join(" ");
    data['Title'] = result
}
