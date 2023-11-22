import React, {useEffect, useState} from "react";
import Heder from "../Components/Heder";
import axios from "axios";
import MealList from "../Components/MealList";
import Footer from "../Components/Footer";

const HomePage = () => {
    const [meals, setMeals] = useState([])


    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, []);
    console.log(useEffect)



    return (
        <>
           <Heder/>
            <div className="container">
                <MealList meals={meals}/>
            </div>
            <Footer/>
        </>

    );
};

export default HomePage;
