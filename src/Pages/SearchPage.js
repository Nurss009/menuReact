import React, {useState} from "react";
import Heder from "../Components/Heder";
import axios from "axios";
import MealList from "../Components/MealList";
import Footer from "../Components/Footer";

const SearchPage = () => {

    const [inputMeal, setInputMeal] = useState("")
    const [searchMeal, setSearchMeal] = useState([])
    const handleSearch = () => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputMeal}`)
            .then(({data}) => {
                console.log(data.meals)
                setSearchMeal(data.meals)
            })
    }


    return (
        <>
            <div className="container">
                <Heder/>
                <input placeholder={'Ведите название блюда'} type="text"
                       onChange={(e) => setInputMeal(e.target.value)}
                />
                <button onClick={handleSearch}>
                    Search
                </button>
                <MealList meals={searchMeal}/>
            </div>
            <Footer/>
        </>
    )
}
export default SearchPage



