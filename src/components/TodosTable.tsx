import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import { TTodo } from '../lib/utils/api'

interface Column {
  id: 'id' | 'userId' | 'title' | 'completed'
  label: string
  minWidth?: number
  align?: 'right'
}

const columns: Column[] = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'userId', label: 'User ID', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'completed', label: 'Completed', minWidth: 170 },
]

interface ITodosTable {
  todos: TTodo[]
}

const TodosTable: React.FC<ITodosTable> = ({ todos }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((todo) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} >
                  {columns.map((column) => {
                    const value = todo[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value.toString()}
                      </TableCell>
                    )
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={todos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TodosTable
