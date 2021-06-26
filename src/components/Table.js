import React, {useMemo} from 'react'
import { useTable,useGlobalFilter,useFilters, useSortBy, usePagination } from 'react-table'
import { Data } from './Data'
import { COLUMNS } from './Columns'
import './table.css'
import GlobalFilter from './GlobalFilter'

const Table = () => {
    
    //memoize data and columns
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])
    
    const tableInstance = useTable({
        columns,
        data},
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
        )

    
    //destructuring table instance properties
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
      //  footerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
       } = tableInstance;

       const { globalFilter, pageIndex , pageSize} = state;
      // console.log(tableInstance)
     // console.log(rows)
    // console.log(page)
    return (
        <>
        
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup => (
                   <tr {...headerGroup.getHeaderGroupProps()}>
                  
                       {
                           headerGroup.headers.map((column) =>(
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                 <span  className="sort-desc">
                                  {column.isSortedDesc ? "▼" : "▲"}
                              </span> 
                               <div>
                                   {column.canFilter? column.render('Filter') : null}
                            
                               </div>
                             
                            </th>
                           ))
                       }
                    </tr>
                )))}
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map(row => {
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                               {row.cells.map((cell) => {
                                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                               })}
                            </tr>
                        )
                    })
                }
                
            </tbody>
         { 
          /*
            <tfoot>
                {footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))}
                        </tr>
                ))
                }
            </tfoot>
            */}
           
        </table>
        <div className="page-box">
            <span>
                <select value={pageSize} 
                        onChange={(e) => setPageSize(Number(e.target.value))}>
                        {[10,25,50].map( (pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                   Show {pageSize}
                            </option>
                        ))}
                </select>
                {' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                   Previous
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                   Next
            </button>
        </div>
        
        </>
    )
}

export default Table;
