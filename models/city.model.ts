export class City {
	City: string;
	Hash?: string; /* xxhash64 (normalized) of 'City' */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as CityID; negative numbers do not */
}
