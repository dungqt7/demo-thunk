import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';


let id = 0;
function createData(GeoCode, Country, State, County, City, District, SaleTax) {
  id += 1;
  return { id,GeoCode, Country, State, County, City, District, SaleTax };
}

const rows = [
  createData(8734, 'USA', 'CT', 'Dolorsit', 'HartFord', 'Tempor Incidunt', 2,2),
  createData(8734, 'USA', 'CT', 'Dolorsit', 'HartFord', 'Tempor Incidunt', 2,2),
];

const  SimpleTable = ({values}) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Geo Code</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">State</TableCell>
            <TableCell align="left">County</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">District</TableCell>
            <TableCell align="left">SaleTax%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                 <Radio  />
               </TableCell>
              <TableCell component="th" scope="row">
                {row.GeoCode}
              </TableCell>
              {}
              <TableCell align="left">{row.Country}</TableCell>
              <TableCell align="left">{row.State}</TableCell>
              <TableCell align="left">{row.County}</TableCell>
              <TableCell align="left">{row.City}</TableCell>
              <TableCell align="left">{row.District}</TableCell>
              <TableCell align="left">{row.SaleTax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(state => ({
  values: getFormValues('demoForm')(state)
})) (SimpleTable);