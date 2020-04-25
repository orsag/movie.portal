import React, {useState} from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
	onClick: (searchText: string) => void,
	onKeyPress: (event: any, searchText: string) => void,
}

const Search = (props: Props) => {
	const classes = useStyles();
	const [input, setInput] = useState('')

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		props.onClick(input)
	}

	const onChange = (event: React.FormEvent) => {
		// @ts-ignore
		setInput(event.target.value)
	}

	const onKeyPress = (event: React.KeyboardEvent) => {
		props.onKeyPress(event, input)
	}

	return (
		<Paper component="form" className={classes.root} onSubmit={onSubmit}>
			<InputBase
				name={'searchText'}
				value={input}
				onInput={onChange}
				onKeyPress={onKeyPress}
				className={classes.input}
				placeholder="Search movies"
			/>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			width: 400,
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		divider: {
			height: 28,
			margin: 4,
		},
	}),
)

export default Search
