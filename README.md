# Architecture-Client-Serveur

## Server

### Requirements:
- python
- python-venv

### Installation steps:

`python3 -m venv venv`
- Linux users : `source venv/bin/activate`
- Windows users : `env\Scripts\activate`

`pip install -r requirements.txt`
`python app.py`

Once the application is running, you can access the API endpoints using the following URLs:

http://localhost:5000/beers
http://localhost:5000/beers/{beer_id}
http://localhost:5000/breweries
http://localhost:5000/breweries/{brewery_id}
http://localhost:5000/orders
http://localhost:5000/orders/{order_id}