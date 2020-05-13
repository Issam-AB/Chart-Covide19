import React,{useState,useEffect} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import style from './ContryPicker.module.css'
import {fetchcountries} from '../../api'

const ContryPicker = () => {
    const [fetchedCountries,setFetchedCountries] =useState([])
    useEffect(() => {
        const fetchAPI = async () => {
           setFetchedCountries(await fetchcountries())
        }
        fetchAPI()
    },[setFetchedCountries]);


    return (
       <FormControl className={style.formControl}>
         <NativeSelect>
             <option value="global">Global</option>
             {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
         </NativeSelect>
       </FormControl>
    )
}
export default  ContryPicker ;