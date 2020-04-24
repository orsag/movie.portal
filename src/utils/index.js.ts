import {Movie} from "../types";

const filterDuplicates = (array: Movie[]) => {
	const getHash = (a: Movie) => a.id
	const seen = new Set()

	return array.filter((candidate: Movie) => {
		const hash = getHash(candidate)
		if (seen.has(hash)) return false
		seen.add(hash)
		return true
	})
}

export { filterDuplicates }
