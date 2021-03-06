"user strict";

import Collection from '../helpers/Collection';

/**
 * Collection constructor
 */
class CollectionHandler {

	/**
   * Constructor
   *
   * @public
   * @param {Array} items Entity list
   * @param {Object} handler Entity handler
   * @param {Object} source Original response
   * @return {Array} Collection
   */
	constructor(items, handler, source) {
		let collection = new Collection(source);

		items.map((item) => {
			return collection.push(new handler().convert(item));
		});

		if (collection.length) {
			collection.type = collection[0].type;
		}
		// collection.source = source; FIXME: review this
		return collection;
	}

}

/**
 * Exports the CollectionHandler class.
 */
export default CollectionHandler;
