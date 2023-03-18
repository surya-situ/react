export function filterData (searchText, restaurantName) {
    const filteringData = restaurantName.filter((restaurantName) => {
        restaurantName?.data.name?.toLowerCase().includes(searchText.toLowerCase())
    });

    return filteringData;
};