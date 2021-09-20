export class Periodical {
	Hash?: string; /* xxhash64 (normalized) of 'Periodical' and 'ISSN' (concatenated in that order, space deliminted) */
	id?: number; /* id property (primary key) is required by InMemoryDbService, positive numbers exist in the server database as PeriodicalID; negative numbers do not */
	ISSN?: string;
	Periodical: string;
	PeriodicalAbbreviation?: string;
}
