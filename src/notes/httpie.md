# Commands in HTTPie

## Getting started

- [Installation instructions →](https://httpie.io/docs#installation)
- [Full documentation →](https://httpie.io/docs)

## Commands

Get all invoices

```bash
http :8080/api/invoice
```

Filter invoices by status

```bash
http localhost:8080/api/invoice status==pending
```

Filter description, status

```bash
http localhost:8080/api/invoice description==design
```

Filter by ID

```bash
http localhost:8080/api/invoice id==9
```

Filter by client's name

```bash
http localhost:8080/api/invoice name==alex%20grim
http localhost:8080/api/invoice name==alexgrim
http localhost:8080/api/invoice name==alex+grim
```
