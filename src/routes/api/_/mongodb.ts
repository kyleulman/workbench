import {
	MongoClient,
	MongoServerError,
	type DeleteOptions,
	type Document,
	type Filter,
	type FindOptions,
	type InsertOneOptions,
	type OptionalId,
	type UpdateFilter,
	type UpdateOptions
} from 'mongodb';

// * Types
export interface Location {
	db: string;
	collection: string;
}

export interface InsertOneQuery {
	doc: OptionalId<Document>;
	options?: InsertOneOptions | undefined;
}

export interface FindOneQuery {
	filter: Filter<Document>;
	options?: FindOptions<Document> | undefined;
}

export interface UpdateQuery {
	filter: Filter<Document>;
	update: UpdateFilter<Document> | Partial<Document>;
	options?: UpdateOptions | undefined;
}

export interface DeleteOneQuery {
	filter?: Filter<Document> | undefined;
	options?: DeleteOptions | undefined;
}

const m = new MongoClient(import.meta.env.VITE_MONGODB_URI);

// * Utils
function handleErrors(error: unknown) {
	if (error instanceof MongoServerError) console.error(error);
	throw error;
}

// * Operations
export async function insertOne(location: Location, query: InsertOneQuery) {
	try {
		await m.connect();
		return await m
			.db(location.db)
			.collection(location.collection)
			.insertOne(query.doc, query.options);
	} catch (error) {
		handleErrors(error);
	} finally {
		await m.close();
	}
}

export async function findOne(location: Location, query: FindOneQuery) {
	try {
		await m.connect();
		return await m
			.db(location.db)
			.collection(location.collection)
			.findOne(query.filter, query.options);
	} catch (error) {
		handleErrors(error);
	} finally {
		await m.close();
	}
}

export async function updateOne(location: Location, query: UpdateQuery) {
	try {
		await m.connect();
		return await m
			.db(location.db)
			.collection(location.collection)
			.updateOne(query.filter, query.update, query.options);
	} catch (error) {
		handleErrors(error);
	} finally {
		await m.close();
	}
}

export async function updateMany(location: Location, query: UpdateQuery) {
	try {
		await m.connect();
		return await m
			.db(location.db)
			.collection(location.collection)
			.updateMany(query.filter, query.update, query.options);
	} catch (error) {
		handleErrors(error);
	} finally {
		await m.close();
	}
}

export async function deleteOne(location: Location, query: DeleteOneQuery) {
	try {
		await m.connect();
		return await m
			.db(location.db)
			.collection(location.collection)
			.deleteOne(query.filter, query.options);
	} catch (error) {
		handleErrors(error);
	} finally {
		await m.close();
	}
}
