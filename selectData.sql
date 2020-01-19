select FirstName, LastName, AccountNumber, Balance from dbo.Users
where FirstName = 'Braedan'
and LastName like 'Zinn%';

update dbo.Users
Set AccountNumber = 555
where LastName = 'Zinn1';