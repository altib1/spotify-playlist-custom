
# Spotify Custom Playlist

An app which allows users to show the currentplaying music on spotify and the details like the current time and also shows the playlists on your webiste 

## Getting Started
First, add a .env.local file and inside fill these constants : 
You can get this information from your https://developer.spotify.com/
```bash
###> Spotify API ###
SPOTIFY_CLIENT_ID="your_client_id"
SPOTIFY_CLIENT_SECRET="your_client_secret"
SPOTIFY_REDIRECT_URI="the_redirect_uri"
###< Spotify API ###

```

Then, run the development server:

Option 1 using symfony cli : 

```bash
cd spotify-playlist-custom
composer i
symfony serve -d
php bin/console tailwind:build --watch

```
Option 2 use a web server like Nginx or Apache to run the application : 

```bash
cd spotify-playlist-custom
composer i
php -S localhost:8000 -t public/
php bin/console tailwind:build --watch

```


Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) with your browser to see the result.


## Authors

- [@altib1](https://github.com/altib1)










