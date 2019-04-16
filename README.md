# US Equity Data Viz Playground

Using a free trial to chart stock tickers, both on a daily and interaday time series.


# Alpha Vantage

[Alpha Vantage API](https://www.alphavantage.co/documentation/) offers free service for fetching daily quotes and even some intraday tickers.  

# API rate limits

Alpha Vantage will limit us to 5 API requests per minute and 500 requests per day at the free tier.  We can probably have one account pinging for 500 of the most active stocks daily, and another account set up to ping for minute by minute data for a certain stock.  eg.  [Nasdaq: LYFT](https://finance.yahoo.com/quote/LYFT)

Premium subscription can be [found here](https://www.alphavantage.co/premium/)

# Techs 

We will be exploring certain techs to get our hands dirty.  

- [D3.js](https://d3js.org/) for crafting beautiful front end charts. 
- GraphQL-Apollo for an internal API.
- GraphQL subscriptions could be used for intraday chart with auto-refreshing.
- AWS for cloud database + services. 

# Teammates

- Niko Skoularikis
