import { DataTable } from 'react-native-paper';
import React from 'react'
const Staterow = ({state}) => {
    return (
      <DataTable.Row>
          <DataTable.Cell>{state.region.province.slice(0,3)}</DataTable.Cell>
          <DataTable.Cell numeric>{state.confirmed}</DataTable.Cell>
          <DataTable.Cell numeric>{state.confirmed_diff}</DataTable.Cell>
          <DataTable.Cell numeric>{state.deaths}</DataTable.Cell>
        </DataTable.Row>
    )
  }

export default Staterow;