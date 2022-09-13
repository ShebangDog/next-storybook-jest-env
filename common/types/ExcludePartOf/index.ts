export type ExcludePartOf<Union, Part extends Union> = Union extends Part ? never : Union
