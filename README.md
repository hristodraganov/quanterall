**_Bike-renting company needs an algorithm, which calculates the price based on periods._**
**Task 1:**
Write a function, that calculates the total price, based on the following parameters:

1. An array of periods, which contains starting date, ending date, date when the period was
added and price for that period
Example:

[


{price_per_day: 2 , from: "2020-01-01 ", to: "2020-01-04", added: "2019-06-01"},

{price_per_day: 60 , from: "2020-01-03", to: "2020-01-08", added: "2019-06-02"},

{price_per_day: 15 , from: "2020-01-05", to: "2020-01-06", added: "2019-06-01"},

{price_per_day: 150 , from: "2020-01-08", to: "2020-01-15", added: "2019-06-15"},


]

2. Starting day of the whole rent
Example: "2020-06-01"
3. Ending day of the whole rent
Example: "2020-06-15"
4. Default price per day
Example: (5)


Notes:
* If there is no "period" for a certain time range in the whole period, use the default price;
* If there is an overlap of "periods", use the one that is added later (for the overlapped dates);
* Periods are inclusive, e.g. {from: "2020-01-01", to: "2020-01-03"} means "2020-01-01",
"2020-01-02" and "2020-01-03".
**Task 2:**
    ● Create Web Application by using React library.
    ● Create a web form that stores the periods from task 1 in the Local storage.
    ● Display the stored date in table view.
    ● Create a form that calculate the total price by using Task 1 algorithm.

