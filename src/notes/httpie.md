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

Search description, status

```bash
http localhost:8080/api/invoice description==design
```

Search by ID

```bash
http localhost:8080/api/invoice id==9
```
