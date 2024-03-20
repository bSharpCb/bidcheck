// run this on the looker query results page
let api_str_arr = [];

// Update these values with the number column holding rtb_id and cr_id. 
// Note: the 'index' column (containing 1, 2, 3, 4...etc) counts as '1'
const rtb_id_col = 4;
const cr_id_col = 5;

// Row=3 represents the first row of results. By default this loop will grab the first 7 results and return combined rtb+cr ids
for(let row=3; row<10; row++){
let rtb_id = $(`#explore-results-panel > div.non-empty-state > ng-transclude > div > lk-dataflux-data-table > lk-vis-table > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(${row}) > td:nth-child(${rtb_id_col}) > span > span > a`)[0].innerText;
let cr_id = $(`#explore-results-panel > div.non-empty-state > ng-transclude > div > lk-dataflux-data-table > lk-vis-table > div > div > div.lk-vis-table-main-wrapper > table > tbody > tr:nth-child(${row}) > td:nth-child(${cr_id_col}) > span > span > a`)[0].innerText;
    let api_string = `${rtb_id}_${cr_id}`;
    api_str_arr.push(api_string);
}
copy(api_str_arr);
// end looker script
// after running this script, you'll have the array of combined ids
// paste this value into the "const pasteHere = 0" (replace the 0)