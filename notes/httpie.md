# Commands in HTTPie

## Getting started

- [Installation instructions →](https://httpie.io/docs#installation)
- [Full documentation →](https://httpie.io/docs)

## GET Commands

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
http localhost:8080/api/invoice description==design status==pending
```

Filter by secondary ID

```bash
http localhost:8080/api/invoice id==04f969b8-f616-4408-8f65-17acdef66152
```

Filter by client's name

```bash
http localhost:8080/api/invoice name==alex%20grim
http localhost:8080/api/invoice name==alex+grim
http localhost:8080/api/invoice name=="alex grim"
http localhost:8080/api/invoice name=='alex grim'
```

Get invoice by id `0e7cee1e-e78d-44d2-87da-24a45b985f81`

```bash
http :8080/api/invoice/0e7cee1e-e78d-44d2-87da-24a45b985f81
```

Delete invoice `04f969b8-f616-4408-8f65-17acdef66152`

```bash
http DELETE :8080/api/invoice/04f969b8-f616-4408-8f65-17acdef66152
```

Get status by name

```bash
http :8080/api/invoice/status/draft
```

## Update Commands

Update payment due date of invoice with ID `0e7cee1e-e78d-44d2-87da-24a45b985f81`

```bash
http PUT localhost:8080/api/invoice/update id==0e7cee1e-e78d-44d2-87da-24a45b985f81 paymentDue==2025-12-27T00:00:00Z
```

Update status of invoice with ID `0e7cee1e-e78d-44d2-87da-24a45b985f81`
TODO: enum guard rail for internal server when invalid status is passed

```bash
http PUT localhost:8080/api/invoice/update id==0e7cee1e-e78d-44d2-87da-24a45b985f81 status=='something else'
```

Httpie XML file update - NOT WORKING

```bash
http -f PUT localhost:8080/api/invoice/update id==0e7cee1e-e78d-44d2-87da-24a45b985f81 @'./files/invoice.xml'
```
