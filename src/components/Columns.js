import ColumnFilter from "./ColumnFilter"

export const COLUMNS = [
    {
      Header: 'Id', 
      Footer: 'Id', 
      Filter: ColumnFilter, 
      accessor: 'id'
    },
    {
        Header: 'First Name', 
        Footer: 'First Name',
        Filter: ColumnFilter, 
        accessor: 'first_name'
    }, 
    {
        Header: 'Last Name',
        Footer: 'Last Name', 
        Filter: ColumnFilter, 
        accessor: 'last_name'
    },
    {
        Header: 'Email',
        Footer: 'Email',
        Filter: ColumnFilter, 
        accessor: 'email'  ,
        
    },
    {
        Header: 'DOB',  
        Footer: 'DOB',  
        Filter: ColumnFilter, 
        accessor: 'date_of_birth',
        disableFilters: true
    },
    {
        Header: 'Country',
        Footer: 'Country',
        Filter: ColumnFilter, 
        accessor: 'country'  
    },

]