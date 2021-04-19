import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'
import { useStoreActions, useStoreState } from './store'
import { TodosTable } from './components/TodosTable'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#FD5000',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#CA4000',
    },
  },
}))

export const App: React.FC = () => {
  const classes = useStyles()

  const { todos, todosLoaded } = useStoreState((state) => state.todos)
  const { getTodos } = useStoreActions((actions) => actions.todos)

  const onLoadTodos = useCallback(() => {
    getTodos()
  }, [getTodos])

  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            onClick={onLoadTodos}
          >
            Load TODOs, now!
          </Button>
        </Grid>
        <Grid item xs={10}>
          {todosLoaded && <TodosTable todos={todos} />}
        </Grid>
      </Grid>
    </div>
  )
}
