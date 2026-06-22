import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

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

  console.log(listings)
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard onFavorite={onFavorite} description={listing.description} image={listing.image} location={listing.location} favorite={listing.favorite} key={listing.id} id={listing.id}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
