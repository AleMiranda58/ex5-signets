import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl} error>
        <InputLabel htmlFor="name-native-error">Tri des dossiers</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          name="name"
          inputProps={{
            id: 'name-native-error',
          }}
        >
          <optgroup>
            <option value="hai">Date de modification descendante</option>
            <option value="hai">Nom de dossier ascendant</option>
            <option value="hai">Nom de dossier descendant</option>
          </optgroup>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
