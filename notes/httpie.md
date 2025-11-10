# Commands in HTTPie

## Getting started

- [Installation instructions →](https://httpie.io/docs#installation)
- [Full documentation →](https://httpie.io/docs)

## GET data

Get all invoices

```bash
http :8080/api/invoice
```

Filter invoices by status

```bash
http :8080/api/invoice status==pending
```

Filter description, status

```bash
http :8080/api/invoice description==design status==pending
```

Filter by ID

```bash
http :8080/api/invoice id==9
```

Filter by client's name

```bash
http :8080/api/invoice name==alex%20grim
http :8080/api/invoice name==alex+grim
http :8080/api/invoice name=="alex grim"
http :8080/api/invoice name=='alex grim'
```

## Update An Invoice

Update payment due date of invoice with ID `0e7cee1e-e78d-44d2-87da-24a45b985f81`

```bash
http PUT :8080/api/invoice/update id==0e7cee1e-e78d-44d2-87da-24a45b985f81 paymentDue==2025-12-27T00:00:00Z
```

Update status of invoice with ID `0e7cee1e-e78d-44d2-87da-24a45b985f81`
TODO: enum guard rail for internal server when invalid status is passed

```bash
http PUT :8080/api/invoice/update id==0e7cee1e-e78d-44d2-87da-24a45b985f81 status=='something else'
```

Httpie XML file update - NOT WORKING

```bash
http -f PUT :8080/api/invoice/update id==0e7cee1e-e78d-44d2-87da-24a45b985f81 @'./files/invoice.xml'
```

## Authentication

Signup

```bash
http POST :8080/auth/signup \
  email=foo@test.com \
  password=password1234 \
  name='Test User Foo'
```

```bash
http POST :8080/auth/signup \
  email=bar@test.com \
  password=password1234 \
  name='Test User Bar'
```

Login

```bash
http POST :8080/auth/login \
  email=foo@test.com \
  password=password1234 \
```

```bash
http POST :8080/auth/login \
  email=bar@test.com \
  password=password1234 \
```

Dashboard

```bash
http :8080/auth/user/1234
```
