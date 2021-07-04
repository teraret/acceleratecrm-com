import React from 'react';
import  DataGrid  from 'accelerate-ui';

function Table() {
    const COLUMN_WIDTH = 350;

    const BasicColumns = [

        { key: "lastName", name: "Last Name", width: COLUMN_WIDTH },
        { key: "firstName", name: "First Name", width: COLUMN_WIDTH },
        { key: "email", name: "E-Mail", width: COLUMN_WIDTH },
        { key: "mobile", name: "Mobile", width: COLUMN_WIDTH },
        { key: "address", name: "Address", width: COLUMN_WIDTH },
    ];

    const data = [
        {
            "id": 124,
            "mobile": "1-723-672-3275",
            "address": "Ap #982-7535 Sed Road",
            "firstName": "Abdul",
            "lastName": "George",
            "email": "Pellentesque.habitant.morbi@ipsumSuspendissenon.co.uk"
        },
        {
            "id": 378,
            "mobile": "1-420-826-9362",
            "address": "Ap #405-4680 Cum Street",
            "firstName": "Abel",
            "lastName": "Sloan",
            "email": "nec@mi.co.uk"
        },
        {
            "id": 303,
            "mobile": "1-408-811-7043",
            "address": "1475 Tellus Avenue",
            "firstName": "Abra",
            "lastName": "Delgado",
            "email": "aliquet@nibh.com"
        },
        {
            "id": 259,
            "mobile": "1-788-277-6514",
            "address": "P.O. Box 942, 8779 Malesuada. Rd.",
            "firstName": "Abraham",
            "lastName": "Gardner",
            "email": "Fusce@fermentum.co.uk"
        },
        {
            "id": 453,
            "mobile": "1-701-756-9861",
            "address": "P.O. Box 542, 1573 Molestie St.",
            "firstName": "Amanda",
            "lastName": "Boyer",
            "email": "molestie@vulputate.co.uk"
        },
        {
            "id": 358,
            "mobile": "1-299-677-5927",
            "address": "9981 Eros St.",
            "firstName": "Amir",
            "lastName": "Day",
            "email": "fringilla.purus.mauris@Donectempor.edu"
        },
        {
            "id": 108,
            "mobile": "1-114-966-5325",
            "address": "5490 Ut, Street",
            "firstName": "Anika",
            "lastName": "Tran",
            "email": "elit.elit@nonummyipsum.ca"
        },
        {
            "id": 270,
            "mobile": "1-782-163-2142",
            "address": "Ap #424-4669 Odio. St.",
            "firstName": "Aphrodite",
            "lastName": "Perez",
            "email": "Vivamus@pulvinar.net"
        },
        {
            "id": 10,
            "mobile": "1-868-957-0295",
            "address": "4072 Libero. St.",
            "firstName": "Arden",
            "lastName": "Ingram",
            "email": "nibh.vulputate@scelerisque.ca"
        }, {
            "id": 4,
            "mobile": "1-547-638-7911",
            "address": "Ap #114-4370 Lacus. St.",
            "firstName": "Aretha",
            "lastName": "Bentley",
            "email": "mi.enim@vehiculaPellentesque.org"
        }

    ]
    return (
        <div>
            <DataGrid label="Basic Grid" columns={BasicColumns} data={data} />
        </div>
    )
}

export default Table
