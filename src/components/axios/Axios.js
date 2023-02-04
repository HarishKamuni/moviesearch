import axios from "axios";

const Axios = async(searchString) => {
    const data = await axios.get("https://api.tvmaze.com/search/shows?q="+searchString)
    // console.log(data);
    if(data!=null){
        return data.data;
    }
}

export default Axios