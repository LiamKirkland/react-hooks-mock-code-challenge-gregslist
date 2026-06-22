import React, { useState, useEffect, useContext } from "react";
import ListingCard from "./ListingCard";
import { SearchContext } from "../context/serachTerm";

function ListingsContainer() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useContext(SearchContext)

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data.map(listing => {
      return {
        ...listing,
        favorite: false
      }
    })))
  },[])

  function onFavorite(id) {
    setListings(listings.map(listing => {
      if(listing.id === id) {
        return {
          ...listing,
          favorite: !listing.favorite
        }
      } else {
        return listing
      }
    }))
  }

  function onDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
    })
    .then(setListings(listings.filter(listing => listing.id !== id)))
  }

  const listingsToDisplay = searchTerm ? listings.filter(listing => listing.description.includes(searchTerm)) : listings
  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map(listing => <ListingCard onFavorite={onFavorite} description={listing.description} image={listing.image} location={listing.location} favorite={listing.favorite} key={listing.id} id={listing.id} onDelete={onDelete}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
