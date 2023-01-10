## Deployment instructions

The web app is running on a pm2 process on Sissi;  
The application files are at ~/belelabestia-it;  
To check pm2 process:

```
pm2 ls
```

After deploy, restart web app, from ~/belelabestia-it:

```
pm2 restart entry.express
```

Caddy server is exposing the web app to the web;  
to reload caddy, from ~/belelabestia-it:

```
caddy reload
```

From the dev machine, in the repo root folder, run:

```
scp -r dist server root@belelabestia.it:belelabestia-it/
```

The site should be automatically updated.
