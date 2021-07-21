import React, { useEffect } from 'react';
import ListProduction from 'parts/production/production';
import Header from 'parts/header';
import production from 'assets/data/Production.json';

export default function Production() {
  const dataProduction = production.productions;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.remove('hidden');
  }, []);
  return (
    <>
      <Header />
      <ListProduction data={dataProduction} />
    </>
  );
}
