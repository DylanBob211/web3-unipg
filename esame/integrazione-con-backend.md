# Comunicazione col backend

## Configurazione minima

Per collegare un client al backend servono solo due valori:

- URL base: `https://xmzoxtbqdbgokewqnurj.supabase.co/functions/v1`
- `apikey`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtem94dGJxZGJnb2tld3FudXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzY0NTQsImV4cCI6MjA5MzQ1MjQ1NH0.vH34qjbzbXhlr1cbJAJr-z-8qg1t6SaUoXBUA4r9q6Q`

Tutte le richieste verso il backend partono da questo URL base.

## Header da inviare

- Invia sempre `apikey`.
- Per le richieste protette invia anche `Authorization: Bearer <jwt>`.
- Le chiamate di login, registrazione e refresh usano solo `apikey`.
- La chiamata di logout richiede `apikey`, `Authorization` e `refreshToken` nel body.

## Esempio con curl

Endpoint non protetto, login:

```bash
curl -X POST 'https://xmzoxtbqdbgokewqnurj.supabase.co/functions/v1/auth-login' \
	-H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtem94dGJxZGJnb2tld3FudXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzY0NTQsImV4cCI6MjA5MzQ1MjQ1NH0.vH34qjbzbXhlr1cbJAJr-z-8qg1t6SaUoXBUA4r9q6Q' \
	-H 'Content-Type: application/json' \
	-d '{"email":"utente@example.com","password":"password123"}'
```

Endpoint protetto, feed:

```bash
curl -X GET 'https://xmzoxtbqdbgokewqnurj.supabase.co/functions/v1/feed' \
	-H 'apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhtem94dGJxZGJnb2tld3FudXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzY0NTQsImV4cCI6MjA5MzQ1MjQ1NH0.vH34qjbzbXhlr1cbJAJr-z-8qg1t6SaUoXBUA4r9q6Q' \
	-H 'Authorization: Bearer <jwt>'
```

Nel secondo caso `<jwt>` è il token ottenuto da login o register.

## Regola pratica

1. usa sempre come base `https://xmzoxtbqdbgokewqnurj.supabase.co/functions/v1`
2. invia sempre l'header `apikey`
3. dopo login o register salva il `token`
4. per tutte le chiamate protette invia `Authorization: Bearer <token>`