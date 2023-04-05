export function filterData(searchInput, restarauntList) {
    const filterData = restarauntList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
  }