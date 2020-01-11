import React from 'react';
import { connect } from 'react-redux';
import './SearchPage.css';
import Header from '../Header/Header';
import SearchPlayerForm from '../SearchPlayerForm/SearchPlayerForm';

export const SearchPage = () => {
  return (
    <>
      <Header />
      <SearchPlayerForm />
    </>
  )
}

export default SearchPage;
