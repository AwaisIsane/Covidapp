import { DataTable } from 'react-native-paper';
import React from 'react'
const Entries = ({ele}) => {
    return (
      <DataTable.Row>
          <DataTable.Cell>{ele.name}</DataTable.Cell>
          <DataTable.Cell >{ele.dose1.toLocaleDateString("en-US")}</DataTable.Cell>
          <DataTable.Cell >{ele.dose2.toLocaleDateString("en-US")}</DataTable.Cell>
        </DataTable.Row>
    )
  }

export default Entries;